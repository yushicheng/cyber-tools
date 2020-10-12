const { PDFDocument } = require("pdf-lib");

const saveFile = require("@/utils/saveFile");
const getOriginFileName = require("@/utils/getOriginFileName");

module.exports = async (origin_pdf_doc, index, origin_file_name) => {
  try {
    const file_name = await getOriginFileName(origin_file_name);
    const save_file_name = [file_name, index + 1].join("-").concat(".pdf");
    const pdf_doc = await PDFDocument.create();
    const [copy_page] = await pdf_doc.copyPages(origin_pdf_doc, [index]);
    pdf_doc.insertPage(0, copy_page);
    const singlePageBufferContent = await pdf_doc.save();
    await saveFile(save_file_name, singlePageBufferContent, origin_file_name);
  } catch (error) {
    throw error;
  };
};