import React from 'react';
import Firebase from 'firebase';

import Paper from 'material-ui/Paper';

import AttributeTextField from './attribute_text_field';
import SheetFragment from './sheet_fragment';

export default class CombatStats extends React.Component {
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
            <SheetFragment
                title="Profile"
                initiallyExpanded={false}
            >
                <Paper
                    circle={false}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#CFD8DC',
                        marginLeft: '-.5em',
                        marginTop: '.5em',
                        marginBottom: '.5em',
                        paddingLeft: '.5em',
                        //paddingRight: '1em',
                        //width: '100px',
                        //float: 'left'
                    }}
                >
                    <AttributeTextField
                        width="two-fifth"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Armor Class"
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
                        marginBottom: '.5em',
                        paddingLeft: '.5em',
                        //paddingRight: '1em',
                        //width: '100px',
                        //float: 'left'
                    }}
                >
                    <AttributeTextField
                        width="one-fifth"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Armor Class"
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
                        marginBottom: '.5em',
                        paddingLeft: '.5em',
                        //paddingRight: '1em',
                        //width: '100px',
                        //float: 'left'
                    }}
                >
                    <AttributeTextField
                        width="two-fifth"
                        expandable={true}
                        name="armorClass"
                        floatingLabelText="Armor Class"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
            </SheetFragment>
        );
    }
}
