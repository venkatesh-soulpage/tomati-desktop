import _ from "lodash";
import * as Action from "_actions";

export const handleActivePlan = ({ setActivePlan, setUserValues, props }) => (
  e
) => {
  const active_plan = _.filter(props.order.plans, [
    "id",
    parseInt(e.target.value),
  ]);
  active_plan && setActivePlan(active_plan[0]);
  setUserValues({});
};

export const handleOutlet = ({
  action,
  userValues,
  setUserValues,
  activePlan,
}) => (event) => {
  if (action === "plus") {
    if ("outletaddons" in userValues) {
      setUserValues((values) => {
        return { ...values, outletaddons: userValues.outletaddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, outletaddons: activePlan.outlet_limit + 1 };
      });
    }
  } else {
    if ("outletaddons" in userValues) {
      if (userValues.outletaddons > activePlan.outlet_limit) {
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

export const handleQr = ({ action, userValues, setUserValues, activePlan }) => (
  event
) => {
  if (action === "plus") {
    if ("qraddons" in userValues) {
      setUserValues((values) => {
        return { ...values, qraddons: userValues.qraddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, qraddons: activePlan.qr_tags_limit + 1 };
      });
    }
  } else {
    if ("qraddons" in userValues) {
      if (userValues.qraddons > activePlan.qr_tags_limit) {
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

export const handleUsers = ({
  action,
  userValues,
  setUserValues,
  activePlan,
}) => (event) => {
  if (action === "plus") {
    if ("useraddons" in userValues) {
      setUserValues((values) => {
        return { ...values, useraddons: userValues.useraddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, useraddons: activePlan.user_limit + 1 };
      });
    }
  } else {
    if ("useraddons" in userValues) {
      if (userValues.useraddons > activePlan.user_limit) {
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

export const handleEvent = ({
  action,
  userValues,
  setUserValues,
  activePlan,
}) => (event) => {
  if (action === "plus") {
    if ("eventaddons" in userValues) {
      setUserValues((values) => {
        return { ...values, eventaddons: userValues.eventaddons + 1 };
      });
    } else {
      setUserValues((values) => {
        return { ...values, eventaddons: activePlan.event_limit + 1 };
      });
    }
  } else {
    if ("eventaddons" in userValues) {
      if (userValues.eventaddons > activePlan.event_limit) {
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
