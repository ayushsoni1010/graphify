const pdf = require("html-pdf");
const pdfTemplate = require("../documents");
const { successResponse, errorResponse } = require("../utils/response.js");

async function handleGeneratePDF(request, response) {
  try {
    const body = request?.body;
    console.log("Generating PDF");

    pdf
      .create(pdfTemplate(), {})
      .toFile("frontend/public/print.pdf", (error) => {
        if (error) {
          console.error(error);
          return errorResponse(response, "Internal server error", error);
        }
        return successResponse(response, "PDF successfully generated");
      });
  } catch (error) {
    console.error(`Error: ${error}`);
    return errorResponse(response, "Internal server error", error);
  }
}

module.exports = { handleGeneratePDF };
