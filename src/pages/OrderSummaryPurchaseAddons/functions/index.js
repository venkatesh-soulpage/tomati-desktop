import _ from "lodash";
import * as Action from "_actions";

export const handleOutlet = ({ action, userValues, setUserValues, props }) => (
  event
) => {
  if (action === "plus") {
    if ("outletaddons" in userValues) {
      setUserValues((values) => {
        return { ...values, outletaddons: userValues.outletaddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return {
          ...values,
          outletaddons: props?.order?.user?.no_of_outlets + 1,
        };
      });
    }
  } else {
    if ("outletaddons" in userValues) {
      if (userValues.outletaddons > props?.order?.user?.no_of_outlets) {
        setUserValues((values) => {
          return {
            ...values,
            outletaddons: userValues.outletaddons - 1,
          };
        });
      }
    }
  }
};
export const handleQr = ({ action, userValues, setUserValues, props }) => (
  event
) => {
  if (action === "plus") {
    if ("qraddons" in userValues) {
      setUserValues((values) => {
        return { ...values, qraddons: userValues.qraddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, qraddons: props?.order?.user?.no_of_qrcodes + 1 };
      });
    }
  } else {
    if ("qraddons" in userValues) {
      if (userValues.qraddons > props?.order?.user?.no_of_qrcodes) {
        setUserValues((values) => {
          return {
            ...values,
            qraddons: userValues.qraddons - 1,
          };
        });
      }
    }
  }
};

export const handleUsers = ({ action, userValues, setUserValues, props }) => (
  event
) => {
  if (action === "plus") {
    if ("useraddons" in userValues) {
      setUserValues((values) => {
        return { ...values, useraddons: userValues.useraddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, useraddons: props?.order?.user?.no_of_users + 1 };
      });
    }
  } else {
    if ("useraddons" in userValues) {
      if (userValues.useraddons > props?.order?.user?.no_of_users) {
        setUserValues((values) => {
          return {
            ...values,
            useraddons: userValues.useraddons - 1,
          };
        });
      }
    }
  }
};
export const handleEvent = ({ action, userValues, setUserValues, props }) => (
  event
) => {
  if (action === "plus") {
    if ("eventaddons" in userValues) {
      setUserValues((values) => {
        return { ...values, eventaddons: userValues.eventaddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return {
          ...values,
          eventaddons: props?.order?.user?.no_of_events + 1,
        };
      });
    }
  } else {
    if ("eventaddons" in userValues) {
      if (userValues.eventaddons > props?.order?.user?.no_of_events) {
        setUserValues((values) => {
          return {
            ...values,
            eventaddons: userValues.eventaddons - 1,
          };
        });
      }
    }
  }
};
