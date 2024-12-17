  "use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import SliderCard from "./SliderCard";
import Headers from "../Headers";
import { relative } from "path";
function Home() {
  var SliderDetails = [
    {
      image:
        "https://png.pngtree.com/background/20230617/original/pngtree-white-futuristic-robot-encased-in-round-machine-with-neon-lights-on-picture-image_3701083.jpg",
      tabContent: {
        text1: " Revolutionize Your Business",
        text2: " with AI-Driven Automation",
        text3: "Streamline operations, boost efficiency, and unlock growth",
        text4: "with cutting-edge AI solutions tailored to your needs.",
        buttonType: "Get Started",
      },
    },
    {
      image:
        "https://cdn.prod.website-files.com/624ac40503a527cf47af4192/65a8e037a9cf99aabbe9e385_ai-gif-generator-7.gif",
      tabContent: {
        text1: " Empower Your Projects with Expert",
        text2: "Resources at Your Fingertips!",
        text3: "Access skilled professionals on demand to enhance your",
        text4:" team's capabilities and drive projects forward with confidence.",
        buttonType: "Get Started",
      },
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4188pvkBUHbO3iGoxnw7ckuiUG7nZ6iDP1w&s",
      tabContent: {
        text1: " Drive Transformation with Strategic",
        text2: "Business Consulting",
        text3: "Unlock insights, optimize operations, and achieve sustainable",
        text4: "growth with expert guidance tailored to your goals.",
        buttonType: "Get Started",
      },
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNSsS4NvtCx7UCOKH3SqcsHhG9-TX1G0DeQ&s",
      tabContent: {
        text1: "Innovative Software Solutions",
        text2: "for Your Business",
        text3: "  Empower your vision with custom software designed to",
        text4: "streamline processes, enhance efficiency, and drive results.",
        buttonType: "Learn more..",
      },
    },
  ];

  return (
    <Box>
      <Carousel autoPlay={true} interval={2000} indicators={true} >
        {SliderDetails.map((item, i) => (
          <Box key={i}>
            <SliderCard item={item} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
export default Home;  
