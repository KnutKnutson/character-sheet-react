import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

//import Auth from '../util/auth';

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.props.handleCancel}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.props.handleSubmit}
            />
        ];

        return (
            <Dialog
                title="Dialog With Date Picker"
                actions={actions}
                modal={true}
                open={this.props.open}
                onRequestClose={this.props.handleCancel} >

                Open a Date Picker dialog from within a dialog.
                <DatePicker hintText="Date Picker" />
            </Dialog>
        );
    }
}

LoginDialog.propTypes = {
    open: React.PropTypes.bool.isRequired,
    handleCancel: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
};
LoginDialog.defaultProps = { open: false };

export default LoginDialog;
