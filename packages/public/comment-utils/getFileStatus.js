const git = require("simple-git")();


module.exports = async () => {
  try {
    const { created, deleted, modified, conflicted } = await git.status();
    return [
      conflicted.length ? conflicted.map((path) => (`解决了 ${path} 的冲突`)).join("\n") : undefined,
      created.length ? created.map((path) => (`创建了 ${path}`)).join("\n") : undefined,
      modified.length ? modified.map((path) => (`修改了 ${path}`)).join("\n") : undefined,
      deleted.length ? deleted.map((path) => (`删除了 ${path}`)).join("\n") : undefined
    ].filter(Boolean).join("\n");
  } catch (error) {
    throw error;
  }
};