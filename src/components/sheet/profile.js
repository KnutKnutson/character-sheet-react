import React from 'react';
import Firebase from 'firebase';

import TextField from 'material-ui/lib/text-field';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    updateCharacter = (e, text, callback) => {
        let fieldName = e.currentTarget.name;
        let fieldValue = e.target.value;
        this.props.onCharacterValueUpdate(fieldName, fieldValue);
    };

    render() {
        return (
            <div className="sheet-fragment">
                <TextField
                    name="characterName"
                    floatingLabelText="Character Name"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                    />
            </div>
        );
    }
}
