const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .name(json.name)
  .usage("cyber-type <type>")
  .version(json.version);

program
  .arguments("<type>")
  .description("在DefinitelyTyped查询类型注解")
  .action(require("@/actions/index"));

program.parse(process.argv);


