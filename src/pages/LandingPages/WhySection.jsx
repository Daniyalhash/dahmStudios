import React from 'react';
import './styles/WhySection.css'
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import { Calendar } from 'lucide-react';
import phoneImg from '../../assets/images/prototype/phone.avif'
import elipse from '../../assets/images/prototype/elipse.avif'

import GrainCanvas from '../../components/GrainCanvas';
const advantagesData = [
    {
        num: "01",
        label: "Clear, Actionable",
        strong: "Strategy",
    },
    {
        num: "02",
        label: "Proven",
        strong: "AI Frameworks",
    },
    {
        num: "03",
        label: "Hands-On",
        strong: "Implementation",
    },
    {
        num: "04",
        label: null,
        strong: "Transparent Costs",
    },
];
const phoneStatsData = [
    {
        num: "3",
        unit: "x",
        label: ["Faster", "Approvals"],
    },
    {
        num: "99",
        unit: "%",
        label: ["Uptime"],
    },
    {
        num: "+28",
        unit: "%",
        label: ["Faster", "Responses"],
    },
];
export default function WhySection() {
    return (
        <section className="whySec__root" data-navbar-theme="dark">
            {/* grain covers entire section */}
            <div className="aboutSection__grain-wrapper">
                <GrainCanvas opacity={0.04} speed={0.9} />
            </div>
            <div className="whySec__inner">

                {/* ── Left ── */}
                <div className="whySec__left">
                    <div className="whySec__left-top">
                        <div className="about__tag">
                            <div className="about__tag__info">
                                <span className="about__tag-dot"
                                    style={{
                                        background: '#171717'
                                    }}
                                />
                                <span className="about__tag-num"
                                    style={{
                                        color: '#171717'
                                    }}
                                >03</span>
                            </div>

                            <span className="about__tag-label"
                                style={{
                                    color: '#17171799'
                                }}
                            >why us?</span>
                        </div>

                        <h2 className="whySec__heading">
                            <span>Why businesses </span>
                            Choose
                            dahm
                        </h2>
                    </div>

                    <p className="whySec__subtext">
                        We make AI adoption simple,<br />
                        strategic, and measurable.
                    </p>
                </div>

                {/* ── Right ── */}
                <div className="whySec__right">
                    <div className="whySec__right-top">

                        <div className='whySec__right-top__sub'>
                            <div className="why__badge">
                                <CustomLogo color="black" size='sm' href="/" />
                            </div>
                            <p className="whySec__advantages-title">
                                Our Advantages <strong>Include:</strong>
                            </p>
                        </div>
                        <div className="whySec__right-top__sub__02">
                            <ul className="whySec__list">
                                {advantagesData.map((item) => (
                                    <li key={item.num} className="whySec__list-item">
                                        <div className="whySec__item-num">
                                            <span>{item.num}</span>
                                        </div>
                                        <p className="whySec__item-label">
                                            {item.label && `${item.label} `}
                                            <strong>{item.strong}</strong>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer */}
                        <div className="whySec__footer">
                            <div className="whySec__footer-source">
                                <span className="whySec__footer-label">Source:</span>
                                <span className="whySec__footer-value">Client Feedback &amp; Project Data</span>
                            </div>
                            <div className="whySec__footer-date">
                                {/* calendar icon */}
                                <Calendar className='why__footer__calender' />
                                Apr 2025
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            {/* ── Phone Sub-Section ── */}
            <div className="whyPhone__wrap">

                {/* Left */}
                <div className="whyPhone__left">

                    <div className="whyPhone__stats">
                        {phoneStatsData.map((item) => (
                            <div key={item.num} className="whyPhone__stat">
                                <div className='whyPhone__stat__num__details'>
                                    <p className="whyPhone__stat-num">{item.num}</p>
                                    <span className="whyPhone__stat-unit">{item.unit}</span>
                                </div>

                                <div className="whyPhone__stat-meta">

                                    <span className="whyPhone__stat-label">
                                        {item.label.map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < item.label.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="whyPhone__right">
                    {/* Content */}
                    <div className="whyPhone__content">
                        <div className='whyPhone__content__part1'>
                            <div className="about__tag">
                                <div className="about__tag__info">
                                    <span className="about__tag-dot"
                                        style={{
                                            background: '#17171799'
                                        }}
                                    />
                                    <span className="about__tag-num"
                                        style={{
                                            color: '#17171799',
                                            textTransform: 'uppercase'
                                        }}
                                    >real time ai control</span>
                                </div>


                            </div>

                            <h3 className="whyPhone__heading">
                                Your AI, Always In Your Pocket
                            </h3>
                        </div>


                        <p className="whyPhone__desc">
                            Run your business smarter — track performance, approve
                            automations, and get instant insights right from your phone.
                        </p>
                    </div>

                    <div className='whyPhone__content__part02'>
                        <div style={{
                            opacity: '.4'
                        }}>
                            <CustomLogo color="black" size="xs" href="/" />

                        </div>
                        <img
                            src={phoneImg}
                            alt="Hand holding phone with AI dashboard"
                            className="whyPhone__img"
                        />
                        <img
                            src={elipse}
                            alt="Hand holding phone with AI dashboard"
                            className="whyPhone__img__02"
                        />
                    </div>

                </div>

               

            </div>
        </section>
    );
}