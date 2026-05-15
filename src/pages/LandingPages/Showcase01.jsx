import { useRef } from "react";
import "./styles/showcase01.css";
import GrainCanvas from "../../components/GrainCanvas";
// image
import A from '../../assets/images/projectImages/1.avif';
import B from '../../assets/images/projectImages/2.avif'
import C from '../../assets/images/projectImages/3.avif'
import D from '../../assets/images/projectImages/4.png'
import E from '../../assets/images/projectImages/5.avif'

const projects = [
    // {
    //     id: 1,
    //     title: "Crypto Wallet",
    //     tag: "Mobile App",
    //     size: "sm",
    //     accent: "#1a1a2e",
    //     image: null, // replace with your image path e.g. import img from './assets/...'
    //     placeholder: "#0f3460",
    // },
    // {
    //     id: 2,
    //     title: "NFT App",
    //     tag: "iOS · Android",
    //     size: "lg",
    //     accent: "#4a1fa8",
    //     image: null,
    //     placeholder: "#6c35de",
    // },
    {
        id: 3,
        title: "Trade Dashboard",

        size: "md",
        accent: "#0a1f0a",
        image: A,
        placeholder: "#1a3a1a",
    },
    {
        id: 3,
        title: "Trade Dashboard",

        size: "md",
        accent: "#0a1f0a",
        image: B,
        placeholder: "#1a3a1a",
    },
    {
        id: 3,
        title: "Trade Dashboard",

        size: "md",
        accent: "#0a1f0a",
        image: C,
        placeholder: "#1a3a1a",
    },
    {
        id: 3,
        title: "Trade Dashboard",

        size: "md",
        accent: "#0a1f0a",
        image: E,
        placeholder: "#1a3a1a",
    },
    {
        id: 4,
        title: "Layers",

        size: "xl",
        accent: "#1a0a2e",
        image: D,
        placeholder: "#2d1b4e",
    },
    // {
    //     id: 5,
    //     title: "ApeYachtClub",
    //     tag: "NFT · Web3",
    //     size: "sm",
    //     accent: "#1f1a0a",
    //     image: null,
    //     placeholder: "#3a2f0f",
    // },
];

export default function Showcase01() {
    const trackRef = useRef(null);

    return (
        <section className="showcase_01">
            {/* grain + lines live here */}
            <div className="showcase_01__grain-wrapper">
                <GrainCanvas opacity={0.04} speed={.9} />
            </div>
           
            {/* <div className="showcase_01__header">
                <p className="showcase_01__label">Selected Work</p>
                <div className="showcase_01__header-right">
                    <span className="showcase_01__count">{String(projects.length).padStart(2, "0")} Projects</span>
                </div>
            </div> */}
            {/* Scrollable track */}
            <div className="showcase_01__track-wrap">
                <div className="showcase_01__track" ref={trackRef}>
                    {projects.map((p, i) => (
                        <article
                            key={p.id}
                            className={`showcase_01__card showcase_01__card--${p.size}`}
                            style={{ "--card-accent": p.accent, "--card-placeholder": p.placeholder }}
                        >
                            <div className="showcase_01__card-img">
                                {p.image ? (
                                    <img src={p.image} alt={p.title} />
                                ) : (
                                    <div className="showcase_01__card-img-placeholder" />
                                )}


                            </div>

                            <div className="showcase_01__card-footer">
                                <div className="showcase_01__card-info">
                                    <h3 className="showcase_01__card-title">{p.title}</h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}