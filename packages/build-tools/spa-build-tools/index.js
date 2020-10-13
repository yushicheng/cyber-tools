const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .name(json.name)
  .usage("build-spa command")
  .version(json.version);

program
  .command("dev")
  .description("开发模式")
  .action(require("@/actions/development"));

program
  .command("build")
  .description("编译成生产环境")
  .action(require("@/actions/production"));

program.parse(process.argv);








