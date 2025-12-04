import { Box, Container, Grid, Typography } from "@mui/material";
import usersIcon from "../../assets/clinic/FourLogos/users (2) 1.svg";
import trophyIcon from "../../assets/clinic/FourLogos/trophy 1.svg";
import goalsIcon from "../../assets/clinic/FourLogos/goals 1.svg";
import stethoscopeIcon from "../../assets/clinic/FourLogos/stethoscope 1.svg";

const stats = [
  {
    icon: usersIcon,
    value: "15,000+",
    label: "Happy Patients",
  },
  {
    icon: trophyIcon,
    value: "26",
    label: "Years Experience",
  },
  {
    icon: goalsIcon,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: stethoscopeIcon,
    value: "4",
    label: "Industry-Standard Certifications",
  },
];

export default function StatisticsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6, lg: 9 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 7, sm: 4, md: 6, lg: 4, xl: 33 }}
          justifyContent="center"
        >
          {stats.map((stat, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={stat.icon}
                alt={stat.label}
                sx={{
                  width: { xs: "60px", sm: "70px", md: "80px" },
                  height: "auto",
                  mb: 2,
                }}
              />

              {/* Value */}
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "145%",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#1a1a1a",
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>

              {/* Label with conditional <br /> for the 4th item */}
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "17px",
                  lineHeight: index === 3 ? "160%" : "100%", // ⭐ ONLY 4th item gets more space
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#666",
                }}
              >
                {index === 3 ? (
                  <>
                    Industry-Standard <br /> Certifications
                  </>
                ) : (
                  stat.label
                )}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
