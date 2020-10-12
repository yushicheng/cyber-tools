import ReactDOM from "react-dom";


export default function removeFeedBack(container) {
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
};