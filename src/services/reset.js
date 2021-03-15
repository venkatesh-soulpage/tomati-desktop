import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
import { apiCatch } from "utils/sentry_init";
// TODO: axios default configurations

class ResetAPI {
  static async forgetPassword(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.FORGOT_PASSWORD, data);
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }
  static async resetPassword(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.RESET_PASSWORD, data);
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }
}
export default ResetAPI;
