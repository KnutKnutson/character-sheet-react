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
            <SheetFragment
                title="Profile"
                initiallyExpanded={false}
            >
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="inspiration"
                    floatingLabelText="Inspiration"
                    value={this.props.character.inspiration()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="two-third"
                    expandable={true}
                    name="proficiencyBonus"
                    floatingLabelText="Proficiency Bonus"
                    value={this.props.character.proficiencyBonus()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    expandable={true}
                    name="passiveWisdom"
                    floatingLabelText="Passive Wisdom (Perception)"
                    value={this.props.character.passiveWisdom()}
                    onChange={this.updateCharacter}
                />
                <Paper
                    style={{
                        backgroundColor: '#CFD8DC',
                        marginLeft: '-1em',
                        marginRight: '1em',
                        paddingLeft: '1em',
                        paddingRight: '1em',
                        width: '100px',
                        float: 'left'
                    }}
                >
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
                    <AttributeTextField
                        width="one-fifth"
                        expandable={true}
                        name="dexterity"
                        floatingLabelText="Dexterity"
                        value={this.props.character.dexterity()}
                        onChange={this.updateCharacter}
                    />
                </Paper>

                <AttributeTextField
                    width="two-third"
                    style={{
                        float: 'left'
                    }}
                    expandable={true}
                    name="proficiencyBonus"
                    floatingLabelText="Proficiency Bonus"
                    value={this.props.character.proficiencyBonus()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="two-third"
                    style={{
                        float: 'left'
                    }}
                    expandable={true}
                    name="proficiencyBonus"
                    floatingLabelText="Proficiency Bonus"
                    value={this.props.character.proficiencyBonus()}
                    onChange={this.updateCharacter}
                />
            </SheetFragment>
        );
    }
}
