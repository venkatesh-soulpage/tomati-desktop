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
  static async postLoginDetails(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.CLIENT_LOGIN, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async verifyCredentails(postData) {
    const data = { email: postData };
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.VERIFY_CREDENTIALS, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async checkCode(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.CHECK_EMAIL_CODE, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async postSignUpDetails(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.CLIENT_REGISTER, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async getEmailOtp(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.GET_EMAIL_OTP, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // static async getLocations() {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.get(APIRoutes.GET_LOCATIONS);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  // static async getPlans() {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.get(APIRoutes.GET_PLANS);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  // static async getDiscount(postData) {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.post(APIRoutes.GET_DISCOUNT, {
  //       couponId: postData,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  static async makePayment(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.MAKE_PAYMENT, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async validateAuthToken() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.AUTH_TOKEN_VALIDATION);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async forgetPassword(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.FORGOT_PASSWORD, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async resetPassword(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.RESET_PASSWORD, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // static async getUser() {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.get(APIRoutes.GET_USER);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  // static async updateUser(data) {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.post(APIRoutes.UPDATE_USER, data);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  // static async getSubscriptionId(data) {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.post(APIRoutes.GET_SUBSCRIPTION_ID, data);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }

  static async collaboratorSignup(data) {
    try {
      let URL;
      if (data.outlet_event) {
        URL = `${APIRoutes.INVITE_COLLABORATOR_EVENT}/${data.outlet_event}/waiter-signup`;
      } else if (data.outlet_venue) {
        URL = `${APIRoutes.INVITE_COLLABORATOR_VENUE}/${data.outlet_venue}/waiter-signup`;
      }
      // fetch data from a url endpoint
      const response = await axios.post(URL, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async UpdatePayment(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.UPDATE_PAYMENT_URL, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default AuthAPI;
