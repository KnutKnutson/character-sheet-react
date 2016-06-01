import React from 'react';
import Firebase from 'firebase';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import AttributeTextField from './attribute_text_field';
import SheetFragment from './sheet_fragment';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
    }

    updateCharacter = (e, text, callback) => {
        let fieldName = e.currentTarget.name;
        let fieldValue = e.target.value == 'on';
        console.log(fieldName + ' : ' + e.target.value + ' : ' + fieldValue + ' : ' + text);
        this.props.onCharacterValueUpdate(fieldName, fieldValue);
    };

    setTrained = (e, isTrained) => {
        let fieldName = e.currentTarget.name;
        this.props.onCharacterValueUpdate(fieldName, isTrained);
    };

    getLabel = () => {
        let label = this.props.label;
        if (this.props.abilityScore) {
            label += ' (' + this.props.abilityScore + ')';
        }
        return label;
    };

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.trained}
                    name={this.props.name}
                    onCheck={this.setTrained}
                    label={this.getLabel()}
                    style={{
                        width: '230px',
                        display: 'inline-block'
                    }}
                />

                <Paper
                    circle={true}
                    zDepth={1}
                    style={{
                    width: '1.5em',
                    height: '1.5em',
                    position: 'relative',
                    top: '-.5em',
                    textAlign: 'center',
                    display: 'inline-block',
                    paddingTop: '2px'
                }}
                >
                    {this.props.bonus}
                </Paper>
            </div>
        );
    }
}
