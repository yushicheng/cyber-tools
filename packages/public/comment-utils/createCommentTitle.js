const createTimeText = require("./createTimeText");

// 生成注释头
module.exports = ({ type, title }) => {
  const title_description = [title, createTimeText()].join(" ");
  const comment_title = [type, title_description].join(":");
  return comment_title;
}