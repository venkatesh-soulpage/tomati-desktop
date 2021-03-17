import jsPDF from "jspdf";

export function replaceNulls(data) {
  return JSON.parse(JSON.stringify(data).replace(/\:null/gi, ':""'));
}

export function getVariantColorByStatus(value) {
  switch (value) {
    case "Draft":
      return "warning";
    case "Pending":
      return "info";
    case "Approved":
      return "success";
    case "Denied":
      return "danger";
    default:
      return "primary";
  }
}

export function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const downloadQr2 = (qrcode, name, doc, pdfWidth) => {
  const downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener(
    "load",
    function () {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = downloadedImg.width;
      canvas.height = downloadedImg.height;
      context.drawImage(downloadedImg, 0, 0);
      doc.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        pdfWidth / 2 - 50,
        0,
        100,
        100
      );
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text(name, pdfWidth / 2 - doc.getTextWidth(name) / 2, 101, {
        align: "justify",
      });
      doc.save(`${name}.pdf`);
    },
    false
  );
  downloadedImg.src = qrcode.src;
};

export async function downloadQr(name) {
  const qrcode = document.querySelector("#menu-qr");
  const options = {
    orientation: "p",
    unit: "mm",
  };
  const doc = new jsPDF(options);
  const pdfWidth = doc.internal.pageSize.getWidth();
  try {
    doc.addImage(qrcode.src, "PNG", pdfWidth / 2 - 50, 0, 100, 100);
  } catch (err) {
    downloadQr2(qrcode, name, doc, pdfWidth);
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);

  doc.text(name, pdfWidth / 2 - doc.getTextWidth(name) / 2, 101, {
    align: "justify",
  });

  doc.save(`${name}.pdf`);
}
