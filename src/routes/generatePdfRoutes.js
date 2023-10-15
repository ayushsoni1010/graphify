const express = require("express");
const { handleGeneratePDF } = require("../controllers/pdfController");
const { successResponse, errorResponse } = require("../utils/response");

const router = express.Router();

router.get("/", async (_request, response) => {
  return successResponse(response, "Let's generate the PDF file");
});

router.get("/fetch", async (_request, response) => {
  response.sendFile(`${__dirname}/frontend/public/print.pdf`);
});

router.post("/generate", async (request, response) => {
  try {
    const data = request?.body;

    if (!data) {
      return errorResponse(response, "Please provide the data to generate PDF");
    }

    return await handleGeneratePDF(request, response);
  } catch (error) {
    console.error(`Error: ${error}`);
    errorResponse(response, "An error occurred while generating PDF.", error);
  }
});

module.exports = router;
