import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';

import Form from './form';
import auth from '../../util/auth';

class SignupDialog extends Form {
    constructor(props) {
        super(props);
        this.state = { };
    }

    signup = () => {
        auth.createUser(this.state.email, this.state.password, this.signupCallback);
    };

    signupCallback = (error, userData) => {
        if (error) {
            console.log(error);
        } else {
            console.log(userData);
            this.props.buttonCallback();
        }
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.props.buttonCallback}
            />,
            <FlatButton
                label="Submit"
                primary={true}
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
                    onRequestClose={this.props.buttonCallback} >
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
