import { Container, Typography, Box, Paper } from "@mui/material";

const Cosmetology = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Cosmetology
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Our cosmetology services offer a range of aesthetic treatments to
            help you look and feel your best.
          </Typography>
          <Typography variant="body1" paragraph>
            We provide safe and effective cosmetic procedures with modern
            techniques and experienced professionals.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Cosmetology;
