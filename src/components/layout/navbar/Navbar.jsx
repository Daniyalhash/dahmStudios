import React, { useState, useEffect, useRef } from "react";
import "./styles/Navbar.css";
// import Logo from '../../../assets/images/logo/logoBlack/miniLogo.png'
import CustomLogo from "../../CustomLogo/CustomLogo";
import { Plus } from "lucide-react";
import SlotText from "../../SlotText/SlotText";

// image
import people from '../../../assets/images/people/1.avif'
import GrainCanvas from "../../GrainCanvas";
import FitText from "../../FitText";
const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
];
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [isMobileLogo, setIsMobileLogo] = useState(window.innerWidth < 800)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileLogo(window.innerWidth < 800)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    // Close on outside click
    useEffect(() => {
        function handleDown(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) document.addEventListener("mousedown", handleDown);
        return () => document.removeEventListener("mousedown", handleDown);
    }, [menuOpen]);

    // Close on Escape
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") setMenuOpen(false);
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <nav className={`navbar__root${menuOpen ? " menu-is-open" : ""}`} aria-label="Main navigation">


            {
                menuOpen && window.innerWidth <= 768
                    ? (
                        <CustomLogo
                            color="white"
                            size={isMobileLogo ? "xs" : "sm"}
                            href="/"
                        />
                    )
                    : (
                        <CustomLogo
                            color="dark"
                            size={isMobileLogo ? "xs" : "sm"}
                            href="/"
                        />
                    )
            }



            {/* ── Menu toggle + dropdown card ─────────────────── */}
            <div className="navbar__menu-wrapper" ref={wrapperRef}>
                <button className={`navbar__menu-toggle${menuOpen ? " is-open" : ""}`}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-menu-card"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}>
                    <span className="navbar__menu-toggle-icon">
                        {menuOpen ? <Plus strokeWidth={3} size={15} /> : <Plus strokeWidth={3} size={15} />}
                    </span>
                    <SlotText text="Menu" />
                </button>
                {/* Dropdown card */}
                <div
                    id="navbar-menu-card"
                    className={`navbar__menu-card${menuOpen ? " is-open" : ""}`}
                    role="dialog"
                    aria-modal="false"
                >
                    <GrainCanvas opacity={0.07} speed={1} />  {/* ← add this */}

                    <CustomLogo size="xs" href="#" color="white" />




                    {/* Links */}
                    <ul className="navbar__links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href || "#"}

                                    className="navbar__link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    
                                    <SlotText text={link.label} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Contact */}
                    <div className="navbar__card-contact">
                        <FitText text="dahmstudio@gmail.com" />
                        <span className="navbar__card-phone">(312) 555-2466</span>

                    </div>
                    <div className="navbar__card-socials">
                        {["LI", "IG", "BE", "X"].map((s) => (
                            <a key={s} href="https://www.facebook.com/hamzakhalil1204" className="navbar__card-social">
                                {s}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Right CTA ──────────────────────────────────── */}
            <div className="navbar__right">
                <div className="navbar__right__sub">
                    <p className="navbar__cta-label">
                        A 30-minute call to clarify your<br />
                        next steps. <strong>ZERO OBLIGATIONS.</strong>
                    </p>


                </div>
                <div className="navbar__right__sub">
                    <img
                        className="navbar__avatar__poeple"
                        alt="people"
                        src={people}
                    />
                    <button
                        className="navbar__plus-btn"
                        aria-label="Book a call"
                        title="Book a call"
                    >
                        <Plus size={40} strokeWidth={1} />
                    </button>
                </div>


            </div>

        </nav>
    );
}