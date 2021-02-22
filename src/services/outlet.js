import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

class OutletAPI {
  static updateOutlet(id, data) {
    return axios
      .put(`${APIRoutes.GET_OUTLET}/${id}`, data)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
  static addOutletMenu(id, menu) {
    return axios
      .post(`${APIRoutes.ADD_OUTLET_REQUEST}/${id}/menu`, menu)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  }
}
export default OutletAPI;
