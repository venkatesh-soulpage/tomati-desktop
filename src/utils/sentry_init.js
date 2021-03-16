import * as Sentry from "@sentry/browser";

export const apiCatch = (error) => {
  const storeStringify = JSON.stringify(error);

  Sentry.configureScope((scope) =>
    scope.setLevel("Error").setExtra("store", storeStringify)
  );
  // Sentry.showReportDialog(); - If you want get users feedback on error
  return Sentry.captureException(error);
};
