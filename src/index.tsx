import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './css/color.css';
import Home from './pages/Home';
import { VisitedProvider } from './hooks/useVisited';
import { DataProvider } from './hooks/useData';

const Index = () => (
    <DataProvider>
        <VisitedProvider>
            <Home />
        </VisitedProvider>
    </DataProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
