import { h, render } from 'preact';
import Router from 'preact-router';

import Killer from './views/Killer';
import Home from './views/Home';

const Main = () => (
    <Router>
        <Home path="/"/>
        <Killer path="/killer"/>
    </Router>
);

render(<Main/>, document.body);