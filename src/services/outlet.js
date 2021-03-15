import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
import { apiCatch } from "utils/sentry_init";
class OutletAPI {
  static async getLocations() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_LOCATIONS);
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }
  static async getOutlets(data) {
    try {
      const response = await axios.post(APIRoutes.GET_OUTLETS, data);
      return response.data;
    } catch (error) {
      apiCatch(error);
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
      apiCatch(error);
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
      apiCatch(error);
      throw error.response.data;
    }
  }
  static async getOutlet(id) {
    try {
      const response = await axios.get(`${APIRoutes.GET_OUTLET}/${id}`);
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }

  static async updateOutlet(id, data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.put(`${APIRoutes.GET_OUTLET}/${id}`, data);
      return response.data;
    } catch (error) {
      apiCatch(error);
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
      apiCatch(error);
      throw error.response.data;
    }
  }
  static async toggleMenu(id, status) {
    try {
      const response = await axios.put(
        `${APIRoutes.TOGGLE_MENU}/${id}/inactivate_menu`,
        { status }
      );
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }
  static async updateMenuStatus() {
    try {
      const response = await axios.post(APIRoutes.UPDATE_MENU_STATUS);
      return response.data;
    } catch (error) {
      apiCatch(error);
      throw error.response.data;
    }
  }
}
export default OutletAPI;
