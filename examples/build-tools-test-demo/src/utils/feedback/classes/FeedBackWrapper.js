import { EventEmitter } from "events";
import renderFeedBack from "../utils/renderFeedBack";
import removeFeedBack from "../utils/removeFeedBack";
import createContainer from "../utils/createContainer";

// feedback装饰类
class FeedBackWrapper {

  constructor (handleName, FeedBackComponent) {
    this.oEvent = new EventEmitter();
    this.oContainer = createContainer();
    this.component = FeedBackComponent;

    this.eventDone = [handleName, "done"].join("-");
    this.eventError = [handleName, "error"].join("-");
    this.eventClose = [handleName, "close"].join("-");

    this.handleDone = (values) => {
      this.oEvent.emit(this.eventDone, values);
    };

    this.handleError = (errorMessage) => {
      this.oEvent.emit(this.eventError, errorMessage);
    };

  };

  open(props) {
    renderFeedBack(this.component, props, this.handleDone, this.oContainer);
    return new Promise((resolve, reject) => {
      this.oEvent.on(this.eventClose, () => {
        removeFeedBack(this.oContainer);
        this.oEvent.removeAllListeners([this.eventDone]);
        this.oEvent.removeAllListeners([this.eventClose]);
        this.oEvent.removeAllListeners([this.eventError]);
      });
      this.oEvent.on(this.eventDone, (values) => {
        resolve(values);
      });
      this.oEvent.on(this.eventError, (errorMessage) => {
        reject(errorMessage)
      });
    });
  };

  close() {
    this.oEvent.emit(this.eventClose);
  };
};


export default FeedBackWrapper;