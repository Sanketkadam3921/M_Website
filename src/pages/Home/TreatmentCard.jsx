import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TreatmentCard({ title, description, image }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%", // mobile = full width
          sm: "300px", // small tablet
          md: "280px", // iPad Mini/Air/Pro
          lg: "360px", // laptop
          xl: "380px", // big monitors
        },
        height: {
          xs: 360,
          sm: 380,
          md: 420,
          lg: 490,
        },
        mx: "auto", // centers card horizontally
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#F2F8FF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 2.5, md: 3 },
          pt: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "220px", md: "240px" },
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
              md: "1.4rem",
            },
            color: "#1a1a1a",
            mb: -3,
            minHeight: { xs: "3rem", sm: "3.5rem", md: "4rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#666",
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            lineHeight: 1.6,
            mb: 1,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            fontFamily: "Poppins, sans-serif",
            alignSelf: "flex-start",
            color: "#155DFC",
            textTransform: "none",
            fontWeight: 300,
            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
            px: 0,
            mt: "auto",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#155DFC",
            },
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
