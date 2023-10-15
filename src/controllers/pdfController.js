const pdf = require("html-pdf");
const pdfTemplate = require("../documents");
const { successResponse, errorResponse } = require("../utils/response.js");

async function handleGeneratePDF(request, response) {
  try {
    const body = request?.body;
    console.log("Generating PDF");
    console.log(`Data: ${pdfTemplate()}`);

    pdf.create(pdfTemplate(), {}).toFile("public/result.pdf", (error) => {
      if (error) {
        console.error(error);
        response.send(Promise.reject(error));
        return errorResponse(response, "Internal server error", error);
      }
      response.send(Promise.resolve());
      return successResponse(response, "PDF successfully generated");
    });

  } catch (error) {
    console.error(`Error: ${error}`);
    return errorResponse(response, "Internal server error", error);
  }
}

module.exports = { handleGeneratePDF };
