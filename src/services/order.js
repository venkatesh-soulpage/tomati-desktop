import axios from "axios";
import "utils/axios_configuration";
import * as APIRoutes from "constants/APIRoutes";

// TODO: axios default configurations

class OrderAPI {
  // static async getLocations() {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.get(APIRoutes.GET_LOCATIONS);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }
  static async getPlans() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_PLANS);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async getDiscount(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.GET_DISCOUNT, {
        couponId: postData,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async getUser() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(APIRoutes.GET_USER);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  // static async updateUser(data) {
  //   try {
  //     // fetch data from a url endpoint
  //     const response = await axios.post(APIRoutes.UPDATE_USER, data);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }
  static async getSubscriptionId(data) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.GET_SUBSCRIPTION_ID, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async UpdatePayment(postData) {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(APIRoutes.UPDATE_PAYMENT_URL, postData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default OrderAPI;
