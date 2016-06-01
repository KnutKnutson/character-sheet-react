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

    abilityModifier = () => {
        let abilityScore = this.props.value;
        let modifier = 0;
        if (!abilityScore) { return modifier; }
        if (abilityScore) {
            modifier = abilityScore - 10;
        }
        return Math.floor(modifier / 2);
    };

    renderModifier = () => {
        if (!this.props.value) { return null; }
        return (
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
                {this.abilityModifier()}
            </Paper>
        );
    };

    render() {
        return (
            <div
                className="attribute">

                <AttributeTextField
                    width="one-fifth"
                    expandable={true}
                    name={this.props.name}
                    floatingLabelText={this.props.label}
                    value={this.props.value}
                    onChange={this.updateCharacter}
                />

                {this.renderModifier()}
            </div>
        );
    }
}
