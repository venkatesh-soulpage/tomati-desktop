import jsPDF from "jspdf";

import latinize from "latinize";

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

export function getImgFromUrl(outlet, callback) {
  var img = new Image();
  img.src = outlet.menu_link;
  img.onload = function () {
    let formattedName = latinize(outlet.name);
    formattedName = formattedName.toLowerCase().trim().replace(/\s+/g, "");
    callback(img, outlet.name, formattedName);
  };
}

export function generatePDF(img, name, formattedName) {
  var options = { orientation: "p", unit: "mm" };
  var doc = new jsPDF(options);

  const pdfWidth = doc.internal.pageSize.getWidth();

  const main_header = "SCAN OR VISIT LINK BELOW";

  const menu_link = `menu.tomati.app/${formattedName}`;

  doc.setFont("helvetica", "bold");

  doc.text(main_header, pdfWidth / 2 - doc.getTextWidth(main_header) / 2, 20, {
    align: "justify",
  });

  doc.setTextColor(224, 71, 91);

  doc.text(menu_link, pdfWidth / 2 - doc.getTextWidth(menu_link) / 2, 28, {
    align: "justify",
  });

  try {
    doc.addImage(img, "PNG", pdfWidth / 2 - 50, 29, 100, 100);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text(name, pdfWidth / 2 - doc.getTextWidth(name) / 2, 135, {
      align: "justify",
    });

    doc.save(`${name}.pdf`);
  } catch (err) {
    // var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker
    // xhr.open("HEAD", img.src, true);
    // xhr.send();
  }
}
