import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Form from './form';
import auth from '../../model/auth';

class LoginDialog extends Form {
    constructor(props) {
        super(props);
    }

    login = () => {
        auth.login(this.state.email, this.state.password, this.submitCallback);
    };

    signUp = () => {
        this.handleAlertDismiss();
        this.props.signUp();
    };

    render() {
        const actions = [
            <FlatButton
                label="Sign Up"
                secondary={true}
                onTouchTap={this.signUp}
            />,
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
                onTouchTap={this.login}
            />
        ];

        return (
            <Dialog
                title="Login"
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
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    type="password"
                />
            </Dialog>
        );
    }
}

LoginDialog.propTypes = {
    open: React.PropTypes.bool.isRequired,
    buttonCallback: React.PropTypes.func.isRequired
};
LoginDialog.defaultProps = { open: false };

export default LoginDialog;
