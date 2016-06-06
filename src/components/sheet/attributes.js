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
                        name='constitution'
                        label='Constitution'
                        value={this.props.character.constitution()}
                    />
                    <Attribute
                        {...this.props}
                        name='intelligence'
                        label='Intelligence'
                        value={this.props.character.intelligence()}
                    />
                    <Attribute
                        {...this.props}
                        name='wisdom'
                        label='Wisdom'
                        value={this.props.character.wisdom()}
                    />
                    <Attribute
                        {...this.props}
                        name='charisma'
                        label='Charisma'
                        value={this.props.character.charisma()}
                    />
                </Paper>

                <List
                    style={{
                        //width: '160px',
                        //float: 'left'
                    }}
                    >
                    <ListItem
                        primaryText="Saving Throws"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={this.savingThrows()}
                        />

                    <Divider />

                    <ListItem
                        primaryText="Skills"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={this.skills()}
                    />
                </List>
            </SheetFragment>
        );
    }

    savingThrows = () => {
        return [
            <Skill
                {...this.props}
                key={'strength'}
                name="strengthSavingThrowTrained"
                label="Strength"
                trained={this.props.character.strengthSavingThrowTrained()}
                bonus={this.props.character.strengthSavingThrow()}
            />,
            <Skill
                {...this.props}
                key={'Dexterity'}
                name="dexteritySavingThrowTrained"
                label="Dexterity"
                trained={this.props.character.dexteritySavingThrowTrained()}
                bonus={this.props.character.dexteritySavingThrow()}
            />,
            <Skill
                {...this.props}
                name="constitutionSavingThrowTrained"
                label="Constitution"
                trained={this.props.character.constitutionSavingThrowTrained()}
                bonus={this.props.character.constitutionSavingThrow()}
            />,
            <Skill
                {...this.props}
                name="intelligenceSavingThrowTrained"
                label="Intelligence"
                trained={this.props.character.intelligenceSavingThrowTrained()}
                bonus={this.props.character.intelligenceSavingThrow()}
            />,
            <Skill
                {...this.props}
                name="wisdomSavingThrowTrained"
                label="Wisdom"
                trained={this.props.character.wisdomSavingThrowTrained()}
                bonus={this.props.character.wisdomSavingThrow()}
            />,
            <Skill
                {...this.props}
                name="charismaSavingThrowTrained"
                label="Charisma"
                trained={this.props.character.charismaSavingThrowTrained()}
                bonus={this.props.character.charismaSavingThrow()}
            />
        ];
    };

    skills = () => {
        return [
            <Skill
                {...this.props}
                name="acrobaticsTrained"
                label="Acrobatics"
                trained={this.props.character.acrobaticsTrained()}
                bonus={this.props.character.acrobatics()}
            />,
            <Skill
                {...this.props}
                name="animalHandlingTrained"
                label="Animal Handling"
                trained={this.props.character.animalHandlingTrained()}
                bonus={this.props.character.animalHandling()}
            />,
            <Skill
                {...this.props}
                name="arcanaTrained"
                label="Arcana"
                trained={this.props.character.arcanaTrained()}
                bonus={this.props.character.arcana()}
            />,
            <Skill
                {...this.props}
                name="athleticsTrained"
                label="Athletics"
                trained={this.props.character.athleticsTrained()}
                bonus={this.props.character.athletics()}
            />,
            <Skill
                {...this.props}
                name="deceptionTrained"
                label="Deception"
                trained={this.props.character.deceptionTrained()}
                bonus={this.props.character.deception()}
            />,
            <Skill
                {...this.props}
                name="historyTrained"
                label="History"
                trained={this.props.character.historyTrained()}
                bonus={this.props.character.history()}
            />,
            <Skill
                {...this.props}
                name="insightTrained"
                label="Insight"
                trained={this.props.character.insightTrained()}
                bonus={this.props.character.insight()}
            />,
            <Skill
                {...this.props}
                name="intimidationTrained"
                label="Intimidation"
                trained={this.props.character.intimidationTrained()}
                bonus={this.props.character.intimidation()}
            />,
            <Skill
                {...this.props}
                name="investigationTrained"
                label="Investigation"
                trained={this.props.character.investigationTrained()}
                bonus={this.props.character.investigation()}
            />,
            <Skill
                {...this.props}
                name="medicineTrained"
                label="Medicine"
                trained={this.props.character.medicineTrained()}
                bonus={this.props.character.medicine()}
            />,
            <Skill
                {...this.props}
                name="natureTrained"
                label="Nature"
                trained={this.props.character.natureTrained()}
                bonus={this.props.character.nature()}
            />,
            <Skill
                {...this.props}
                name="perceptionTrained"
                label="Perception"
                trained={this.props.character.perceptionTrained()}
                bonus={this.props.character.perception()}
            />,
            <Skill
                {...this.props}
                name="performanceTrained"
                label="Performance"
                trained={this.props.character.performanceTrained()}
                bonus={this.props.character.performance()}
            />,
            <Skill
                {...this.props}
                name="persuasionTrained"
                label="Persuasion"
                trained={this.props.character.persuasionTrained()}
                bonus={this.props.character.persuasion()}
            />,
            <Skill
                {...this.props}
                name="religionTrained"
                label="Religion"
                trained={this.props.character.religionTrained()}
                bonus={this.props.character.religion()}
            />,
            <Skill
                {...this.props}
                name="sleightOfHandTrained"
                label="Sleight Of Hand"
                trained={this.props.character.sleightOfHandTrained()}
                bonus={this.props.character.sleightOfHand()}
            />,
            <Skill
                {...this.props}
                name="stealthTrained"
                label="Stealth"
                trained={this.props.character.stealthTrained()}
                bonus={this.props.character.stealth()}
            />,
            <Skill
                {...this.props}
                name="survivalTrained"
                label="Survival"
                trained={this.props.character.survivalTrained()}
                bonus={this.props.character.survival()}
            />
        ];
    };
}
