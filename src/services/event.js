import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
class EventAPI {
  static async updateEvent(id, data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.put(`${APIRoutes.GET_EVENT}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  static async addEventMenu(id, menu) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(
        `${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`,
        menu
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default EventAPI;
