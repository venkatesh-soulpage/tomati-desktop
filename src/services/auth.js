import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

const urlEncode = function (data) {
  var str = [];
  for (var p in data) {
    if (data.hasOwnProperty(p) && !(data[p] == undefined || data[p] == null)) {
      str.push(
        encodeURIComponent(p) +
          "=" +
          (data[p] ? encodeURIComponent(data[p]) : "")
      );
    }
  }
  return str.join("&");
};

// TODO: axios default configurations

class AuthAPI {
  static postLoginDetails(postData) {
    return axios
      .post(APIRoutes.CLIENT_LOGIN, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static verifyCredentails(postData) {
    const data = { email: postData };
    return axios
      .post(APIRoutes.VERIFY_CREDENTIALS, data)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static checkCode(postData) {
    return axios
      .post(APIRoutes.CHECK_EMAIL_CODE, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log("error code\n", error.response);
        throw error.response.data;
      });
  }
  static postSignUpDetails(postData) {
    return axios
      .post(APIRoutes.CLIENT_REGISTER, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static getEmailOtp(postData) {
    return axios
      .post(APIRoutes.GET_EMAIL_OTP, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static getLocations() {
    return axios
      .get(APIRoutes.GET_LOCATIONS)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static getPlans() {
    return axios
      .get(APIRoutes.GET_PLANS)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static getDiscount(postData) {
    return axios
      .post(APIRoutes.GET_DISCOUNT, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static makePayment(postData) {
    return axios
      .post(APIRoutes.MAKE_PAYMENT, postData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static validateAuthToken() {
    return axios
      .get(APIRoutes.AUTH_TOKEN_VALIDATION)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static forgetPassword(data) {
    return axios
      .post(APIRoutes.FORGOT_PASSWORD, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static resetPassword(data) {
    return axios
      .post(APIRoutes.RESET_PASSWORD, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static getUser() {
    return axios
      .get(APIRoutes.GET_USER)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static updateUser(data) {
    return axios
      .post(APIRoutes.UPDATE_USER, data)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static getSubscriptionId(data) {
    return axios
      .post(APIRoutes.GET_SUBSCRIPTION_ID, data)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static collaboratorSignup(data) {
    console.log(data);
    let URL;
    if (data.outlet_event) {
      URL = `${APIRoutes.INVITE_COLLABORATOR_EVENT}/${data.outlet_event}/waiter-signup`;
    } else if (data.outlet_venue) {
      URL = `${APIRoutes.INVITE_COLLABORATOR_VENUE}/${data.outlet_venue}/waiter-signup`;
    }
    return axios
      .post(URL, data)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  // static chargeBee(data) {
  //   console.log(data);
  //   return axios
  //     .post(
  //       "http://localhost:3000/api/payment",
  //       {
  //         plan: "tomati-growth",
  //         addons: [
  //           {
  //             id: "additional-outlets-",
  //             unit_price: 2500,
  //             quantity: 1,
  //           },
  //           {
  //             id: "additional-events-",
  //             unit_price: 2500,
  //             quantity: 1,
  //           },
  //           {
  //             id: "cbdemo_additionaluser",
  //             unit_price: 1000,
  //             quantity: 1,
  //           },
  //         ],
  //       }
  //     )
  //     .then((response) => {
  //       console.log("RESPONSE\n", response);
  //       return response.data;
  //     });
  // }
}

export default AuthAPI;
