import { Container, Typography, Box, Paper } from "@mui/material";

const GIT = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          GIT Treatment
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Our Gastrointestinal (GIT) treatment services focus on diagnosing
            and treating digestive system disorders.
          </Typography>
          <Typography variant="body1" paragraph>
            We provide comprehensive care for various gastrointestinal conditions
            with expert medical professionals.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default GIT;
