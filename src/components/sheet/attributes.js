import React from 'react';
import Firebase from 'firebase';

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
            </SheetFragment>
        );
    }
}
