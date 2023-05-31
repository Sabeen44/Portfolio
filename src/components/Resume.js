import React from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "sample.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Resume() {
  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
