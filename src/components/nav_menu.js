import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';
import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import ContentLink from 'material-ui/lib/svg-icons/content/link';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Download from 'material-ui/lib/svg-icons/file/file-download';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

import LoginDialog from './forms/login';
import SignupDialog from './forms/signup';

export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginOpen: false,
            signupOpen: false
        };
    }

    updateField = (fieldName, value) => {
        let stateChange = {};
        stateChange[fieldName] = value;
        this.setState(stateChange);
    };

    openLoginDialog = () => {
        this.setState({loginOpen: true});
    };

    closeLoginDialog = () => {
        this.setState({loginOpen: false});
    };

    openSignupDialog = () => {
        this.setState({signupOpen: true});
    };

    closeSignupDialog = () => {
        this.setState({signupOpen: false});
    };

    render() {
        return (
            <div>
                <IconMenu {...this.props}
                    iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    {(true)
                        ? <MenuItem primaryText="Login" leftIcon={<RemoveRedEye />} onTouchTap={this.openLoginDialog} />
                        : <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />}
                    <MenuItem primaryText="Signup" leftIcon={<PersonAdd />} onTouchTap={this.openSignupDialog} />
                    <Divider />
                    <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="Delete" leftIcon={<Delete />} />
                </IconMenu>

                <LoginDialog open={this.state.loginOpen} buttonCallback={this.closeLoginDialog} />
                <SignupDialog open={this.state.signupOpen} buttonCallback={this.closeSignupDialog} />
            </div>
        );
    }
}
