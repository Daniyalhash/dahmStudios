import React from "react";
import "./styles/LandingPage.css";
import CustomLandingPage from "./CustomLandingPage";
import Showcase01 from "./Showcase01";

export default function LandingPage() {
    return (
        <div>
            <CustomLandingPage />
            <Showcase01 />
        </div>
    );
}