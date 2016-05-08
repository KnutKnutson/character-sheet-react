import React from 'react';
import Paper from 'material-ui/lib/paper';
import Firebase from 'firebase';

import Profile from './sheet/profile';

/**
 * Bind character sheet to Firebase object
 * @param  {Object} component      Sheet component to bind to.
 * @param  {string} characterId    Firebase ID of the character sheet
 */
function bindFireBaseCharacter(component, characterId) {
    var url = config.firebase.url + '/characters/' + characterId + "/";
    component.character = new Firebase(url);
    component.character.on('value', function(snapshot) {
        component.setState(snapshot.val());
    });
}

export default class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps() {
        if (this.props.characterId !== nextProps.characterId) {
            bindFireBaseCharacter(this, "1");
        }
    }

    componentWillMount() {
        bindFireBaseCharacter(this, "1");
    }

    componentWillUnmount() {
        this.character.off();
    }

    onCharacterValueUpdate = (e, text, callback) => {
        let fieldName = e.currentTarget.name;
        let fieldValue = e.target.value;
        let updateHash = {};
        updateHash[fieldName] = fieldValue;
        this.character.update(updateHash);
    };

    render() {
        return (
            <Paper
                className="sheet-paper"
                zDepth={1}>
                <Profile
                    characterName={this.state.characterName}
                    onCharacterValueUpdate={this.onCharacterValueUpdate}
                />
                <Profile
                    characterName={this.state.characterName}
                    onCharacterValueUpdate={this.onCharacterValueUpdate}
                />
            </Paper>
        );
    }
}
