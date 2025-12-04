import { Card, CardContent, Avatar, Typography } from "@mui/material";

export default function TestimonialCard({ name, quote, image }) {
  return (
    <Card
      sx={{
        height: {
          xs: "330px", // mobile
          sm: "340px", // iPad mini
          md: "347px", // iPad air / pro
          lg: "360px", // laptop
          xl: "360px", // big desktop
        },
        width: {
          xs: "280px", // full width on mobile
          sm: "380px", // tablets
          md: "420px", // iPad / medium screens
          lg: "450px", // laptop
          xl: "480px", // big screens
        },
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: { xs: 3, sm: 3.5, md: 4 },
          justifyContent: "center",
        }}
      >
        {/* ⭐ FULLY RESPONSIVE IMAGE CONTROL */}
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: {
              xs: 70, // mobile
              sm: 80, // iPad mini
              md: 90, // iPad air / pro
              lg: 100, // laptop
              xl: 110, // large monitors
            },
            height: {
              xs: 70,
              sm: 80,
              md: 90,
              lg: 100,
              xl: 110,
            },
            mb: 2,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
            },
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#666",
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            lineHeight: 1.7,
            fontStyle: "italic",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          "{quote}"
        </Typography>
      </CardContent>
    </Card>
  );
}
