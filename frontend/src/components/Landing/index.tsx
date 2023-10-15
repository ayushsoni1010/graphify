import { Link } from "react-router-dom";
import axios from "axios";
// import { helpers } from "../../helpers";

const Landing = () => {
  console.log("General PDF");
  // const handleClickPdfGenerate = () => {
  //   axios
  //     .post(`${helpers.apiURL}/api/chart/generate`)
  //     .then((response) => {
  //       console.log(response);
  //       console.log("Generated PDF");
  //     })
  //     .catch((error) => {
  //       console.log("Error in PDF", error);
  //     });
  // };

  const handleClickPDFGeneratePuppeteer = () => {
    console.log("Puppeteer");
    axios
      .post("http://localhost:8000/api/puppeteer/generate", {
        website: "http://localhost:3000/dashboard",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <Link to="/puppeteer.pdf" target="_blank">
        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-900 text-gray-100"
          onClick={handleClickPDFGeneratePuppeteer}
        >
          Print
        </button>
      </Link>
      {/* <Link to="/print.pdf" target="_blank">
        <button
          onClick={handleClickPdfGenerate}
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-900 text-gray-100"
        >
          Print
        </button>
      </Link> */}
      <Link to="/dashboard">
        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gray-900 text-gray-100"
        >
          Live preview
        </button>
      </Link>
    </div>
  );
};

export default Landing;
