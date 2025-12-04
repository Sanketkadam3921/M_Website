import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { usePayment } from "../../hooks/usePayment";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { fetchPaymentDetails, loading } = usePayment();
  
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    if (paymentId) {
      // Fetch payment details if payment ID is available
      fetchPaymentDetails(paymentId)
        .then((response) => {
          if (response.success) {
            setPaymentData(response.data);
          }
        })
        .catch((err) => {
          setError(err.message || "Failed to fetch payment details");
        });
    }
  }, [paymentId, fetchPaymentDetails]);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <CheckCircleIcon
          sx={{ fontSize: 80, color: "success.main", mb: 2 }}
        />
        
        <Typography variant="h4" component="h1" gutterBottom color="success.main">
          Payment Successful!
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Thank you for your payment. Your transaction has been completed
          successfully.
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {paymentData && (
          <Box sx={{ mb: 3, textAlign: "left" }}>
            <Typography variant="subtitle2" color="text.secondary">
              Payment ID: {paymentData.razorpayPaymentId || paymentId}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Order ID: {paymentData.razorpayOrderId || orderId}
            </Typography>
            {paymentData.amount && (
              <Typography variant="subtitle2" color="text.secondary">
                Amount: ₹{paymentData.amount / 100}
              </Typography>
            )}
          </Box>
        )}

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/appointment")}
          >
            Book Another Appointment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentSuccess;
