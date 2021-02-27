import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
class OutletAPI {
  static async updateOutlet(id, data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.put(`${APIRoutes.GET_OUTLET}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async addOutletMenu(id, menu) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(
        `${APIRoutes.ADD_OUTLET_REQUEST}/${id}/menu`,
        menu
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default OutletAPI;
