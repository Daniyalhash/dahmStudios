import React from "react";
import "./styles/LandingPage.css";
import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import WhySection from "./WhySection";
import HowSection from "./HowSection";
import CaseStudySection from "./CaseStudySection";
// import MoreProjectsSection from "./MoreProjectsSection";
import TeamSection from "./TeamSection";
import MoreProjects from "./MoreProjectsSection";
// import Showcase01 from "./Showcase01";

export default function LandingPage() {
    return (
        <div>
            <LandingSection />
            <AboutSection />
            <WhySection />
            <HowSection />
            <CaseStudySection />
            <MoreProjects />
            <TeamSection />
        </div>
    );
}