import React from 'react';
import Firebase from 'firebase';

import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import Attack from './attack';
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

    renderAttacks = () => {
        // TODO.  iterate over this.props.character.attacks and use attack.js.  remove this.
        return (
            <div
                expandable={true}>
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
    };

    render() {
        return (
            <SheetFragment
                {...this.props}
                title="Combat Workspace"
            >
                <Paper
                    expandable={true}
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
                        floatingLabelText="Armor Class"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
                <Paper
                    expandable={true}
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
                        floatingLabelText="Speed"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
                <Paper
                    expandable={true}
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
                        floatingLabelText="Initiative"
                        value={this.props.character.armorClass()}
                        onChange={this.updateCharacter}
                    />
                </Paper>
                <AttributeTextField
                    width="two-fifth"
                    expandable={true}
                    name="armorClass"
                    floatingLabelText="Current HP"
                    value={this.props.character.armorClass()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-fifth"
                    expandable={true}
                    name="armorClass"
                    floatingLabelText="Max"
                    value={this.props.character.armorClass()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="two-fifth"
                    expandable={true}
                    name="armorClass"
                    floatingLabelText="Temporary"
                    value={this.props.character.armorClass()}
                    onChange={this.updateCharacter}
                />
                <Subheader
                    expandable={true}>
                    Death Saves
                </Subheader>
                <Checkbox
                    expandable={true}
                    checked={true}
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Checkbox
                    expandable={true}
                    checked={false}
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Checkbox
                    expandable={true}
                    checked={false}
                    label="Successes"
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Divider
                    expandable={true}/>
                <Checkbox
                    expandable={true}
                    checked={true}
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Checkbox
                    expandable={true}
                    checked={false}
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Checkbox
                    expandable={true}
                    checked={false}
                    label="Failures"
                    style={{
                        width: '40px',
                        display: 'inline-block'
                    }}
                />
                <Divider
                    expandable={true}/>
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="hitDice"
                    floatingLabelText="Hit Dice"
                    value={this.props.character.hitDice()}
                    onChange={this.updateCharacter}
                />
                <AttributeTextField
                    width="one-half"
                    expandable={true}
                    name="hitDiceTotal"
                    floatingLabelText="Total"
                    value={this.props.character.hitDiceTotal()}
                    onChange={this.updateCharacter}
                />
                <Subheader
                    expandable={true}>
                    Attacks and Spellcasting
                </Subheader>
                {
                    [
                        this.renderAttacks()
                    ]
                }
            </SheetFragment>
        );
    }
}
