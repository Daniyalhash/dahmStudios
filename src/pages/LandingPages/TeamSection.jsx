import React from 'react';
import './styles/TeamSection.css';
import './styles/TeamCard.css';   // ← add this import

import img1 from '../../assets/images/team/1.avif';
import img2 from '../../assets/images/team/2.avif';
import img3 from '../../assets/images/team/3.avif';
import img4 from '../../assets/images/team/4.avif';
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import GrainCanvas from '../../components/GrainCanvas';

// const barcodeWidths = [
//     [3, 2, 4, 1, 3, 2, 5, 1, 2, 4, 1, 3, 2],
//     [2, 4, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 3],
//     [4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3],
// ];

// function Barcode({ variant = 0 }) {
//     const widths = barcodeWidths[variant % barcodeWidths.length];
//     return (
//         <div className="teamCard__skill-bar">
//             {widths.map((w, i) => (
//                 <span key={i} style={{ width: `${w}px`, opacity: 0.12 + (i % 3) * 0.06 }} />
//             ))}
//         </div>
//     );
// }

const teamData = [
    {
        role: "Lead Designer",
        photo: img1,
        name: "Alex Carter",
        sub: "UI/UX & Visual Design",
        skills: ["Brand Identity", "Web Design", "Typography"],
    },
    {
        role: "Full-Stack Developer",
        photo: img2,
        name: "Sara Malik",
        sub: "Frontend & Backend",
        skills: ["React", "Node.js", "Database Architecture"],
    },
    {
        role: "Brand Strategist",
        photo: img3,
        name: "Kevin D.",
        sub: "Social & Content",
        skills: ["Instagram Strategy", "Content Design", "Copywriting"],
    },
    {
        role: "Client Relations",
        photo: img4,
        name: "Laura Stern",
        sub: "Your Favorite Contact",
        skills: ["Project Management", "Client Support", "Onboarding"],
    },
];

// Reusable card component
function TeamCard({ member, index }) {
    return (
        <div className="teamCard">
            <div className="csSec__grain-wrapper">
                <GrainCanvas opacity={.04} speed={.9} />
            </div>
            {/* Role row */}
            <div className="teamCard__role-row">
                <span className="teamCard__role">{member.role}</span>
                <div className="teamCard__dots">
                    {Array.from({ length: index + 1 }).map((_, i) => (
                        <span key={i} className="teamCard__dot" />
                    ))}
                </div>
            </div>

            {/* Photo */}
            <div className="teamCard__photo-wrap">
                <img
                    src={member.photo}
                    alt={member.name}
                    className="teamCard__photo"
                />
            </div>

            {/* Info */}
            <div className="teamCard__info">
                <div className="teamCard__logo-row">
                    <CustomLogo color="dark" size="xs" href="/" />
                </div>
                <div className="teamCard__name-row">
                    <div>
                        <p className="teamCard__name">{member.name}</p>
                        <span className="teamCard__sub">{member.sub}</span>
                    </div>
                    <div className="teamCard__corner" aria-hidden="true">
                        <span /><span /><span /><span /><span /><span />
                    </div>
                </div>

                {/* Skills */}
                {/* <div className="teamCard__skills">
                    {member.skills.map((skill, si) => (
                        <div key={skill} className="teamCard__skill-item">
                            <Barcode variant={si} />
                            <span className="teamCard__skill-label">{skill}</span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <section className="teamSec__root" data-navbar-theme="dark">
            <div className="teamSec__root__container">

                {/* Header — untouched from your original */}
                <div className="teamSec__header">
                    <div className="teamSec__filler"></div>
                    <div className="teamSec__header-cell teamSec__header-cell--main">
                        <div className="about__tag">
                            <div className="about__tag__info">
                                <span className="about__tag-dot" style={{ background: '#171717' }} />
                                <span className="about__tag-num" style={{ color: '#171717' }}>07</span>
                            </div>
                            <span className="about__tag-label" style={{ color: '#17171799' }}>who are we</span>
                        </div>
                        <h2 className="teamSec__heading">The Team</h2>
                    </div>
                </div>

                {/* Card grid — replaces the old row layout */}
                <div className="teamCard__grid">
                    {teamData.map((member, index) => (
                        <TeamCard key={member.name} member={member} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}