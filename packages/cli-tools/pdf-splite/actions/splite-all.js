const toast = require("@cyber-tools/cli-utils/toast");
const getMatchFile = require("@/scripts/getMatchFile");
const spliteSingle = require("@/actions/splite-single");


module.exports = async () => {
  try {
    const match_files = await getMatchFile();
    const splite_task = match_files.map(async (single_file_path) => {
      try {
        toast.start(["匹配到文件", single_file_path].join(""));
        await spliteSingle(single_file_path);
        toast.succeed([single_file_path, "切分完成"].join(""));
      } catch (error) {
        toast.fail([single_file_path, "切分失败"].join(""));
        throw error;
      };
    });
    await Promise.all(splite_task);
  } catch (error) {
    throw error;
  };
};