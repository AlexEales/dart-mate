import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

import KillerPlayer from '../components/KillerPlayer';

export interface Props {};

export interface State {
    players: string[],
    formValue: string,
    inputShown: boolean,
    alivePlayers: string[],
};

export default class Killer extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            players: [],
            formValue: '',
            alivePlayers: [],
            inputShown: false
        };
    }

    checkForWin = () => {
        if (this.state.players.length >= 2 && this.state.alivePlayers.length === 1) {
            route(`/winner/${this.state.alivePlayers[0]}/killer`);
        }
    }

    addPlayer = () => {
        if (this.state.formValue.length > 0) {
            this.setState(prev => {
                let newPlayers = prev.players;
                newPlayers.push(prev.formValue);
                let alivePlayers = prev.alivePlayers;
                alivePlayers.push(prev.formValue);
                return { 
                    players: newPlayers,
                    formValue: '',
                    alivePlayers: alivePlayers,
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

    onFormEnter = (e) => {
        let keycode = e.keycode || e.which;
        if (keycode === 13) {
            this.addPlayer();
        }
    }

    deathHandler = (player: string) => {
        this.setState(prev => {
            let alivePlayers = prev.alivePlayers;
            let idx = alivePlayers.indexOf(player);
            alivePlayers.splice(idx, 1);
            return { alivePlayers };
        });
        this.checkForWin();
    }

    reviveHandler = (player: string) => {
        this.setState(prev => {
            let alivePlayers = prev.alivePlayers;
            alivePlayers.push(player);
            return { alivePlayers };
        });
    }

    reset = () => {
        this.setState(prev => ({
            players: [],
            alivePlayers: []
        }));
    }

    render(_: Props, { players, formValue, inputShown }: State) {
        return (
            <main>
                <h1 class="killer__title">Killer</h1>

                <Link class="killer__home-link" activeClassName="active" href="/">Home</Link>

                {
                    players.length <= 0
                    ? <p class="killer__no-players-msg">Press the plus below to add players!</p>
                    : ""
                }

                {players.map(player => 
                    <KillerPlayer name={player}deathHandler={this.deathHandler} reviveHandler={this.reviveHandler}/>
                )}

                <div className="killer__add-player">
                    {
                        inputShown
                        ? <input type="text" class="killer__add-player-form"
                                value={formValue} onInput={this.onFormInput}
                                onKeyPress={this.onFormEnter}
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

                <button class="killer__reset" onClick={this.reset}>Reset</button>
            </main>
        );
    }
}