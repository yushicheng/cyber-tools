const inquirer = require("inquirer");

module.exports = async () => {
  try {
    const { scriptType } = await inquirer.prompt({
      loop: false,
      type: "list",
      name: "scriptType",
      message: "请选择提交生成的注释类型",
      choices: [{
        name: "快速提交",
        value: require("@/actions/fast-commit")
      }, {
        name: "生成.gitignore文件",
        value: require("@/scripts/create-ignore")
      }, {
        name: "重置.gitignore",
        value: require("@/scripts/reset-ignore")
      }, {
        name: "更新远程仓库(origin)",
        value: require("@/scripts/update-remote")
      }]
    });
    return scriptType;
  } catch (error) {
    throw error;
  };
};