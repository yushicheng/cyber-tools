const path = require("path");
const { addAlias } = require("module-alias");
addAlias("@", path.resolve(__dirname, "../"));
const clearDNS = require("@/scripts/clearDNS");

process.on("uncaughtException", async (error) => {
  console.log(error);
  await clearDNS();
  process.exit(0);
});

process.on("unhandledRejection", async (error) => {
  console.log(error);
  await clearDNS();
  process.exit(0);
});