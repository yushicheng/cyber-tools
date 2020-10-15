const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

const startProcess = require("@/scripts/startProcess");

const isInit = require("@cyber-tools/git-assess-utils/isInit");
const isChange = require("@cyber-tools/git-assess-utils/isChange");
const hasPackageJson = require("@cyber-tools/git-assess-utils/hasPackageJson");
const toast = require("@cyber-tools/cli-utils/toast");

const confirmInitial = require("@/scripts/confirm/confirmInitial");
const firstCommit = require("@/scripts/first-commit");


(async () => {
  if (!await hasPackageJson()) {
    toast.warn("当前项目文件没有package.json文件");
    process.exit(0);
  };
  if (!await isInit()) {
    if (!await confirmInitial()) {
      process.exit(0);
    } else {
      await firstCommit();
      process.exit(0);
    };
  }
  if (!await isChange()) {
    toast.warn("当前项目文件没有变动");
    process.exit(0);
  };
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
})();




