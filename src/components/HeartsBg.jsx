import { useEffect, useState } from "react";

const HeartsBg = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 6 + Math.random() * 5,
            size: 14 + Math.random() * 10,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((h) => (
                <span
                    key={h.id}
                    className="heart"
                    style={{
                        left: `${h.left}%`,
                        animationDelay: `${h.delay}s`,
                        animationDuration: `${h.duration}s`,
                        fontSize: `${h.size}px`,
                    }}
                >
                    💖
                </span>
            ))}
        </div>
    );
};

export default HeartsBg;