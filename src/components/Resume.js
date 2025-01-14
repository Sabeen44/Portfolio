import React from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "./Resume-Web Development.pdf";
import { pdfjs } from "react-pdf";
import { Goback } from "./Goback";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  return (
    <>
    <div className="pdf-wrapper" >
       <Document className="resume" file={pdfFile}> 
        <Page pageNumber={1} className="pdf-page" scale={1.2}/> 
      </Document> 
    </div>
    <Goback/>
    </>
  );
}


export default Resume;
