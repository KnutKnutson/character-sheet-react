import React from 'react';

import {List, ListItem} from 'material-ui/List';

export default class CharacterListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let character = this.props.character;
        return (
            <ListItem
                onTouchTap={this.props.changeCharacterCallback}
                primaryText={character.characterName}
                secondaryText={['lvl:', character.level, character.characterClass, character.characterRace].join(' ')}
            />
        );
    }
}
