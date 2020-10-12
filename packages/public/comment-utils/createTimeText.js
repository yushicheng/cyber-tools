const moment = require("moment");

module.exports = () => {
  const timeText = moment().locale("zh-cn").format("dddd a h:mm:ss MMMM Do YYYY");
  console.log(["当前时间节点", timeText].join(":"));
  return timeText;
};