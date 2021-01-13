const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");


program
  .usage(json.name)
  .version(json.version);

program
  .command("init")
  .description("启动代理服务")
  .action(require("@/actions/init-config"));

program
  .command("start")
  .description("启动代理服务")
  .action(require("@/actions/start-server"));

program.parse(process.argv);


