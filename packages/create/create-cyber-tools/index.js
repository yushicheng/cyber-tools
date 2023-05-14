require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const { bootstrap } = require("global-agent");
const createTools = require("@/scripts/create-tools");
const selectTemplate = require("@/utils/selectTemplate");

if (process.env.http_proxy) {
  console.log(process.env.http_proxy);
  process.env.GLOBAL_AGENT_HTTP_PROXY = process.env.http_proxy
};
if (process.env.https_proxy) {
  console.log(process.env.https_proxy);
  process.env.https_proxy && (process.env.GLOBAL_AGENT_HTTPS_PROXY = process.env.https_proxy);
};
bootstrap();

(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    await createTools({ remote, devDependencies });
  } catch (error) {
    throw error;
  };
})();

