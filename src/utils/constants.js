// API Endpoints
export const API_ENDPOINTS = {
  // Payment endpoints
  CREATE_ORDER: "/api/payments/create-order",
  VERIFY_PAYMENT: "/api/payments/verify-payment",
  GET_PAYMENT: "/api/payments",
  GET_ALL_PAYMENTS: "/api/payments",
  
  // Appointment endpoints
  CREATE_APPOINTMENT: "/api/appointments",
  GET_APPOINTMENT: "/api/appointments",
  GET_ALL_APPOINTMENTS: "/api/appointments",
  UPDATE_APPOINTMENT: "/api/appointments",
  DELETE_APPOINTMENT: "/api/appointments",
  
  // Contact endpoints
  CREATE_CONTACT: "/api/contact",
  GET_CONTACTS: "/api/contact",
};

// Payment status constants
export const PAYMENT_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
};

// Appointment status constants
export const APPOINTMENT_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

// Razorpay configuration
export const RAZORPAY_CONFIG = {
  key: import.meta.env.VITE_RAZORPAY_KEY_ID || "",
  currency: "INR",
};

// Time slots for appointments
export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

// Services/Treatments
export const SERVICES = [
  "Consultation",
  "Spine Treatment",
  "GIT Treatment",
  "Cosmetology",
  "Follow-up",
];

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
  THEME: "theme",
};
