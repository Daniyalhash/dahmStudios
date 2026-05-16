import React from "react";
import "./styles/LandingPage.css";
import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import WhySection from "./WhySection";
// import Showcase01 from "./Showcase01";

export default function LandingPage() {
    return (
        <div>
            <LandingSection />
            <AboutSection />
            <WhySection />
            {/* <Showcase01 /> */}
        </div>
    );
}