import apiClient from "./axios";
import { API_ENDPOINTS } from "../utils/constants";

/**
 * Create a new appointment
 * @param {Object} appointmentData - Appointment data
 * @returns {Promise} API response
 */
export const createAppointment = async (appointmentData) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.CREATE_APPOINTMENT,
      appointmentData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Get appointment by ID
 * @param {string} appointmentId - Appointment ID
 * @returns {Promise} API response
 */
export const getAppointment = async (appointmentId) => {
  try {
    const response = await apiClient.get(
      `${API_ENDPOINTS.GET_APPOINTMENT}/${appointmentId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Get all appointments
 * @param {Object} filters - Optional filters (status, limit, offset)
 * @returns {Promise} API response
 */
export const getAllAppointments = async (filters = {}) => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_ALL_APPOINTMENTS, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Update appointment
 * @param {string} appointmentId - Appointment ID
 * @param {Object} updateData - Data to update
 * @returns {Promise} API response
 */
export const updateAppointment = async (appointmentId, updateData) => {
  try {
    const response = await apiClient.put(
      `${API_ENDPOINTS.UPDATE_APPOINTMENT}/${appointmentId}`,
      updateData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Delete appointment
 * @param {string} appointmentId - Appointment ID
 * @returns {Promise} API response
 */
export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await apiClient.delete(
      `${API_ENDPOINTS.DELETE_APPOINTMENT}/${appointmentId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
