import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Form from './form';
import auth from '../../model/auth';

class SignupDialog extends Form {
    constructor(props) {
        super(props);
        this.state = { };
    }

    signup = () => {
        auth.createUser(this.state.email, this.state.password, this.submitCallback);
    };

    render() {
        const actions = [
            <RaisedButton
                label="Cancel"
                default={true}
                onTouchTap={this.closeCallback}
            />,
            <RaisedButton
                type="submit"
                label="Submit"
                secondary={true}
                disabled={false}
                onTouchTap={this.signup}
            />
        ];

        return (
            <Dialog className="text-center"
                    title="Signup"
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    autoScrollBodyContent={true}
                    onRequestClose={this.closeCallback} >
                <Paper zDepth={1} className={"alert " + (this.state.alertVisible ? null : "hidden")}>
                    {this.state.alertMessage}
                </Paper>
                <TextField
                    name="email"
                    floatingLabelText="Email"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                /><br/>
                <TextField
                    name="password"
                    floatingLabelText="Password"
                    type="password"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                /><br/>
                <TextField
                    name="verifyPassword"
                    floatingLabelText="Verify Password"
                    type="password"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                />
            </Dialog>
        );
    }
}

SignupDialog.propTypes = {
    open: React.PropTypes.bool.isRequired,
    buttonCallback: React.PropTypes.func.isRequired
};
SignupDialog.defaultProps = { open: false };

export default SignupDialog;
