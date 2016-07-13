import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ShareCharacterDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            emailArray: ""
        };
    }

    share = () => {
        this.props.userCharacters.updateUserCharacterShares(this.emailArray(), this.props.characterId);
        this.props.closeCallback();
    };

    onChange = (e, text, callback) => {
        let fieldName = e.currentTarget.name;
        let fieldValue = e.target.value;
        let stateChange = {};
        stateChange[fieldName] = fieldValue;
        this.setState(stateChange, callback);
    };

    emailArray = () => {
        return this.state.emailArray.split(' ');
    };

    formatEmails = () => {
        return this.emailArray().join('\n');
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
                label="Submit"
                secondary={true}
                disabled={false}
                onTouchTap={this.share}
            />
        ];

        return (
            <Dialog
                title="Share Character"
                actions={actions}
                modal={false}
                open={this.props.open}
                autoScrollBodyContent={false}
                autoDetectWindowHeight={false}
                contentStyle={{width: '310px' }}
                onRequestClose={this.props.closeCallback} >
                <p> Enter emails separated by a space. </p>
                <TextField
                    name="emailArray"
                    floatingLabelText="Emails"
                    floatingLabelFixed={true}
                    multiLine={true}
                    hintText={'email1@example.com' + '\n' + 'email2@example.com'}
                    rows={4}
                    value={this.formatEmails()}
                    onChange={this.onChange}
                /><br/>
            </Dialog>
        );
    }
}
