import { Container, Typography, Box, Paper } from "@mui/material";

const Spine = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Spine Treatment
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Our spine treatment services are designed to address various spinal
            conditions and help you regain mobility and reduce pain.
          </Typography>
          <Typography variant="body1" paragraph>
            We offer comprehensive diagnosis and treatment for spine-related
            issues with the latest medical techniques.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Spine;
