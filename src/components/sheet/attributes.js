import React from 'react';
import Firebase from 'firebase';

import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import Attribute from './attribute';
import AttributeTextField from './attribute_text_field';
import SheetFragment from './sheet_fragment';
import Skill from './skill';

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
                        marginLeft: '-.5em',
                        marginRight: '-.5em',
                        paddingLeft: '.5em',
                        //paddingRight: '1em',
                        //width: '100px',
                        //float: 'left'
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

                <List
                    style={{
                        //width: '160px',
                        //float: 'left'
                    }}
                    >
                    <Subheader>Saving Throws</Subheader>
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                        />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />


                    <Divider />
                    <Subheader>Skills</Subheader>

                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                    <Skill
                        {...this.props}
                        name="strengthSavingThrowTrained"
                        label="Strength"
                        trained={this.props.character.strengthSavingThrowTrained()}
                        bonus={this.props.character.strengthSavingThrow()}
                    />
                </List>
            </SheetFragment>
        );
    }
}
