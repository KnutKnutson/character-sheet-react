import React from 'react';
import Firebase from 'firebase';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class AttributeTextField extends React.Component {
    constructor(props) {
        super(props);
    }

    getWidth = () => {
        switch (this.props.width) {
            case 'full-width':
                return '100%';
            case 'one-fifth':
                return '48px';
            case 'one-third':
                return '80px';
            case 'two-fifth':
                return '96px';
            case 'one-half':
                return '124px';
            case 'two-third':
                return '168px';
            default:
                return '256px';
        }
    };

    getStyle = () => {
        let style = this.props.style || {};
        style['width'] = this.getWidth();
        style['marginRight'] = '.5em';
        return style;
    };

    render() {
        return (
            <TextField
                {...this.props}
                name={this.props.name}
                style={this.getStyle()}
                floatingLabelText={this.props.floatingLabelText}
                value={this.props.value}
            />
        );
    }
}
