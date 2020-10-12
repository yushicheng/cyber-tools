const getFileStatus = require("./getFileStatus");
const createCommentTitle = require("./createCommentTitle");
const inputDescriptionText = require("./inputDescriptionText");

module.exports = async function inputNormal({ type, title = "", message = "请输入提交的内容" }) {
  const comment_title = createCommentTitle({ type, title });
  const defaultDescription = await getFileStatus();
  const inputDescription = await inputDescriptionText(message);
  return [comment_title, inputDescription || defaultDescription].join("\n");
};