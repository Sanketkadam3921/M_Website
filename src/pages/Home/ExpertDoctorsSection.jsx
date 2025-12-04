import { Box, Container, Grid, Typography } from "@mui/material";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dr. Nitin Darda",
    specialty: "Homeopathy Consultant",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Yogita Darda",
    specialty: "Homeopathy Consultant",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Tanmay Darda",
    specialty: "Homeopathy Consultant",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop",
  },
];

export default function ExpertDoctorsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6, lg: 8 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            Meet Our Expert Doctors
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Our team of highly qualified and experienced medical professionals
            is dedicated to providing you with the best care possible.
          </Typography>
        </Box>

        {/* Doctor Cards Grid */}
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6, lg: 11 }}
          justifyContent="center"
          sx={{
            "& .MuiGrid-item": {
              display: "flex",
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
              }}
            >
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
