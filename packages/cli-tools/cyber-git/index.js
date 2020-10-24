const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");



program
  .usage("cyber-git <command>")
  .version(json.version);

program
  .command("commit")
  .description("提交文件并生成规范化命令")
  .action(require("@/actions/fast-commit"));

program
  .command("script", { isDefault: true })
  .description("运行其他脚本")
  .action(require("@/actions/run-git-scripts"));

program
  .command("open")
  .description("在浏览器中打开远程的git仓库")
  .action(require("@/actions/launch-remote-repo"));

program.parse(process.argv);




