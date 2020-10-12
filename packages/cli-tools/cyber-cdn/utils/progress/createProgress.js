const ProgressBar = require("progress");


module.exports = (total) => {
  const progressStyle = "[:bar] (:current/:total) :pathName";
  return new ProgressBar(progressStyle, { total });
}