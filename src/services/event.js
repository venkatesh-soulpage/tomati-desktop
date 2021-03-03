import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";
class EventAPI {
  static async getEvents() {
    try {
      const response = await axios.get(APIRoutes.GET_EVENTS);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async addEventRequest(data) {
    try {
      const response = await axios.post(APIRoutes.ADD_EVENT_REQUEST, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async addEventMenu(id, menu) {
    try {
      const response = await axios.post(
        `${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`,
        menu
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async getEvent(id) {
    try {
      const response = await axios.get(`${APIRoutes.GET_EVENT}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async updateEvent(id, data) {
    try {
      const response = await axios.put(`${APIRoutes.GET_EVENT}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async addEventCollaborator(data) {
    try {
      const response = await axios.post(APIRoutes.ADD_EVENT_COLLABORATOR, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
export default EventAPI;
