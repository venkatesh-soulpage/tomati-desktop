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
