import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Alert,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const PaymentFail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const errorCode = searchParams.get("error_code");
  const errorDescription = searchParams.get("error_description");
  const errorSource = searchParams.get("error_source");
  const errorReason = searchParams.get("error_reason");

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <ErrorIcon
          sx={{ fontSize: 80, color: "error.main", mb: 2 }}
        />
        
        <Typography variant="h4" component="h1" gutterBottom color="error.main">
          Payment Failed
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          We're sorry, but your payment could not be processed. Please try again
          or contact support if the problem persists.
        </Typography>

        {(errorCode || errorDescription || errorReason) && (
          <Alert severity="error" sx={{ mb: 2, textAlign: "left" }}>
            {errorDescription && (
              <Typography variant="body2">
                <strong>Error:</strong> {errorDescription}
              </Typography>
            )}
            {errorReason && (
              <Typography variant="body2">
                <strong>Reason:</strong> {errorReason}
              </Typography>
            )}
            {errorCode && (
              <Typography variant="body2">
                <strong>Error Code:</strong> {errorCode}
              </Typography>
            )}
            {errorSource && (
              <Typography variant="body2">
                <strong>Source:</strong> {errorSource}
              </Typography>
            )}
          </Alert>
        )}

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/appointment")}
          >
            Try Again
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentFail;
