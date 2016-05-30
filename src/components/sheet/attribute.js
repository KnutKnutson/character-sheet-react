import React from 'react';
import Firebase from 'firebase';

import Paper from 'material-ui/Paper';

import AttributeTextField from './attribute_text_field';
import SheetFragment from './sheet_fragment';

export default class Attributes extends React.Component {
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
            <div>
                    <AttributeTextField
                        width="one-fifth"
                        expandable={true}
                        name="strength"
                        floatingLabelText="Strength"
                        value={this.props.character.strength()}
                        onChange={this.updateCharacter}
                    />
                    <Paper
                        circle={true}
                        zDepth={1}
                        style={{
                            width: '20px',
                            height: '20px',
                            paddingTop: '2px',
                            marginLeft: '-.5em',
                            margingTop: '-.5em',
                            textAlign: 'center',
                            display: 'inline-block'
                        }}
                    >
                        {5}
                    </Paper>
            </div>
        );
    }
}
