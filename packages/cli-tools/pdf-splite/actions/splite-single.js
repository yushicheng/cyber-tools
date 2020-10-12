const getFilePages = require("@/scripts/getFilePages");
const getLocalFilePath = require("@/scripts/getLocalFilePath");
const saveSinglePage = require("@/scripts/saveSinglePage");
const createProgress = require("@/utils/createProgress");


module.exports = async (source) => {
  try {
    const local_pdf_file_path = await getLocalFilePath(source);
    const pdf_file_pages = await getFilePages(local_pdf_file_path);
    const progress = createProgress({ total: pdf_file_pages.length });
    const split_task_array = pdf_file_pages.map(async (origin_pdf_doc, index) => {
      try {
        await saveSinglePage(origin_pdf_doc, index, local_pdf_file_path);
        progress.tick({ current: index + 1 });
      } catch (error) {
        throw error;
      };
    });
    await Promise.all(split_task_array);
  } catch (error) {
    throw error;
  };
};