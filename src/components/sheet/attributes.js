import React from 'react';
import Firebase from 'firebase';

import Paper from 'material-ui/Paper';

import Attribute from './attribute';
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

    updateCharacterValueCallback = (path, value) => {
        this.state.character.updateCharacter(path, value);
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
                    <Attribute
                        {...this.props}
                        name='strength'
                        label='Strength'
                        value={this.props.character.strength()}
                        />
                    <Attribute
                        {...this.props}
                        name='dexterity'
                        label='Dexterity'
                        value={this.props.character.dexterity()}
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
