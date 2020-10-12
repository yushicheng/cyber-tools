const ProgressBar = require("progress");


module.exports = ({ total }) => {
  const progressStyle = "[:bar] (:current/:total)";
  const oProgress = new ProgressBar(progressStyle, { total });
  return oProgress;
};
