import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import KillerPlayer from '../components/KillerPlayer';

export default class Killer extends Component {
    render() {
        return (
            <main>
                <h1>Killer</h1>

                <Link activeClassName="active" href="/">Home</Link>

                <KillerPlayer name="Alex"/>
            </main>
        );
    }
}