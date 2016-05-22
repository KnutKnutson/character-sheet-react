import React from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

import Form from './form';
import auth from '../../model/auth';

class LoginDialog extends Form {
    constructor(props) {
        super(props);
        this.state = {errorMessage: null };
    }

    login = () => {
        this.setState({errorMessage: null});
        auth.login(this.state.email, this.state.password, this.loginCallback);
        //this.props.buttonCallback();
    };

    loginCallback = (error, userData) => {
        if (error) {
            console.log(error);
            this.setState({errorMessage: error});
        } else {
            //console.log(userData);
            this.props.buttonCallback();
        }
    };

    signUp = () => {
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
                onTouchTap={this.props.buttonCallback}
            />,
            <RaisedButton
                label="Submit"
                secondary={true}
                disabled={false}
                onTouchTap={this.login}
            />
        ];

        return (
            <Dialog
                className="text-center"
                title="Login"
                actions={actions}
                modal={true}
                open={this.props.open}
                autoScrollBodyContent={true}
                onRequestClose={this.props.buttonCallback} >
                <Paper zDepth={2} className="alert">
                    {this.state.errorMessage ? this.state.errorMessage.message : null}
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
