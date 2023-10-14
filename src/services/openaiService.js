const openai = require("../config/openai.js");
const { errorResponse } = require("../utils/response.js");

async function askGenie(_request, response, prompt) {
  if (!prompt) {
    return errorResponse(response, "Please provide a valid prompt");
  }

  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 500,
      temperature: 0.3,
      top_p: 0.1,
    });

    // Extract the data from the response
    const responseData = response?.choices[0]?.text;
    return responseData;
  } catch (error) {
    console.log("Error", error);
    return errorResponse(
      response,
      error,
      "Maximum tokens exceeded or something went wrong"
    );
  }
}

module.exports = { askGenie };
