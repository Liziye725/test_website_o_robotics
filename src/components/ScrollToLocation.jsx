// ScrollToLocation.jsx

import React, { useEffect } from 'react';

const ScrollToLocation = () => {
    useEffect(() => {
        const handleLocationChange = () => {
            const location = window.location.hash;
            if (location) {
                const element = document.querySelector(location);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        handleLocationChange();

        window.addEventListener('hashchange', handleLocationChange);

        return () => {
            window.removeEventListener('hashchange', handleLocationChange);
        };
    }, []);

    return null;
};

export default ScrollToLocation;
