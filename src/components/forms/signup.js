import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';

import Auth from '../../util/auth';

class SignupDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    signup = () => {
        var auth = new Auth();
        auth.createUser();
        this.props.buttonCallback();
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
                    onRequestClose={this.props.buttonCallback} >
                <TextField
                    floatingLabelText="Username"
                /><br/>
                <TextField
                    floatingLabelText="Password"
                /><br/>
                <TextField
                    floatingLabelText="Verify Password"
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
