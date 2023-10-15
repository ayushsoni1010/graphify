const puppeteer = require("puppeteer");
const { errorResponse, successResponse } = require("../utils/response");

async function getScrapedData(request, response, website) {
  /**@Development @default false */
  // const browser = await puppeteer.launch({ headless: false });

  /**@Production @default new */
  // const browser = await puppeteer.launch({ headless: "new" });

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });

  try {
    // Launch a new browser instance

    // Create a new page
    const page = await browser.newPage();
    const url = website;

    // Navigate to the provided URL
    await page.goto(url, { waitUntil: "networkidle0" });

    // Set viewport
    await page.setViewport({
      width: 1400,
      height: 800,
    });

    const pdf = await page.pdf({
      path: "frontend/public/puppeteer.pdf",
      omitBackground: false,
      printBackground: true,
      height: 1700,
    });

    return successResponse(
      response,
      "PDF has been successfully generated and saved in the file directory",
      pdf
    );
  } catch (error) {
    console.error("Error: ", error);
    return errorResponse(response, "Error while generating PDF: ", error);
  } finally {
    // Close the browser
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = { getScrapedData };
