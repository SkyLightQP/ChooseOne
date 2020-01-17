import React, { createContext, useContext, useState } from 'react';

interface DataStructure {
    readonly first: any;
    readonly second: any;
}

interface DataContext {
    readonly put: (first: any, second: any) => void;
    readonly remove: (id: string) => void;
    readonly get: () => DataStructure[];
}

const context = createContext<DataContext>({} as DataContext);

export const DataProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<DataStructure[]>(JSON.parse(localStorage.getItem('data')!!) || []);

    const DataManager: DataContext = {
        put(first: any, second: any) {
            if (localStorage.getItem('data') === null) {
                localStorage.setItem('data', JSON.stringify([]));
            }

            const local = JSON.parse(localStorage.getItem('data')!!);
            const obj: DataStructure = {
                first,
                second
            };

            local.push(obj);

            setData(local);
            localStorage.setItem('data', JSON.stringify(local));
        },
        remove() {
            const local = JSON.parse(localStorage.getItem('data')!!);

            local.pop();

            setData(local);
            localStorage.setItem('data', JSON.stringify(local));
        },
        get(): DataStructure[] {
            return data;
        }
    };

    return <context.Provider value={DataManager}>{children}</context.Provider>;
};

export const useData = () => useContext(context);
