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

    secondaryText = () => {
        let cSum = this.state.characterSummary.summary;
        let sTextElements = [];
        if (this.props.displayPlayerName && cSum.playerName) {
            sTextElements.push(cSum.playerName, '\n');
        }
        if (cSum.level) {
            sTextElements.push('lvl:', cSum.level);
        }
        sTextElements.push(cSum.characterRace, cSum.characterClass);
        return sTextElements.join(' ');
    };

    render() {
        return (
            <ListItem
                onTouchTap={this.props.changeCharacterCallback.bind(null, this.props.characterId)}
                primaryText={this.state.characterSummary.summary.characterName}
                secondaryText={this.secondaryText()}
            />
        );
    }
}
