import React from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';
import './styles/MoreProjectsSection.css';
import projectImg from './../../assets/images/projects/pro_1.avif';
const moreProjData = [
    {
        title: "BrightPath International Logistics",
        year: "2025",
    },
    {
        title: "Norse Star",
        year: "2025",
    },
    {
        title: "EduCore Learning",
        year: "2025",
    },
    {
        title: "CraftWorks Manufacturing",
        year: "2025",
    },
    {
        title: "HealthFirst Clinics",
        year: "2024",
    },
];

export default function MoreProjectsSection() {
    return (
        <section className="moreProj__root" data-navbar-theme="dark">



            {/* ── Col 1 — vertical label ── */}
            <div className="moreProj__col-label">
                <span className="moreProj__label">
                    <span className="moreProj__label-dot" />
                    More Projects
                </span>
            </div>
            <div>
                {/* ── Col 2 — list ── */}
                <div className="moreProj__col-list">

                    {/* Featured */}
                    <div className="moreProj__featured">
                        <h3 className="moreProj__featured-title">
                            FinEdge Advisors
                            <sup className="moreProj__featured-year">2025</sup>
                        </h3>
                        <p className="moreProj__featured-desc">
                            Norse Star Collective came to us before peak season with a simple
                            request: remove the busywork that slows support and frustrates
                            customers. Weekly reporting also ate half a day and rarely arrived
                            in time to guide decisions.
                        </p>
                    </div>

                    {/* List */}
                    <ul className="moreProj__list">
                        {moreProjData.map((proj) => (
                            <li key={proj.title} className="moreProj__item">
                                <p className="moreProj__item-title">
                                    {proj.title}
                                    <sup className="moreProj__item-year">{proj.year}</sup>
                                </p>
                                <ChevronRight className="moreProj__item-arrow" />
                            </li>
                        ))}
                    </ul>

                </div>

                {/* ── Col 3 — image ── */}
                <div className="moreProj__col-img">
                    <img
                        src={projectImg}
                        alt="Featured project"
                        className="moreProj__img"
                    />

                    {/* floating pill badge */}
                    <div className="moreProj__img-badge">
                        <div className="moreProj__img-badge-icon">
                            <RotateCcw />
                        </div>
                        <span className="moreProj__img-badge-label">Spherule</span>
                    </div>
                </div>
            </div>


        </section>
    );
}