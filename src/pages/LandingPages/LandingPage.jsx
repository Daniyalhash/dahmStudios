import React from "react";
import "./styles/LandingPage.css";
import AboutPage from "../AboutPages/AboutPage";
import CustomLandingPage from "./CustomLandingPage";

export default function LandingPage() {
    return (
        <div>
            <CustomLandingPage />
            <AboutPage />
        </div>
    );
}