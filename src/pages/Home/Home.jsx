import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import StatisticsSection from "./StatisticsSection";
import SpecializedTreatmentsSection from "./SpecializedTreatmentsSection";
import ExpertDoctorsSection from "./ExpertDoctorsSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "./CallToActionSection";

const Home = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeroSection />
      <StatisticsSection />
      <SpecializedTreatmentsSection />
      <ExpertDoctorsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </Box>
  );
};

export default Home;
