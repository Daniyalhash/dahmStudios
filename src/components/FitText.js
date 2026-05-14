import { useEffect, useRef } from "react";

export default function FitText({ 
    text, 
    className,
    containerClassName = "navbar__card-email-container",  // ← default keeps navbar working
    textClassName = "navbar__card-email",                  // ← default keeps navbar working
    as: Tag = "h1"                                         // ← lets you use h1, h2, p, span etc
}) {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function fit() {
            const container = containerRef.current;
            const text = textRef.current;
            if (!container || !text) return;

            text.style.transform = 'scaleX(1)';
            const containerW = container.offsetWidth;
            const textW = text.scrollWidth;

            if (textW > containerW) {
                text.style.transform = `scaleX(${containerW / textW})`;
            } else {
                text.style.transform = 'scaleX(1)';
            }
        }

        fit();
        window.addEventListener('resize', fit);
        return () => window.removeEventListener('resize', fit);
    }, [text]);

    return (
        <div ref={containerRef} className={containerClassName}>
            <Tag ref={textRef} className={`${textClassName} ${className || ''}`}>
                {text}
            </Tag>
        </div>
    );
}