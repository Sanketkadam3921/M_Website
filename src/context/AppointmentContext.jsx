import { createContext, useContext, useState, useCallback } from "react";
import {
  createAppointment,
  getAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
} from "../services/appointment.service";

// Create Appointment Context
const AppointmentContext = createContext(null);

// Custom hook to use Appointment Context
export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error(
      "useAppointmentContext must be used within AppointmentProvider"
    );
  }
  return context;
};

// Appointment Provider Component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create appointment
  const handleCreateAppointment = useCallback(async (appointmentData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createAppointment(appointmentData);
      if (response.success) {
        setAppointments((prev) => [...prev, response.data]);
        setCurrentAppointment(response.data);
        return response.data;
      }
      throw new Error(response.message || "Failed to create appointment");
    } catch (err) {
      const errorMessage = err.message || "Failed to create appointment";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get appointment by ID
  const handleGetAppointment = useCallback(async (appointmentId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAppointment(appointmentId);
      if (response.success) {
        setCurrentAppointment(response.data);
        return response.data;
      }
      throw new Error(response.message || "Failed to fetch appointment");
    } catch (err) {
      const errorMessage = err.message || "Failed to fetch appointment";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get all appointments
  const handleGetAllAppointments = useCallback(async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllAppointments(filters);
      if (response.success) {
        setAppointments(response.data || []);
        return response.data;
      }
      throw new Error(response.message || "Failed to fetch appointments");
    } catch (err) {
      const errorMessage = err.message || "Failed to fetch appointments";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Update appointment
  const handleUpdateAppointment = useCallback(
    async (appointmentId, updateData) => {
      setLoading(true);
      setError(null);
      try {
        const response = await updateAppointment(appointmentId, updateData);
        if (response.success) {
          setAppointments((prev) =>
            prev.map((apt) =>
              apt.id === appointmentId ? response.data : apt
            )
          );
          if (currentAppointment?.id === appointmentId) {
            setCurrentAppointment(response.data);
          }
          return response.data;
        }
        throw new Error(response.message || "Failed to update appointment");
      } catch (err) {
        const errorMessage = err.message || "Failed to update appointment";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [currentAppointment]
  );

  // Delete appointment
  const handleDeleteAppointment = useCallback(async (appointmentId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await deleteAppointment(appointmentId);
      if (response.success) {
        setAppointments((prev) => prev.filter((apt) => apt.id !== appointmentId));
        if (currentAppointment?.id === appointmentId) {
          setCurrentAppointment(null);
        }
        return response;
      }
      throw new Error(response.message || "Failed to delete appointment");
    } catch (err) {
      const errorMessage = err.message || "Failed to delete appointment";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [currentAppointment]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Clear current appointment
  const clearCurrentAppointment = useCallback(() => {
    setCurrentAppointment(null);
  }, []);

  const value = {
    appointments,
    currentAppointment,
    loading,
    error,
    createAppointment: handleCreateAppointment,
    getAppointment: handleGetAppointment,
    getAllAppointments: handleGetAllAppointments,
    updateAppointment: handleUpdateAppointment,
    deleteAppointment: handleDeleteAppointment,
    clearError,
    clearCurrentAppointment,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContext;
