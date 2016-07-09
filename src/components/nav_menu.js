import React from 'react';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/social/person';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Share from 'material-ui/svg-icons/social/share';

import LoginDialog from './forms/login';
import SignupDialog from './forms/signup';

import auth from '../model/auth';

export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginOpen: false,
            signupOpen: false,
            loggedIn: this.props.loggedIn
        };
    }

    openLoginDialog = () => {
        this.setState({
            signupOpen: false,
            loginOpen: true
        });
    };

    closeLoginDialog = () => {
        this.setState({loginOpen: false});
    };

    openSignupDialog = () => {
        this.setState({
            loginOpen: false,
            signupOpen: true
        });
    };

    closeSignupDialog = () => {
        this.setState({signupOpen: false});
    };

    logout = () => {
        auth.logout();
    };

    renderCharacterOptions = () => {
        return (
            <div>
                <Divider />
                <MenuItem primaryText="Share" leftIcon={<Share />} />
                <MenuItem primaryText="Delete" leftIcon={<Delete />} />
                <MenuItem primaryText="New" leftIcon={<ContentAdd />} />
            </div>
        );
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
                    {(this.props.loggedIn)
                        ? <MenuItem primaryText="Logout" leftIcon={<ExitToApp />} onTouchTap={this.logout} />
                        : <MenuItem primaryText="Login" leftIcon={<Person />} onTouchTap={this.openLoginDialog} />}
                    <MenuItem primaryText="Signup" leftIcon={<PersonAdd />} onTouchTap={this.openSignupDialog} />
                    {(this.props.loggedIn) ? this.renderCharacterOptions() : null}
                </IconMenu>

                <LoginDialog open={this.state.loginOpen} signUp={this.openSignupDialog} buttonCallback={this.closeLoginDialog} />
                <SignupDialog open={this.state.signupOpen} buttonCallback={this.closeSignupDialog} />
            </div>
        );
    }
}
