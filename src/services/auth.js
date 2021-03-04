import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
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
  static async getUserData() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_USER);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async updateUser(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.UPDATE_USER, data);
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

  static async collaboratorSignup(data) {
    try {
      let URL;
      if (data.outlet_event) {
        URL = APIRoutes.INVITE_COLLABORATOR_EVENT(data.outlet_event);
      } else if (data.outlet_venue) {
        URL = APIRoutes.INVITE_COLLABORATOR_VENUE(data.outlet_venue);
      }
      const response = await axios.post(URL, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async getUsers() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_ALL_USERS);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  }
  static async getLocations() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_LOCATIONS);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default AuthAPI;
