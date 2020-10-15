const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .usage(json.name)
  .version(json.version);

program
  .command("init")
  .description("在当前文件夹创建配置文件")
  .action(require("@/actions/create-config-file"));

program
  .command("start", { isDefault: true })
  .description("启动mock服务")
  .action(require("@/actions/start-mock-server"));


program.parse(process.argv);


