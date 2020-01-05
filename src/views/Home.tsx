import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
    render() {
        return (
            <main>
                <h1>Dart Mate</h1>

                <Link activeClassName="active" href="/killer">Killer</Link>
            </main>
        );
    }
}
