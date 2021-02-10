import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

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
}

export default AuthAPI;
