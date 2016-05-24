import React from 'react';
import Firebase from 'firebase';

import AttributeTextField from './attribute_text_field';
import SheetFragment from './sheet_fragment';

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
            <SheetFragment
                title="Profile"
                initiallyExpanded={false}
            >
                <AttributeTextField
                    expandable={true}
                    name="playerName"
                    floatingLabelText="Player Name"
                    value={this.props.character.playerName()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    expandable={true}
                    name="characterName"
                    floatingLabelText="Character Name"
                    value={this.props.character.characterName()}
                    onChange={this.updateCharacter}
                    />
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="characterRace"
                    floatingLabelText="Race"
                    value={this.props.character.characterRace()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="characterClass"
                    floatingLabelText="Class"
                    value={this.props.character.characterClass()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="level"
                    floatingLabelText="Level"
                    value={this.props.character.level()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="two-third"
                    expandable={true}
                    name="xp"
                    floatingLabelText="Experience Points"
                    value={this.props.character.xp()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="alignment"
                    floatingLabelText="Alignment"
                    value={this.props.character.alignment()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="background"
                    floatingLabelText="Background"
                    value={this.props.character.background()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="age"
                    floatingLabelText="Age"
                    value={this.props.character.age()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="height"
                    floatingLabelText="Height"
                    value={this.props.character.height()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="weight"
                    floatingLabelText="Weight"
                    value={this.props.character.weight()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="eyes"
                    floatingLabelText="Eyes"
                    value={this.props.character.eyes()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="skin"
                    floatingLabelText="Skin"
                    value={this.props.character.skin()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-third"
                    expandable={true}
                    name="hair"
                    floatingLabelText="Hair"
                    value={this.props.character.hair()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    expandable={true}
                    name="backstory"
                    floatingLabelText="Backstory"
                    multiline={true}
                    rows={2}
                    value={this.props.character.backstory()}
                    onChange={this.updateCharacter}
                />
            </SheetFragment>
        );
    }
}
