import React from 'react'
import './styles/LandingPage.css'
// image
import people from '../../assets/images/people/people.jpg';
import p1 from '../../assets/images/people/2.avif';
import p2 from '../../assets/images/people/3.avif';
import p3 from '../../assets/images/people/4.avif';
import p4 from '../../assets/images/people/5.avif';
import GrainCanvas from '../../components/GrainCanvas';
import FitText2 from '../../components/FitText2';



const AVATAR_IMG = [p1, p2, p3, p4];
const LOGOS = [
    { name: "Vercel", mono: "VC", svg: (<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2L2 19.5h20L12 2z" /></svg>) },
    { name: "Linear", mono: "LN", svg: (<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3.5 3.5L12 12m0 0l8.5 8.5M12 12L3.5 20.5M12 12l8.5-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>) },
    { name: "Figma", mono: "FG", svg: (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" /><path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" /><path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" /><path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" /><path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" /></svg>) },
    { name: "Framer", mono: "FR", svg: (<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M4 0h16v8h-8L4 0zM4 8h8l8 8H4V8zM4 16h8v8L4 16z" /></svg>) },
    { name: "Notion", mono: "NO", svg: (<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.187z" /></svg>) },
    { name: "Pulse Co", mono: "PC", svg: (<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><circle cx="12" cy="12" r="10" /><path d="M8 12h2l2-4 2 8 2-4h2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
];
export default function CustomLandingPage() {
    return (
        <div className="lp__root">
            <section className="lp__hero">

                {/* ── Left: image panel ── */}
                <div className="lp__image-panel">
                    <img
                        className="lp__bg-img"
                        src={people}
                        alt=""
                        aria-hidden="true"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="lp__glitch" aria-hidden="true" />
                    <div className="lp__noise" aria-hidden="true" />
                    <div className="lp__vertical-label" aria-hidden="true">
                        <span className="lp__vertical-text">Digital · Creative · Agency</span>
                        <span className="lp__vertical-line" />
                    </div>
                </div>

                {/* ── Right: content panel ── */}
                <div className="lp__right">

                    {/* grain only over right bg area */}
                    <div className="lp__grain-wrapper">
                        <GrainCanvas opacity={0.05} speed={1} />
                    </div>
                    <div className='lp__right__cont__01'>
                        <div className="lp__reviews">
                            <div className="lp__avatars">
                                {AVATAR_IMG.map((c, i) => (
                                    <img
                                        className="lp__avatar"
                                        key={i}
                                        src={c}
                                        alt="people"
                                    />
                                ))}
                            </div>

                            <div className="lp__review-meta">
                                <div className="lp__stars">
                                    <div className="lp__dots">
                                        <div className="lp__dot"></div>
                                        <div className="lp__dot"></div>
                                        <div className="lp__dot"></div>
                                        <div className="lp__dot"></div>
                                    </div>
                                    <span className="lp__rating">4.9/5</span>
                                </div>

                                <span className="lp__review-count">
                                    BASED ON <strong>230 VERIFIED REVIEWS</strong>
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="lp__title-block">
                            <FitText2
                                text="A clear design plan"
                                textClassName="lp__title"
                                as="h1"
                            />
                        </div>

                        {/* Body */}
                        <div className='lp__title-block-sub'>
                            <p className="lp__title-sub">For Your business</p>
                            <p className="lp__body">
                                We craft digital experiences that cut through the noise
                                strategy, design & code, <strong>without compromise.</strong></p>
                        </div>
                    </div>


                    <div className='lp__ctas__ticker'>
                        {/* CTAs */}
                        <div className="lp__ctas">
                            <button className="lp__cta-primary">Start a Project</button>
                            <button className="lp__cta-secondary">See Our Work</button>
                        </div>

                        {/* ── Logos ticker ── */}

                        <div className="lp__ticker" aria-label="Our clients">
                            <div className="lp__ticker-track">
                                {[...LOGOS, ...LOGOS].map((logo, i) => (
                                    <span key={i} className="lp__ticker-item">
                                        <span className="lp__ticker-icon">
                                            {logo.svg}
                                        </span>
                                        {logo.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── Mega headline: dark layer (right side) ── */}
                {/* <div className="lp__headline-wrap" aria-hidden="true">
                    <div className="lp__headline">A BOLD DIGITAL</div>
                    <div className="lp__headline lp__headline--line2">VISION</div>
                </div>

                <div className="lp__headline-clip" aria-hidden="true">
                    <div className="lp__headline lp__headline--white">A BOLD DIGITAL</div>
                    <div className="lp__headline lp__headline--white lp__headline--line2">VISION</div>
                </div> */}


            </section>

        </div>
    )
}