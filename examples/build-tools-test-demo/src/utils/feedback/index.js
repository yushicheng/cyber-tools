import FeedBackWrapper from "./classes/FeedBackWrapper";

const feedback = {};

function registry(handleName, FeedBackComponent) {
  feedback[handleName] = new FeedBackWrapper(handleName, FeedBackComponent);
};

// function unregistry(handleName) {
//   feedback[handleName] = null;
// };

export function registryFeedBack(handleName) {
  function feedbackDecorator(SourceComponent) {
    registry(handleName, SourceComponent);
  };
  return feedbackDecorator;
};

export default feedback;
