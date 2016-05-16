import React from 'react';
import Firebase from 'firebase';

import TextField from 'material-ui/lib/text-field';

export default class AttributeTextField extends React.Component {
    constructor(props) {
        super(props);
    }

    getWidth = () => {
        switch (this.props.width) {
            case 'one-third':
                return '80px';
            case 'one-half':
                return '124px';
            case 'two-third':
                return '168px';
            default:
                return '256px';
        }
    };

    render() {
        return (
            <TextField
                {...this.props}
                name={this.props.name}
                style={{
                    width: this.getWidth(),
                    marginRight: '8px'
                }}
                floatingLabelText={this.props.floatingLabelText}
                value={this.props.value}
            />
        );
    }
}
