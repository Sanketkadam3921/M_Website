import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Mrunal Kullkarni",
    quote:
      "The care I received was exceptional. My chronic back pain has significantly improved after treatment. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Sanket Kadam",
    quote:
      "The care I received was exceptional. My chronic back pain has significantly improved after treatment. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Rohine Despande",
    quote:
      "Professional staff and excellent treatment. My digestive issues are finally resolved. Thank you!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const isScrollingRef = useRef(true);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isScrollingRef.current) return;

      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;

      if (currentScroll >= maxScroll - 1) {
        // Reset to start when reaching the end (seamless loop)
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollContainer.scrollBy({ left: 0.5, behavior: "auto" });
      }
    };

    // Start auto-scroll
    scrollIntervalRef.current = setInterval(scroll, 30); // Scroll every 30ms for smooth movement

    // Pause on hover
    const handleMouseEnter = () => {
      isScrollingRef.current = false;
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      isScrollingRef.current = true;
      scrollIntervalRef.current = setInterval(scroll, 30);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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
            What Our Patients Say
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Real stories from real patients who experienced exceptional care.
          </Typography>
        </Box>

        {/* Testimonial Cards Auto-Scroll Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: { xs: 4, sm: 5, md: 6, lg: 11 },
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
            pb: 2,
            cursor: "grab",
            "&:active": {
              cursor: "grabbing",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                display: "flex",
              }}
            >
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
