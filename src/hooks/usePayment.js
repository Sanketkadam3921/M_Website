import { useState, useCallback } from "react";
import { createOrder, verifyPayment, getPayment } from "../services/payment.service";
import { RAZORPAY_CONFIG } from "../utils/constants";

/**
 * Custom hook for handling Razorpay payments
 * @returns {Object} Payment methods and state
 */
const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Initialize Razorpay payment
   * @param {Object} options - Payment options
   * @param {number} options.amount - Amount in rupees
   * @param {string} options.orderId - Razorpay order ID
   * @param {string} options.name - Customer name
   * @param {string} options.email - Customer email
   * @param {string} options.contact - Customer contact
   * @param {Function} options.onSuccess - Success callback
   * @param {Function} options.onError - Error callback
   */
  const initializePayment = useCallback(
    async ({
      amount,
      orderId,
      name,
      email,
      contact,
      onSuccess,
      onError,
    }) => {
      setLoading(true);
      setError(null);

      try {
        if (!window.Razorpay) {
          throw new Error("Razorpay SDK not loaded");
        }

        const options = {
          key: RAZORPAY_CONFIG.key,
          amount: amount * 100, // Convert to paise
          currency: RAZORPAY_CONFIG.currency,
          name: "Your Clinic Name",
          description: "Appointment Payment",
          order_id: orderId,
          prefill: {
            name: name || "",
            email: email || "",
            contact: contact || "",
          },
          handler: async (response) => {
            try {
              // Verify payment on backend
              const verifyResponse = await verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (verifyResponse.success && onSuccess) {
                onSuccess({
                  ...response,
                  verification: verifyResponse,
                });
              } else if (onError) {
                onError(new Error("Payment verification failed"));
              }
            } catch (err) {
              if (onError) {
                onError(err);
              }
            } finally {
              setLoading(false);
            }
          },
          modal: {
            ondismiss: () => {
              setLoading(false);
              if (onError) {
                onError(new Error("Payment cancelled by user"));
              }
            },
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (err) {
        setError(err.message || "Failed to initialize payment");
        setLoading(false);
        if (onError) {
          onError(err);
        }
      }
    },
    []
  );

  /**
   * Create order and initialize payment
   * @param {Object} paymentData - Payment data
   * @returns {Promise} Order creation response
   */
  const createOrderAndPay = useCallback(
    async (paymentData) => {
      setLoading(true);
      setError(null);

      try {
        // Create order
        const orderResponse = await createOrder(paymentData.amount);
        
        if (!orderResponse.success || !orderResponse.data?.id) {
          throw new Error("Failed to create order");
        }

        // Initialize payment with order ID
        await initializePayment({
          amount: paymentData.amount,
          orderId: orderResponse.data.id,
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.contact,
          onSuccess: paymentData.onSuccess,
          onError: paymentData.onError,
        });

        return orderResponse.data;
      } catch (err) {
        setError(err.message || "Failed to process payment");
        setLoading(false);
        throw err;
      }
    },
    [initializePayment]
  );

  /**
   * Get payment details
   * @param {string} paymentId - Payment ID
   * @returns {Promise} Payment details
   */
  const fetchPaymentDetails = useCallback(async (paymentId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getPayment(paymentId);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err.message || "Failed to fetch payment details");
      setLoading(false);
      throw err;
    }
  }, []);

  /**
   * Clear error
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    initializePayment,
    createOrderAndPay,
    fetchPaymentDetails,
    clearError,
  };
};

export { usePayment };
export default usePayment;
