import { useEffect, useRef } from "react";

export default function FitText2({ 
    text, 
    className,
    containerClassName = "navbar__card-email-container",
    textClassName = "navbar__card-email",
    as: Tag = "h1"
}) {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function fit() {
            const container = containerRef.current;
            const el = textRef.current;
            if (!container || !el) return;

            // temporarily make visible to measure correctly
            const prevVisibility = el.style.visibility;
            const prevOpacity = el.style.opacity;
            el.style.visibility = 'hidden';
            el.style.opacity = '0';

            // reset scale before measuring
            el.style.transform = 'scaleX(1)';

            const containerW = container.offsetWidth;
            const textW = el.scrollWidth;

            el.style.visibility = prevVisibility;
            el.style.opacity = prevOpacity;

            if (containerW > 0 && textW > containerW) {
                el.style.transform = `scaleX(${containerW / textW})`;
            } else {
                el.style.transform = 'scaleX(1)';
            }
        }

        // run immediately + after animation delay
        fit();
        const t1 = setTimeout(fit, 100);
        const t2 = setTimeout(fit, 500);  // ← catches after lp-fadeUp finishes

        window.addEventListener('resize', fit);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener('resize', fit);
        };
    }, [text]);

    return (
        <div ref={containerRef} className={containerClassName}>
            <Tag ref={textRef} className={`${textClassName} ${className || ''}`}>
                {text}
            </Tag>
        </div>
    );
}