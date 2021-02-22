import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

class EventAPI {
  static updateEvent(id, data) {
    return axios
      .put(`${APIRoutes.GET_EVENT}/${id}`, data)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static addEventMenu(id, menu) {
    return axios
      .post(`${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`, menu)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
}
export default EventAPI;
