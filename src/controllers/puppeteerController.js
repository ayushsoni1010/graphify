const { successResponse, errorResponse } = require("../utils/response.js");
const { getScrapedData } = require("../services/puppeteerService");

async function handleGeneratePDF(request, response) {
  try {
    const website = request?.body?.website;

    if (!website) {
      return errorResponse(response, "Please provide a url");
    }

    return await getScrapedData(request, response, website);
  } catch (error) {
    console.error(`Error: ${error}`);
    return errorResponse(
      response,
      "We ran into an error while generating",
      error
    );
  }
}

module.exports = { handleGeneratePDF };
