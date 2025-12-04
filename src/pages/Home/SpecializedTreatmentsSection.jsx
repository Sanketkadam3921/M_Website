import { Box, Container, Grid, Typography } from "@mui/material";
import TreatmentCard from "./TreatmentCard";
import spineTreatmentImg from "../../assets/treatments/SpineTreatment.jpg";
import gitTreatmentImg from "../../assets/treatments/GITTreatments.jpg";
import cosmetologyImg from "../../assets/treatments/Cosmetology.jpg";
import kidneyTreatmentImg from "../../assets/treatments/KidneyTreatment.jpg";
import gynecologistTreatmentImg from "../../assets/treatments/Gynecologist Treatment.jpg";
import migraineTreatmentImg from "../../assets/treatments/Migraine Treatment.jpg";
import entTreatmentImg from "../../assets/treatments/ENT Treatment.jpg";
import jointTreatmentImg from "../../assets/treatments/JointTreatment.jpg";
import childTreatmentImg from "../../assets/treatments/ChildTreatment.jpg";

const treatments = [
  {
    title: "Spine Treatments",
    description:
      "Expert care for back pain, disc problems, and spinal disorders with advanced techniques.",
    image: spineTreatmentImg,
  },
  {
    title: "GIT Treatments",
    description:
      "Comprehensive gastrointestinal care for digestive health and wellness.",
    image: gitTreatmentImg,
  },
  {
    title: "Cosmetology",
    description:
      "Specialized treatment for acne, pigmentation, anti-aging, hair loss, and skin rejuvenation.",
    image: cosmetologyImg,
  },
  {
    title: "Kidney Treatment",
    description:
      "Diagnosis and care for kidney stones, infections, urinary incontinence in kidney",
    image: kidneyTreatmentImg,
  },
  {
    title: "Gynecologist Treatment",
    description:
      "Treatment for menstrual disorders, PCOS, pregnancy care, and reproductive concerns.",
    image: gynecologistTreatmentImg,
  },
  {
    title: "Migraine Treatment",
    description:
      "Specialized treatment for chronic migraines, tension headaches, and neural pain.",
    image: migraineTreatmentImg,
  },
  {
    title: "ENT Treatments",
    description:
      "Specialized treatment for ear, nose, throat infections, allergies, and sinus issues.",
    image: entTreatmentImg,
  },
  {
    title: "Joint Treatments",
    description:
      "Pain relief and therapy for knee, shoulder, back, and arthritis-related joint problems.",
    image: jointTreatmentImg,
  },
  {
    title: "Child Treatments",
    description:
      "Recurrent cold and cough Adenoids, Child overall development Asthma Tonsillitis",
    image: childTreatmentImg,
  },
];

export default function SpecializedTreatmentsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6, lg: 8 },
        backgroundColor: "#f9fafb",
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
            Our Specialized Treatments
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
            We offer comprehensive healthcare services tailored to your specific
            needs
          </Typography>
        </Box>

        {/* Treatment Cards Grid */}
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
          {treatments.map((treatment, index) => (
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
              <TreatmentCard
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
