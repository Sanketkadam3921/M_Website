import { useAppointmentContext } from "../context/AppointmentContext";

/**
 * Custom hook to access appointment context
 * This is a convenience hook that wraps useAppointmentContext
 * @returns {Object} Appointment context values and methods
 */
export const useAppointment = () => {
  return useAppointmentContext();
};

export default useAppointment;
