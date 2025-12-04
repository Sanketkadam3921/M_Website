import apiClient from "./axios";
import { API_ENDPOINTS } from "../utils/constants";

/**
 * Create Razorpay order
 * @param {number} amount - Amount in rupees
 * @returns {Promise} API response with order details
 */
export const createOrder = async (amount) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.CREATE_ORDER, {
      amount,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Verify payment signature
 * @param {Object} paymentData - Payment verification data
 * @param {string} paymentData.razorpay_order_id - Razorpay order ID
 * @param {string} paymentData.razorpay_payment_id - Razorpay payment ID
 * @param {string} paymentData.razorpay_signature - Razorpay signature
 * @returns {Promise} API response
 */
export const verifyPayment = async (paymentData) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.VERIFY_PAYMENT,
      paymentData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Get payment details by ID
 * @param {string} paymentId - Payment ID
 * @returns {Promise} API response
 */
export const getPayment = async (paymentId) => {
  try {
    const response = await apiClient.get(
      `${API_ENDPOINTS.GET_PAYMENT}/${paymentId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Get all payments
 * @param {Object} filters - Optional filters (status, limit, offset)
 * @returns {Promise} API response
 */
export const getAllPayments = async (filters = {}) => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_ALL_PAYMENTS, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
