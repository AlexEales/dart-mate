import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Killer extends Component {
    render() {
        return (
            <main>
                <h1>Killer</h1>

                <Link activeClassName="active" href="/">Home</Link>
            </main>
        );
    }
}