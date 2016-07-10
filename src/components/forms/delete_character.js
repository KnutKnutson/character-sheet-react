import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class DeleteCharacterDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    delete = () => {
        this.props.deleteCharacterCallback();
        this.props.closeCallback();
    };

    render() {
        const actions = [
            <RaisedButton
                label="Cancel"
                default={true}
                onTouchTap={this.props.closeCallback}
            />,
            <RaisedButton
                type="submit"
                label="Delete"
                secondary={true}
                disabled={false}
                onTouchTap={this.delete}
            />
        ];

        return (
            <Dialog
                title="Delete Character"
                actions={actions}
                modal={false}
                open={this.props.open}
                autoScrollBodyContent={true}
                onRequestClose={this.props.closeCallback} >
                Permanently delete character?
            </Dialog>
        );
    }
}
