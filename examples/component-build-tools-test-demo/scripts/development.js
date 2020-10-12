const concurrently = require("concurrently");

(async function development() {
  try {
    await concurrently([
      { name: "转换组件代码", command: "npx cyber-component dev" },
      { name: "webpack调试", command: "npx cyber-spa dev" }
    ]);
  } catch (error) {
    throw error;
  } finally {
    process.exit(0);
  };
})();

