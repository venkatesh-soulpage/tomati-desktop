import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

// TODO: axios default configurations

class AuthAPI {
  static postLoginDetails(postData) {
    return axios
      .post(APIRoutes.CLIENT_LOGIN, postData)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        throw error.response.data;
      });
  }
  static postSignUpDetails(postData) {
    return axios
      .post(APIRoutes.CLIENT_REGISTER, postData)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        throw error.response.data;
      });
  }
  static validateAuthToken() {
    return axios
      .get(APIRoutes.AUTH_TOKEN_VALIDATION)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  }
  static forgetPassword(data) {
    return axios
      .post(APIRoutes.FORGOT_PASSWORD, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  }
  static resetPassword(data) {
    return axios
      .post(APIRoutes.RESET_PASSWORD, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  }
}

export default AuthAPI;
