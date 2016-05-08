import React from 'react';
import Paper from 'material-ui/lib/paper';
import Firebase from 'firebase';

import Profile from './sheet/profile';

import Character from '../model/character';

export default class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {character: new Character(this.props.characterId)};
    }

    componentWillReceiveProps() {
        if (this.props.characterId !== nextProps.characterId) {
            let nextCharacter = new Character(nextProps.characterId);
            this.state.character.unBindFireBaseCharacter();
            nextCharacter.bindFireBaseCharacter(this);
        }
    }

    componentWillMount() {
        this.state.character.bindFireBaseCharacter(this);
    }

    componentWillUnmount() {
        this.state.character.unBindFireBaseCharacter();
    }

    updateCharacterValueCallback = (path, value) => {
        this.state.character.updateCharacter(path, value);
    };

    render() {
        return (
            <Paper
                className="sheet-paper"
                zDepth={1}>
                <Profile
                    characterName={this.state.character.characterName()}
                    onCharacterValueUpdate={this.updateCharacterValueCallback}
                />
                <Profile
                    characterName={this.state.character.characterName()}
                    onCharacterValueUpdate={this.updateCharacterValueCallback}
                />
            </Paper>
        );
    }
}
