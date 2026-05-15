import { useEffect, useRef } from "react";
import './styles/AboutSection.css'
// imgaes
import people from '../../assets/images/people/people.jpg';
import people2 from '../../assets/images/projectImages/6.avif';
import img1 from '../../assets/images/services/2.avif';
import img2 from '../../assets/images/services/3.avif';
import img3 from '../../assets/images/services/4.avif';
import img4 from '../../assets/images/services/5.avif';
import CustomLogo from '../../components/CustomLogo/CustomLogo';


import GrainCanvas from "../../components/GrainCanvas";
import { Play } from "lucide-react";
export default function AboutSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function onScroll() {
            const text = textRef.current;
            if (!text) return;

            const rect = text.getBoundingClientRect();
            const windowH = window.innerHeight;

            // 0 when text top hits bottom of screen
            // 1 when text bottom hits top of screen
            const start = windowH;           // text enters viewport
            const end = -rect.height;        // text has fully passed

            const progress = Math.min(
                Math.max((start - rect.top) / (start - end), 0),
                1
            );

            const fillPercent = Math.round(progress * 100);

            text.style.backgroundImage = `linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff ${fillPercent}%,
            #3a3a3a ${fillPercent}%,
            #3a3a3a 100%
        )`;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <section className="about__root" data-navbar-theme="light" ref={sectionRef}>
            {/* grain covers entire section */}
            <div className="aboutSection__grain-wrapper">
                <GrainCanvas opacity={0.04} speed={0.9} />
            </div>
            {/* first section */}
            <div className="about__sticky">

                {/* Left — video card */}
                <div className="about__left">
                    <div className="about__video-card-01">
                        <div className="about__video-card">
                            <div className="about__video-card__part1">
                                <div className="about__video-card__part1__time">
                                    <span className="about__video-label">How We Work</span>
                                    <div className="about__video-card__part1__time__duration">
                                        <span className="about__tag-dot-grey" />
                                        <span className="about__video-duration">2:38</span>

                                    </div>
                                </div>

                                <h3 className="about__video-title">
                                    How we help you use AI<br />without the hype
                                </h3>
                            </div>

                            <div className="about__video-thumb">
                                <img
                                    alt="people"
                                    src={people2}
                                    className=""
                                />
                                <button className="about__play-btn" aria-label="Play video">
                                    <Play className="about__play-btn__icon" />
                                </button>
                            </div>
                        </div>

                        <p className="about__video-caption">
                            We're a hands-on <strong>team of AI consultants</strong> focused on
                            <strong> helping small and mid-size businesses</strong> use automation
                            where it matters most
                        </p>
                    </div>

                </div>

                {/* Right — scroll-reveal text */}
                <div className="about__right">
                    <div className="about__tag">
                        <div className="about__tag__info">
                            <span className="about__tag-dot" />
                            <span className="about__tag-num">01</span>
                        </div>

                        <span className="about__tag-label">Who We Are</span>
                    </div>
                    <div className="about__tag__sub">
                        <p className="about__big-text" ref={textRef}>
                            We're a hands-on team of AI consultants focused on helping
                            small and mid-size businesses use automation where it matters
                            most. We cut through the noise and implement it with no
                            disruption.
                        </p>

                        <div className="about__author">
                            <div className="about__author-avatar">
                                <img
                                    alt="people"
                                    src={people}
                                    className="about__author-avatar__sub"
                                />
                            </div>
                            <div className="about__author-avatar__info">
                                <p className="about__author-name">Jessica Burns</p>
                                <p className="about__author-role">Client Success Manager</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* new section */}
            {/* ── Services list ── */}
            <div className="abtSvc__wrap">
                {/* ── About Hero Intro ── */}
                <div className="abtHero__wrap">

                    {/* Left — big scroll text */}
                    <div className="abtHero__left">
                        <div className="about__tag">
                            <div className="about__tag__info">
                                <span className="about__tag-dot" />
                                <span className="about__tag-num">02</span>
                            </div>

                            <span className="about__tag-label">services</span>
                        </div>
                        <div>
                            <h2 className="abtHero__big-text">
                                turning repetitive work into <strong>time-saving systems</strong>
                            </h2>
                        </div>

                    </div>

                    {/* Right — desc + CTA + badge */}
                    <div className="abtHero__right">
                        <div className="abtHero__right-top">
                            <p className="abtHero__desc">
                                <strong>We provide practical AI consulting and automation services for companies that
                                    want results —{" "}
                                    not just theory.</strong> Our work is tailored, transparent, and focused on
                                the areas of your business where AI makes a real impact.
                            </p>
                            <div className="abtHero__desc__02">
                                <a href="/about" className="abtHero__cta">
                                    About Us
                                </a>
                                <div className="abtHero__badge">
                                    <CustomLogo color="white" size='xs' href="/" />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <div>
                    {/* Row 01 */}
                    <div className="abtSvc__row">
                        <span className="abtSvc__index">/01</span>
                        <h3 className="abtSvc__title">AI Consulting<br />&amp; Strategy</h3>
                        <div className="abtSvc__img-wrap">
                            <img src={img1} alt="AI Consulting" />
                        </div>
                        <div className="abtSvc__desc-col">
                            <p className="abtSvc__desc">
                                Whether you're just exploring possibilities or looking to scale existing
                                tools, we build a clear plan that aligns with your goals.
                            </p>
                            <div className="abtSvc__tags">
                                <span className="abtSvc__tag">aiconsulting</span>
                                <span className="abtSvc__tag">businessautomation</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 02 */}
                    <div className="abtSvc__row">
                        <span className="abtSvc__index">/02</span>
                        <h3 className="abtSvc__title">Workflow<br />Automation</h3>
                        <div className="abtSvc__img-wrap">
                            <img src={img2} alt="Workflow Automation" />
                        </div>
                        <div className="abtSvc__desc-col">
                            <p className="abtSvc__desc">
                                We design and deploy automation systems that take repetitive tasks off
                                your plate — from handling emails and reports to streamlining admin
                                and customer service processes.
                            </p>
                            <div className="abtSvc__tags">
                                <span className="abtSvc__tag">savetime</span>
                                <span className="abtSvc__tag">worksmarter</span>
                                <span className="abtSvc__tag">nomoremanualnwork</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 03 */}
                    <div className="abtSvc__row">
                        <span className="abtSvc__index">/03</span>
                        <h3 className="abtSvc__title">Custom AI Tools<br />&amp; Integrations</h3>
                        <div className="abtSvc__img-wrap">
                            <img src={img3} alt="Custom AI Tools" />
                        </div>
                        <div className="abtSvc__desc-col">
                            <p className="abtSvc__desc">
                                Need something more specific? We develop lightweight AI solutions
                                tailored to your operations — from data analysis tools to smart
                                assistants.
                            </p>
                            <div className="abtSvc__tags">
                                <span className="abtSvc__tag">aitools</span>
                                <span className="abtSvc__tag">tailoredtech</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 04 */}
                    <div className="abtSvc__row">
                        <span className="abtSvc__index">/04</span>
                        <h3 className="abtSvc__title">Team Onboarding<br />&amp; Training</h3>
                        <div className="abtSvc__img-wrap">
                            <img src={img4} alt="Team Training" />
                        </div>
                        <div className="abtSvc__desc-col">
                            <p className="abtSvc__desc">
                                AI only works when your team knows how to use it. We offer simple
                                onboarding, documentation, and ongoing support to make sure everyone
                                feels confident — even without a technical background.
                            </p>
                            <div className="abtSvc__tags">
                                <span className="abtSvc__tag">aitraining</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}