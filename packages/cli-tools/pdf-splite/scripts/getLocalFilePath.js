const path = require("path");

module.exports = async (source) => {
  const source_path_transform = path.resolve("./", source);

  const source_path_extname = path.extname(source_path_transform);

  if (source_path_extname) {
    const path_resolve = require.resolve(source_path_transform, {
      paths: [process.cwd()]
    });
    return path_resolve;
  };

  const source_path_resolve = path.format({ name: source_path_transform, ext: ".pdf" });
  const path_resolve = require.resolve(source_path_resolve, {
    paths: [process.cwd()]
  });
  return path_resolve;

};