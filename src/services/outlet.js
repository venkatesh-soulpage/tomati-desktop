import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
class OutletAPI {
  static async getOutlets() {
    try {
      const response = await axios.get(APIRoutes.GET_OUTLETS);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async addOutletRequest(data) {
    try {
      const response = await axios.post(
        `${APIRoutes.ADD_OUTLET_REQUEST}`,
        data
      );
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
  static async getOutlet(id) {
    try {
      const response = await axios.get(`${APIRoutes.GET_OUTLET}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async updateOutlet(id, data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.put(`${APIRoutes.GET_OUTLET}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async addOutletCollaborator(data) {
    try {
      const response = await axios.post(
        APIRoutes.ADD_OUTLET_COLLABORATOR,
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default OutletAPI;
