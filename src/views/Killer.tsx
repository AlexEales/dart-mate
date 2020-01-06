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
                <h1 class="killer__title">Killer</h1>

                <Link class="killer__home-link" activeClassName="active" href="/">Home</Link>

                {players.map(player => <KillerPlayer name={player} />)}

                <div className="killer__add-player">
                    {
                        inputShown
                        ? <input type="text" class="killer__add-player-form"
                                value={formValue} onInput={this.onFormInput}
                                maxLength={5} placeholder="Player Name"/>
                        : ""
                    }   
                    <button class="killer__add-player-submit" onClick={inputShown ? this.addPlayer : this.toggleInput}>+</button>
                    {
                        inputShown
                        ? <button class="killer__add-player-cancel" onClick={this.toggleInput}>X</button>
                        : ""
                    }  
                </div>
            </main>
        );
    }
}