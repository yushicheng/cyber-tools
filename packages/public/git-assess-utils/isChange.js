const git = require("simple-git")();


module.exports = async () => {
  try {
    const { files } = await git.status();
    return Boolean(files.length);
  } catch (error) {
    throw error;
  };
};