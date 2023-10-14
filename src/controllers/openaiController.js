const { errorResponse, successResponse } = require("../utils/response.js");
const { askGenie } = require("../services/openaiService.js");

async function generateAnswers(request, response) {
  try {
    const prompt = request?.body?.prompt;

    if (!prompt) {
      return errorResponse(response, "Please provide a prompt");
    }

    const generatedData = await askGenie(request, response, prompt);
    return successResponse(response, "Answers generated:", generatedData);
  } catch (error) {
    console.error(`Error: ${error}`);
    return errorResponse(
      response,
      "We ran into an error while generating",
      error
    );
  }
}

module.exports = { generateAnswers };
