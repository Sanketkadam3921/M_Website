import { Box, Container, Typography, Button } from "@mui/material";
import healingJourneyImage from "../../assets/clinic/ReadyToStartHealingJourney/Ready to Start Your Healing Journey_.jpg";
import calendarIcon from "../../assets/clinic/HeroSectionIcon/calendar1.svg";

export default function CallToActionSection() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        py: { xs: 8, sm: 10, md: 12, lg: 14 },
        backgroundImage: `url(${healingJourneyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#ffffff",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              mb: 3,
              color: "#ffffff",
            }}
          >
            Ready to Start Your Healing Journey?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              mb: 4,
              color: "#f0f0f0",
              lineHeight: 1.7,
            }}
          >
            Book an appointment today and take the first step towards better
            health
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={
              <Box
                component="img"
                src={calendarIcon}
                alt="Calendar"
                sx={{
                  width: "20px",
                  height: "auto",
                }}
              />
            }
            sx={{
              fontFamily: "Poppins, sans-serif",
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              backgroundColor: "#155DFC",
              borderRadius: "8px",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#155DFC",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Schedule Your Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
