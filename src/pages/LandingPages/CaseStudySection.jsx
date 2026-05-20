import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import './styles/CaseStudySection.css';
import caseStudyImg from './../../assets/images/caseStudies/backImg.avif';
import authorImg from './../../assets/images/caseStudies/people.avif';
import GrainCanvas from '../../components/GrainCanvas';
const csMetaData = [
    { key: "Date:", val: "Mar 2025" },
    { key: "Industry:", val: "Retail & E-Commerce" },
    { key: "Challenge:", val: "Manual Order Management & Customer Support Delays" },
];

const csStatsData = [
    { label: "Hours Saved Monthly", num: "50+" },
    { label: "Increase In Retention", num: "+15%" },
];

export default function CaseStudySection() {
    const quoteTextRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        function applyRevealEffect(element) {
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const windowH = window.innerHeight;

            const progress = Math.min(
                Math.max((windowH - rect.top) / (windowH + rect.height), 0),
                1
            );

            element.style.setProperty(
                "--reveal-progress",
                `${progress * 100}%`
            );
        }

        function updateEffects() {
            applyRevealEffect(quoteTextRef.current);
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateEffects();
                });

                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });

        updateEffects();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <section className="csSec__root" data-navbar-theme="dark">
            <div className="csSec__grain-wrapper">
                <GrainCanvas opacity={.04} speed={.9} />
            </div>
            <div className='csSec__root__container'>
                {/* ── Left ── */}
                <div className="csSec__left">
                    {/* left upper side */}
                    <div className='csSec__left__upper'>
                        {/* Top */}
                        <div className='csSec__left__upper__sub'>
                            <div className="csSec__top">
                                <div className="csSec__top-header">
                                    <div className='csSec__top-header-01'>
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
                                                    }}>06</span>
                                            </div>


                                            <span className="about__tag-label"
                                                style={{
                                                    color: '#17171799'
                                                }}>results</span>
                                        </div>
                                        <div className="csSec__badge">
                                            <CustomLogo color="black" size="xs" href="/" />
                                        </div>
                                    </div>

                                    <div className='csSec__top-header-02'>
                                        <h2 className="csSec__heading">Case Study</h2>

                                    </div>

                                </div>


                                <p className="csSec__desc">
                                    LocalRent Co. partnered with Effica to streamline order
                                    intake and customer support across 18 locations.
                                </p>
                            </div>

                            {/* Meta rows */}
                            <div className="csSec__meta">
                                {csMetaData.map((row) => (
                                    <div key={row.key} className="csSec__meta-row">
                                        <span className="csSec__meta-key">{row.key}</span>
                                        <span className="csSec__meta-val">{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* CTA */}
                        <div className="csSec__cta-row">

                            <button className="csSec__cta">
                                <span className="csSec__cta-label">Read The Full Story</span>
                                <ChevronRight className="csSec__cta-arrow" />
                            </button>
                        </div>
                    </div>


                    {/* Stats down side*/}
                    <div className="csSec__stats">
                        {csStatsData.map((s) => (
                            <div key={s.num} className="csSec__stat">
                                <div className='csSec__stat__upper'>
                                    <span className="csSec__stat-label">
                                        {s.label.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                                <div className='csSec__stat__bottom'>
                                    <p className="csSec__stat-num">{s.num}</p>
                                    <div className="csSec__stat-corner" aria-hidden="true">
                                        <span /><span />
                                        <span /><span />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                {/* ── Right — quote over image ── */}
                <div className="csSec__right">
                    <img
                        src={caseStudyImg}
                        alt="Case study background"
                        className="csSec__right-img"
                    />
                    <div className="csSec__right-overlay" aria-hidden="true" />

                    <div className="csSec__quote-wrap">
                        <div className='csSec__quote-wrap__sub'>
                            <div className="csSec__quote-icon">
                                <svg
                                    viewBox="0 0 120 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 92V54C8 26 26 8 54 8V30C40 30 30 40 30 54H54V92H8ZM66 92V54C66 26 84 8 112 8V30C98 30 88 40 88 54H112V92H66Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="csSec__quote-text" ref={quoteTextRef}>
                                They didn't overwhelm us with jargon or endless
                                options. Just a clear plan,{" "}
                                <span>
                                    executed quickly. We saw measurable results
                                    in the first month.
                                </span>
                            </p>
                        </div>

                        <div className="csSec__quote-bottom">



                            <div className="csSec__quote-author">
                                <div className="csSec__quote-avatar">
                                    <img src={authorImg} alt="Andrew W." />
                                </div>
                                <div className="csSec__quote-author-info">
                                    <span className="csSec__quote-name">Andrew W.</span>
                                    <span className="csSec__quote-role">
                                        CEO of LocalRent Co.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}