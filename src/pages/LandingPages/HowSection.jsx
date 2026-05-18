import React from 'react';
import { ChevronRight } from 'lucide-react';
import './styles/HowSection.css';
import GrainCanvas from '../../components/GrainCanvas';

const howStepsData = [
    {
        num: "01/",
        desc: "Understand your workflow — no jargon, just",
        strong: "clear analysis",
    },
    {
        num: "02/",
        desc: "Spot automation opportunities —",
        strong: "specific, relevant use cases",
    },
    {
        num: "03/",
        desc: "We handle integration and ensure",
        strong: "smooth operation.",
    },
    {
        num: "04/",
        desc: "Implement & optimize — we handle",
        strong: "setup & integration",
    },
];
const howDelayData = [
    {
        num: "01/",
        label: "Operational Tasks",
        strong: "Stay Manual",
        pill: "+83%",
        pillPos: "83%",      /* left position as % of row width */
        tag: "/Workload",
    },
    {
        num: "02/",
        label: "Competitors",
        strong: "Move Faster",
        pill: "+55%",
        pillPos: "55%",
        tag: "/Growth",
    },
    {
        num: "03/",
        label: "Missed",
        strong: "Automation Opportunities",
        pill: "+66%",
        pillPos: "66%",
        tag: "/Opportunities",
    },
    {
        num: "04/",
        label: "Time Wasted On",
        strong: "Repetitive Work",
        pill: "+32%",
        pillPos: "32%",
        tag: "/Time",
    },
];
// pie chart as inline SVG — no image needed
function PieChart() {
    return (
        <svg
            className="howSec__pie"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="45" cy="45" r="44" fill="#e0e0e0" />
            {/* 65% filled slice */}
            <path
                d="M45 45 L45 1 A44 44 0 1 1 7.2 67.5 Z"
                fill="#171717"
            />
        </svg>
    );
}

export default function HowSection() {
    return (
        <section className="howSec__root" data-navbar-theme="dark">
            {/* grain covers entire section */}
            <div className="aboutSection__grain-wrapper">
                <GrainCanvas opacity={0.04} speed={0.9} />
            </div>
            <div className='howSec__root__01'>
                {/* ── Left ── */}
                <div className="howSec__left">
                    <div className="howSec__left-top">
                        <div className='howSec__left-top_sub'>
                            <div className="about__tag">
                                <div className="about__tag__info"
                                    style={{
                                        alignItems: 'center'
                                    }}>
                                    <span className="about__tag-dot"
                                        style={{
                                            background: '#171717'
                                        }}
                                    />
                                    <span className="about__tag-num"
                                        style={{
                                            color: '#171717'
                                        }}>05</span>
                                </div>


                                <span className="about__tag-label"
                                    style={{
                                        color: '#17171799'
                                    }}>how we do it</span>
                            </div>

                            <h2 className="howSec__heading">
                                The Fast
                                Track To <span>AI </span>
                                <span>Success</span>
                            </h2>
                        </div>


                        <p className="howSec__subtext">
                            No generic advice. No complex dashboards.<br />
                            Just practical improvements.
                        </p>
                    </div>
                    <div className='howSec__left-bottom'>
                        {howStepsData.map((step) => (
                            <div key={step.num} className="howSec__step">
                                {/* corner dot grid */}

                                <div className='howSec__step__top'>
                                    <p className="howSec__step-num">{step.num}</p>
                                    <div className="howSec__step-corner" aria-hidden="true">
                                        <span /><span />
                                        <span /><span />

                                    </div>
                                </div>

                                <p className="howSec__step-desc">
                                    {step.desc} <strong>{step.strong}</strong>
                                </p>
                            </div>
                        ))}
                    </div>


                </div>

                {/* ── Right ── */}
                <div className="howSec__right">
                    <button className="howSec__cta">
                        <span className="howSec__cta-label">Start AI Journey</span>
                        <ChevronRight className="howSec__cta-arrow" />
                    </button>



                    {/* ── Bottom stat card ── */}
                    <div className="howSec__stat-card">
                        <PieChart />
                        <p className="howSec__stat-text">
                            On average, our clients reduce manual
                            work <strong>by 35% in the first month.</strong>
                        </p>
                    </div>

                </div>
            </div>
            {/* ── Delay Sub-Section ── */}
            <div className="howDelay__wrap">

                {/* Heading */}
                <div className="howDelay__top">
                    <div className="howDelay__top-left">
                        <div className="about__tag">
                            <div className="about__tag__info"
                                style={{
                                    alignItems: 'center'
                                }}>
                                <span className="about__tag-dot"
                                    style={{
                                        background: '#171717',
                                        opacity: '.6'
                                    }}
                                />
                                <span className="about__tag-num"
                                    style={{
                                        color: '#17171799',
                                        textTransform: 'uppercase'
                                    }}>why delay hurts</span>
                            </div>


                        </div>

                        <h3 className="howDelay__heading">
                            The longer you wait, the more expensive it becomes{" "}
                            <span>to catch up.</span>
                        </h3>
                    </div>
                </div>

                {/* Rows */}
                <div className="howDelay__list">
                    {howDelayData.map((item) => (
                        <div key={item.num} className="howDelay__row">
                            <div className='howDelay__row__full'
                                style={{
                                    width: window.innerWidth <= 912
                                        ? `calc(${item.pillPos} + 0px)`
                                        : `calc(${item.pillPos} + 75px)`
                                }} >
                                {window.innerWidth <= 912 ?
                                    <div className="howDelay__row-left">
                                        <span className="howDelay__row-num">{item.num}</span>
                                        <div className="howDelay__row-label-2">
                                            <span>{item.label}</span>
                                            <strong>{item.strong}</strong>
                                        </div>
                                    </div> : <div className="howDelay__row-left">
                                        <span className="howDelay__row-num">{item.num}</span>
                                        <span className="howDelay__row-label">
                                            {item.label} <strong>{item.strong}</strong>
                                        </span>
                                    </div>}

                                {/* pill floats at custom left % */}
                                <div
                                    className="howDelay__pill"
                                    style={{ left: item.pillPos }}
                                >
                                    <span>{item.pill}</span>
                                </div>
                            </div>

                            <span className="howDelay__row-tag">{item.tag}</span>
                        </div>
                    ))}
                </div>

            </div>


        </section>
    );
}