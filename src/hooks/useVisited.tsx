import React, { createContext, useContext, useEffect, useState } from 'react';

const context = createContext<string>('false');

export const VisitedProvider: React.FC = ({ children }) => {
    const [isVisit, setVisit] = useState<string>('false');

    useEffect(() => {
        if (localStorage.getItem('visited') === null || localStorage.getItem('visited') === 'false') {
            localStorage.setItem('visited', 'true');
            setVisit('false');
        } else {
            setVisit(localStorage.getItem('visited')!!);
        }


    }, []);

    return <context.Provider value={isVisit}>{children}</context.Provider>;
};

export const useVisited = () => useContext(context);
