const fs = require("fs");
const { PDFDocument } = require("pdf-lib");
const { promisify } = require("es6-promisify");
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async (local_pdf_file_path) => {
  try {
    toast.start(["正在获取pdf文件", local_pdf_file_path].join(""));
    const read_pdf_result = await promisify(fs.readFile)(local_pdf_file_path);
    const pdf_doc = await PDFDocument.load(read_pdf_result);
    const page_count = pdf_doc.getPages().length;
    toast.succeed(["总共有", page_count, "页文件"].join(""));
    return Array(page_count).fill(pdf_doc);
  } catch (error) {
    throw error;
  };
};
