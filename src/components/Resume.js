import React from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "./Resume-Web Development.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
  return (
    <div className="pdf-wrapper" >
       <Document className="resume" file={pdfFile}> 
        <Page pageNumber={1} className="pdf-page" scale={1.2}/> 
      </Document> 
    </div>
  );
}

export default Resume;
