// GrainCanvas.jsx
import { useEffect, useRef } from "react";

export default function GrainCanvas({ opacity = 0.07, speed = 1 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let frame = 0;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        function draw() {
            frame++;
            // Only redraw every N frames to control speed
            if (frame % Math.max(1, Math.round(3 / speed)) === 0) {
                const { width, height } = canvas;
                const imageData = ctx.createImageData(width, height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const v = Math.random() * 255;
                    data[i] = v;
                    data[i + 1] = v;
                    data[i + 2] = v;
                    data[i + 3] = 255;
                }
                ctx.putImageData(imageData, 0, 0);
            }
            animId = requestAnimationFrame(draw);
        }

        resize();
        draw();

        return () => cancelAnimationFrame(animId);
    }, [speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity,
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
}