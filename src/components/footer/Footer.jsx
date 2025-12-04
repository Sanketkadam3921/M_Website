import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import logo from "../../assets/clinic/logo/Group 1686550958.svg";
import facebookIcon from "../../assets/clinic/Footer/Facebook.svg";
import instagramIcon from "../../assets/clinic/Footer/Instagram.svg";
import linkedInIcon from "../../assets/clinic/Footer/LinkedIn.svg";
import emailIcon from "../../assets/clinic/Footer/Email.svg";
import phoneIcon from "../../assets/clinic/Footer/PhoneFooter.svg";
import locationIcon from "../../assets/clinic/Footer/Location.svg";

export default function Footer() {
  const theme = useTheme();
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#e9eef6",
        color: "#1a1a1a",

        // TOP padding
        pt: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },

        // BOTTOM padding
        pb: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8 },

        // ⭐ LEFT padding
        pl: { xs: 2, sm: 3, md: 4, lg: 6, xl: 10 },

        // ⭐ RIGHT padding
        pr: { xs: 5, sm: 3, md: 4, lg: 6, xl: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 9, // Mobile
            sm: 19, // iPad Mini
            md: 6, // iPad Air
            lg: 12, // iPad Pro / Laptop
            xl: 18, // Large desktop
          }}
        >
          {/* ============================
              1️⃣ COMPANY INFO
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: 0.8, sm: 1, md: 1.2 }, // CONTROL LOGO + TEXT SPACING
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              <Box component="img" src={logo} sx={{ width: 45 }} />

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: "#155DFC",
                  fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                }}
              >
                Nirmal Health Care
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#555",
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                lineHeight: 1.7,
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              Providing excellence in <br></br>healthcare with compassion{" "}
              <br></br>and expertise. Your health <br></br>and well-being are
              our<br></br> top priorities.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 1.2, md: 1.5 } }}>
              {[facebookIcon, instagramIcon, linkedInIcon].map((icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    width: { xs: 36, sm: 40, md: 45 },
                    height: { xs: 36, sm: 40, md: 45 },
                  }}
                >
                  <Box component="img" src={icon} sx={{ width: "18px" }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* ============================
              2️⃣ QUICK LINKS
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
              }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.3, sm: 2, md: 2.5 },
              }}
            >
              {["Home", "About Us", "Book Appointment", "Contact Us"].map(
                (item) => (
                  <MuiLink
                    key={item}
                    component={Link}
                    to="/"
                    underline="none"
                    sx={{
                      color: "#555",
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    {item}
                  </MuiLink>
                )
              )}
            </Box>
          </Grid>

          {/* ============================
              3️⃣ TREATMENTS
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
              }}
            >
              Our Treatments
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.3, sm: 2, md: 2.5 },
              }}
            >
              {[
                "Spine Treatments",
                "GIT Treatments",
                "Cosmetology",
                "Kidney Treatment",
                "Gynecologist Treatment",
                "Migraine Treatment",
                "ENT Treatments",
                "Joint Treatments",
                "Child Treatments",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#555",
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* ============================
              4️⃣ CONTACT US
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
              }}
            >
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              {/* Location */}
              {/* Location */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Box
                  component="img"
                  src={locationIcon}
                  sx={{ width: "20px" }}
                />

                <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
                  {isIPad ? (
                    <>
                      123 Medical Center Drive,
                      <br />
                      Health City, HC 12345
                    </>
                  ) : (
                    "123 Medical Center Drive, Health City, HC 12345"
                  )}
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="img" src={phoneIcon} sx={{ width: "20px" }} />
                <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
                  +123 456 7890
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="img" src={emailIcon} sx={{ width: "20px" }} />
                <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
                  info@healingtouch.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider
          sx={{ mt: { xs: 3, sm: 4, md: 5 }, mb: { xs: 2, sm: 3, md: 4 } }}
        />

        {/* BOTTOM BAR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
            © 2025 zonixtec. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 } }}>
            {["Privacy Policy", "Terms & Conditions", "Shipping Policy"].map(
              (text) => (
                <MuiLink
                  key={text}
                  underline="none"
                  sx={{
                    color: "#555",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {text}
                </MuiLink>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
