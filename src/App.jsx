import React from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} fileName="Form">
        {({ loading }) =>
          loading ? <button>Loading...</button> : <button>Download</button>
        }
      </PDFDownloadLink>
      <PDFFile />
      <div>PDF Creator</div>
    </div>
  );
}

export default App;
