import React, { useState } from 'react';
import './styles/MoreProjectsSection.css';
import {   ArrowUpRight, ChevronUp } from 'lucide-react';
import GrainCanvas from '../../components/GrainCanvas'
const projects = [
    {
        id: 1,
        name: 'TechLaunch SaaS',
        year: '2025',
        desc: 'Needed a clean dashboard UI and landing page built fast before their investor demo. We delivered a full-stack app interface and marketing site in 18 days.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
    {
        id: 2,
        name: 'GreenRoot Organics',
        year: '2025',
        desc: 'Full rebrand — logo, website, and Instagram templates for a health food startup entering a crowded market. Clean, bold, instantly recognizable.',
        image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
    {
        id: 3,
        name: 'PeakFit Studio',
        year: '2025',
        desc: 'Gym & fitness brand — booking-integrated website, social media kit, and monthly content templates designed to convert and retain members.',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
    {
        id: 4,
        name: 'LegalEdge Advisors',
        year: '2025',
        desc: 'Professional law firm site with case intake forms, SEO setup, and LinkedIn branding package — authoritative and conversion-focused.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
    {
        id: 5,
        name: 'NestHome Real Estate',
        year: '2025',
        desc: 'Property listing website with search functionality, lead capture forms, and full brand identity. Went live in three weeks.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
    {
        id: 6,
        name: 'CloudDesk HR',
        year: '2024',
        desc: 'Custom HR dashboard built in React — internal tool with role-based access, reporting modules, and a clean, no-friction UI employees actually enjoy using.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
        href: '#',
    },
];

export default function MoreProjectsSection() {
    const [hoveredId, setHoveredId] = useState(null);
    const [openId, setOpenId] = useState(null);

    const isTouch = () => window.matchMedia('(hover: none)').matches;

    const handleItemClick = (e, project) => {
        if (!isTouch()) return;
        e.preventDefault();
        setOpenId(prev => prev === project.id ? null : project.id);
    };

    const getActiveId = () => isTouch() ? openId : hoveredId;

    return (
        <section className="moreProj__root">
            <div className="csSec__grain-wrapper">
                <GrainCanvas opacity={.04} speed={.9} />
            </div>
            <div className='moreProj__label-col'>
                <div className="about__tag">
                    <div className="about__tag__info" style={{ alignItems: 'center' }}>
                        <span className="about__tag-dot" style={{ background: '#17171799' }} />
                        <span className="about__tag-num" style={{ color: '#17171799', textTransform: 'uppercase' }}>
                            more projects
                        </span>
                    </div>
                </div>
            </div>

            <ul className="moreProj__list">
                {projects.map((project) => {
                    const activeId = getActiveId();
                    const isActive = activeId === project.id;
                    const isDimmed = activeId !== null && !isActive;

                    return (
                        <li key={project.id} className="moreProj__item">

                            <a
                                href={project.href}
                                className={`moreProj__link${isActive ? ' moreProj__link--active' : ''}${isDimmed ? ' moreProj__link--dimmed' : ''}`}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={(e) => handleItemClick(e, project)}
                            >
                                <div className='moreProj__item__header'>
                                    <span className="moreProj__name">{project.name}</span>
                                    <sup className="moreProj__year">{project.year}</sup>
                                    <span className={`moreProj__toggle-arrow${isActive ? ' moreProj__toggle-arrow--open' : ''}`}>
                                        <ChevronUp />
                                    </span>
                                </div>

                                <div className='moreProj__item__body'>
                                    <div className={`moreProj__desc-wrap${isActive ? ' moreProj__desc-wrap--visible' : ''}`}>
                                        <p className={`moreProj__desc${isActive ? ' moreProj__desc--visible' : ''}`}>
                                            {project.desc}
                                        </p>
                                        <a
                                            href={project.href}
                                            className={`moreProj__readmore${isActive ? ' moreProj__readmore--visible' : ''}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Read More <ArrowUpRight className='moreProj__readmmore__icon' />
                                        </a>
                                    </div>

                                    <div className={`moreProj__float${isActive ? ' moreProj__float--visible' : ''}`}>
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="moreProj__float-img"
                                        />
                                    </div>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>

        </section>
    );
}