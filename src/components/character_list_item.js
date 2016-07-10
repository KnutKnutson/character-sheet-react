import React from 'react';

import {List, ListItem} from 'material-ui/List';

import CharacterSummary from '../model/character_summary';

export default class CharacterListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characterSummary: new CharacterSummary(this.props.characterId)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.characterId !== nextProps.characterId) {
            let nextCharacter = new CharacterSummary(nextProps.characterId);
            this.state.characterSummary.unBind();
            nextCharacter.bind(this);
        }
    }

    componentWillMount() {
        this.state.characterSummary.bind(this);
    }

    componentWillUnmount() {
        this.state.characterSummary.unBind();
    }

    render() {
        let cSum = this.state.characterSummary.summary;
        return (
            <ListItem
                onTouchTap={this.props.changeCharacterCallback.bind(null, this.props.characterId)}
                primaryText={cSum.characterName}
                secondaryText={[(cSum.level ? 'lvl:' : null), cSum.level, cSum.characterClass, cSum.characterRace].join(' ')}
            />
        );
    }
}
