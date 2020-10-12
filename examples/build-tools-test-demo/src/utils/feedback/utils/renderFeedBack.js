import React from "react";
import ReactDOM from "react-dom";


export default function renderFeedBack(FeedBackComponent, props, handleDone, container) {
  document.body.appendChild(container);
  ReactDOM.render((
    <FeedBackComponent {...props} done={handleDone} />
  ), container);
};