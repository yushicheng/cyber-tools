const createCommentTitle = require("@cyber-tools/comment-utils/createCommentTitle");
const inputDescriptionText = require("@cyber-tools/comment-utils/inputDescriptionText");


module.exports = async () => {
  try {
    const comment_title = createCommentTitle({ type: "init", title: "项目初始化" });
    const inputDescription = await inputDescriptionText("请输入");
    return [comment_title, inputDescription || "项目初始化提交"].join("\n");
  } catch (error) {
    throw error;
  };
};