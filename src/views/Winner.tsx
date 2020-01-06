import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export interface Props {
    winner: string,
    redirectURL: string
};

export interface State {}

export default class Winner extends Component<Props, State> {
    render({ winner, redirectURL }: Props, _: State) {
    return (
        <main class="winner">
            <h1>{winner} is the Winner!</h1>
            <div className="winner__links">
                <Link activeClassName="active" href={"/" + redirectURL}>Back</Link>
                <Link activeClassName="active" href="/">Home</Link>
            </div>
        </main>
    );
    }
}
