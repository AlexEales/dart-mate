import { h, render } from 'preact';
import Router from 'preact-router';

import Home from './views/Home';
import Killer from './views/Killer';
import Winner from './views/Winner';

const Main = () => (
    <Router>
        <Home path="/"/>
        <Killer path="/killer"/>
        <Winner path="/winner/:winner/:redirectURL" winner="" redirectURL=""/>
    </Router>
);

render(<Main/>, document.body);