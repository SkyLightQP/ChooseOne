import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9';
import 'normalize.css/normalize.css';
import './css/color.css';
import Home from './pages/Home';
import { VisitedProvider } from './hooks/useVisited';

const Index = () => (
    <VisitedProvider>
        <Home />
    </VisitedProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
