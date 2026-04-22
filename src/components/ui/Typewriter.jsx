import { useEffect, useState } from "react";

const Typewriter = ({
    text,
    speed = 35,
    active = false,
    done = false,
    onComplete
}) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (!active) return;

        let i = 0;

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;

            if (i === text.length) {
                clearInterval(interval);
                onComplete && onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [active, text]);

    // ✅ Always render same structure
    if (done) return <span>{text}</span>;

    return <span>{displayed}</span>;
};

export default Typewriter;