import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
    render() {
        return (
            <main>
                <h1>Dart Mate</h1>

                <Link class="home__killer-link" activeClassName="active" href="/killer">🔪 Killer 🔪</Link>

                <div class="home__coming-soon">More games coming soon...</div>
            </main>
        );
    }
}
