import { h, Component } from 'preact';

export interface Props {
    name: string,
    deathHandler: Function,
    reviveHandler: Function
};

export interface State {
    dead: boolean,
    lives: number
};

export default class KillerPlayer extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            dead: false,
            lives: 3
        };
    }

    revive = () => {
        this.setState(_ => {
            return {
                dead: false,
                lives: 1
            };
        });
        this.props.reviveHandler(this.props.name);
    }

    add = () => {
        this.setState(prev => {
            return { lives: prev.lives + 1 > 5 ? 5 : prev.lives + 1 };
        });
    }

    subtract = () => {
        this.setState(prev => {
            let dead = prev.lives - 1 <= 0;
            if (dead) {
                this.props.deathHandler(this.props.name);
            }
            return {
                dead: dead,
                lives: dead ? 0 : prev.lives - 1
            };
        });
    }

    render({ name }: Props, { dead, lives }: State) {
        return (
            <div class={"killer-player" + (dead ? " killer-player--dead" : "")}>
                <h2 class="killer-player__name">{name}</h2>
                {
                    dead
                    ? <button class="killer-player__revive" onClick={this.revive}>Revive</button>
                    : <h3 class={'killer-player__lives-' + lives}></h3>
                }
                <div class="killer-player__controls">
                    <button class="killer-player__add" onClick={this.add} disabled={dead}>+</button>
                    <button class="killer-player__remove" onClick={this.subtract} disabled={dead}>−</button>
                </div>
            </div>
        );
    }
};
