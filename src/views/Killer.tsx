import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import KillerPlayer from '../components/KillerPlayer';

export interface Props {};

export interface State {
    players: string[],
    formValue: string,
    inputShown: boolean,
};

export default class Killer extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            players: [
                "Alex",
                "Mils"
            ],
            formValue: '',
            inputShown: false
        };
    }

    addPlayer = () => {
        if (this.state.formValue.length > 0) {
            this.setState(prev => {
                let newPlayers = prev.players;
                newPlayers.push(prev.formValue);
                return { 
                    players: newPlayers,
                    formValue: '',
                    inputShown: false
                };
            });
        }
    }

    toggleInput = () => {
        this.setState(prev => ({ inputShown: !prev.inputShown }));
    }

    onFormInput = (e) => {
        const { value } = e.target;
        this.setState({ formValue: value });
    }

    render(_: Props, { players, formValue, inputShown }: State) {
        return (
            <main>
                <h1>Killer</h1>

                <Link activeClassName="active" href="/">Home</Link>

                <div id="killer-players">
                    {players.map(player => <KillerPlayer name={player} />)}
                </div>

                <div className="killer__add-player">
                    {
                        inputShown
                        ? <input type="text" class="killer__add-player-form"
                                value={formValue} onInput={this.onFormInput}
                                maxLength={5}/>
                        : ""
                    }   
                    <button class="killer__add-player-submit" onClick={inputShown ? this.addPlayer : this.toggleInput}>+</button>
                </div>
            </main>
        );
    }
}