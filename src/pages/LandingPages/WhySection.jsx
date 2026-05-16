import React from 'react';
import './styles/WhySection.css'
import CustomLogo from '../../components/CustomLogo/CustomLogo';
import { Calendar } from 'lucide-react';
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

export default function WhySection() {
    return (
        <section className="whySec__root" data-navbar-theme="dark">
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
        </section>
    );
}