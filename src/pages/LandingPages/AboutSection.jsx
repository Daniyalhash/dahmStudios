import { useEffect, useRef } from "react";
import './styles/AboutSection.css'
// imgaes
import people from '../../assets/images/people/people.jpg';
import people2 from '../../assets/images/projectImages/6.avif';

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
                                    <Play className="about__play-btn__icon"  />
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
        </section>
    );
}