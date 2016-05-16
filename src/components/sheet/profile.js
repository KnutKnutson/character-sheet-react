import React from 'react';
import Firebase from 'firebase';

import TextField from 'material-ui/lib/text-field';
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
            >
                <TextField
                    expandable={true}
                    name="characterName"
                    floatingLabelText="Character Name"
                    value={this.props.character.characterName()}
                    onChange={this.updateCharacter}
                    />
                <TextField
                    expandable={true}
                    name="race"
                    floatingLabelText="Race"
                    value={this.props.race}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="class"
                    floatingLabelText="Class"
                    value={this.props.class}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="level"
                    floatingLabelText="Level"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="xp"
                    floatingLabelText="Experience Points"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="alignment"
                    floatingLabelText="Alignment"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="playername"
                    floatingLabelText="Player Name"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="background"
                    floatingLabelText="Background"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="age"
                    floatingLabelText="Age"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="height"
                    floatingLabelText="Height"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="weight"
                    floatingLabelText="Weight"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="eyes"
                    floatingLabelText="Eyes"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="skin"
                    floatingLabelText="Skin"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="hair"
                    floatingLabelText="Hair"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
                <TextField
                    expandable={true}
                    name="backstory"
                    floatingLabelText="Backstory"
                    value={this.props.characterName}
                    onChange={this.updateCharacter}
                />
            </SheetFragment>
        );
    }
}
