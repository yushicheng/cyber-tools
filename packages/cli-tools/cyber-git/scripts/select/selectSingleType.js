const inquirer = require("inquirer");
const currentPreset = require("@cyber-tools/preset-git-comment-cyber");


module.exports = async () => {
  try {
    const { commitType } = await inquirer.prompt({
      loop: false,
      type: "list",
      name: "commitType",
      default: Object.keys(currentPreset)[0],
      message: "请选择提交生成的注释类型",
      choices: Object.keys(currentPreset)
    });
    return commitType;
  } catch (error) {
    throw error;
  };
};