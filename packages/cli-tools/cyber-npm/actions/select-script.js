const inquirer = require("inquirer");


module.exports = async () => {
  try {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "选择要执行的npm帮助脚本",
      choices: [{
        name: "生成.npmrc文件",
        value: require("@/scripts/create-npmrc")
      }, {
        name: "追加指定的.npmrc配置",
        value: require("@/scripts/append-npmrc")
      }, {
        name: "生成.npmignore文件",
        value: require("@/scripts/create-npmignore")
      }]
    });
    await action();
    process.exit(0);
  } catch (error) {
    throw error;
  };
};