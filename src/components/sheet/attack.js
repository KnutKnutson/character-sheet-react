import React from 'react';
import Firebase from 'firebase';

import Paper from 'material-ui/Paper';

import AttributeTextField from './attribute_text_field';

export default class Attack extends React.Component {
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
                <Paper
                    circle={false}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#CFD8DC',
                        marginLeft: '-.5em',
                        marginTop: '.5em',
                        paddingLeft: '.5em',
                        paddingRight: '.5em',
                        width: '104px',
                    }}
                >
                    <AttributeTextField
                        width="full-width"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Name"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
                <Paper
                    circle={false}
                    style={{
                    display: 'inline-block',
                    backgroundColor: '#CFD8DC',
                    marginLeft: '.5em',
                    marginTop: '.5em',
                    paddingRight: '.5em',
                    paddingLeft: '.5em',
                    width: '60px',
                }}
                >
                    <AttributeTextField
                        width="full-width"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Bonus"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
                <Paper
                    circle={false}
                    style={{
                    display: 'inline-block',
                    backgroundColor: '#CFD8DC',
                    marginLeft: '.5em',
                    marginTop: '.5em',
                    marginRight: '-.5em',
                    paddingRight: '.5em',
                    paddingLeft: '.5em',
                    width: '104px',
                }}
                >
                    <AttributeTextField
                        width="full-width"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Damage/Type"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
            </div>
        );
    }
}
