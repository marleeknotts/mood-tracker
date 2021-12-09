import React, { useEffect, useState } from "react";

export default function Fade(props) {
    const { show, callback, children } = props;
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
        callback(false);
    };

    return (
        shouldRender && (
            <div
                style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        )
    );
};