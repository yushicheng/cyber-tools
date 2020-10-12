const inquirer = require("inquirer");


module.exports = async () => {
  const { source } = await inquirer.prompt({
    type: "list",
    name: "source",
    message: "选择注册的npm注册源",
    choices: [{
      name: "公网npm镜像源",
      value: {
        registry: "https://registry.npmjs.org/"
      }
    }, {
      name: "crgt.npm镜像源",
      value: {
        "@crgt:registry": "http://npm.crgt.xyz/",
        "registry": "http://npm.crgt.xyz/"
      }
    }]
  });
  return source;
};