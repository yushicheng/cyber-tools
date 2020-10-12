const inquirer = require("inquirer");


module.exports = async (message) => {
  const history = [];
  async function inputSingle() {
    try {
      const { content } = await inquirer.prompt({
        type: "input",
        name: "content",
        message: `${message}(${history.length + 1}):`
      });
      if (content) {
        history.push(content);
        await inputSingle();
      };
      return history;
    } catch (error) {
      throw error;
    };
  };
  await inputSingle();
  return history.join("\n");
}