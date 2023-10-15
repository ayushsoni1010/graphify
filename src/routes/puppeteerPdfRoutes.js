const express = require("express");
const { handleGeneratePDF } = require("../controllers/puppeteerController");
const { successResponse, errorResponse } = require("../utils/response");

const router = express.Router();

router.get("/", async (_request, response) => {
  return successResponse(
    response,
    "Let's generate the PDF file using Puppeteer"
  );
});

router.get("/fetch", async (_request, response) => {
  if (`${__dirname}/frontend/public/puppeteer.pdf`) {
    console.log("Fetching result: DONE✅");
  }
  return response.sendFile(`${__dirname}/frontend/public/puppeteer.pdf`);
});

router.post("/generate", async (request, response) => {
  try {
    const webiste = request?.body;

    if (!webiste) {
      return errorResponse(response, "Please provide the url to generate PDF");
    }
    response.setHeader("Content-Type", "application/pdf");

    return await handleGeneratePDF(request, response);
  } catch (error) {
    console.error(`Error: ${error}`);
    errorResponse(response, "An error occurred while generating PDF.", error);
  }
});

module.exports = router;
