import { Container, Typography, Box, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to our clinic. We are dedicated to providing the best
            healthcare services to our patients.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of experienced doctors and medical professionals is
            committed to your health and well-being.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
