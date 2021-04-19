const inquirer = require("inquirer");
const { fromPairs } = require("lodash");


module.exports = async () => {
  const { config } = await inquirer.prompt({
    name: "config",
    type: "checkbox",
    message: "选择追加的npm配置",
    choices: [{
      name: "sass镜像",
      value: {
        name: "sass_binary_site",
        value: "https://npm.taobao.org/mirrors/node-sass/"
      }
    }, {
      name: "electron镜像",
      value: {
        name: "electron_mirror",
        value: "https://npm.taobao.org/mirrors/electron/"
      }
    },{
      name:"canvas_binary镜像",
      value:{
        name:"canvas_binary_host_mirror",
        value:"https://npm.taobao.org/mirrors/node-canvas-prebuilt/"
      }
    },{
      name:"phantomjs_镜像源",
      value:{
        name:"phantomjs_cdnurl",
        value:"https://npm.taobao.org/dist/phantomjs/"
      }
    }]
  });
  const pairs = config.map(({ name, value }) => [name, value]);
  return fromPairs(pairs);
};