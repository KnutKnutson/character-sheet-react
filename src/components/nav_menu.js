import React from 'react';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import Delete from 'material-ui/svg-icons/action/delete';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/social/person';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Share from 'material-ui/svg-icons/social/share';

import LoginDialog from './forms/login';
import ShareCharacterDialog from './forms/share_character';
import SignupDialog from './forms/signup';

import auth from '../model/auth';

export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginOpen: false,
            signupOpen: false,
            shareCharacterOpen: false
        };
    }

    // TODO: dedup all these dialog functions

    openLoginDialog = () => {
        this.setState({
            signupOpen: false,
            loginOpen: true,
            shareCharacterOpen: false
        });
    };

    closeLoginDialog = () => {
        this.setState({loginOpen: false});
    };

    openSignupDialog = () => {
        this.setState({
            loginOpen: false,
            signupOpen: true,
            shareCharacterOpen: false
        });
    };

    openShareCharacterDialog = () => {
        this.setState({
            loginOpen: false,
            signupOpen: false,
            shareCharacterOpen: true
        });
    };

    closeSignupDialog = () => {
        this.setState({signupOpen: false});
    };

    closeShareCharacterDialog = () => {
        this.setState({shareCharacterOpen: false});
    };

    logout = () => {
        auth.logout();
    };

    renderCharacterOptions = () => {
        return (
            <div>
                <Divider />
                <MenuItem key="new" primaryText="New" leftIcon={<ContentAddCircle />} onTouchTap={this.props.newCharacterCallback} />
                {(this.props.characterId) ?
                    [
                        <MenuItem key="share" primaryText="Share" leftIcon={<Share />} onTouchTap={this.openShareCharacterDialog} />,
                        <MenuItem key="delete" primaryText="Delete" leftIcon={<Delete />} />
                    ] : null
                }
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
                        ? <MenuItem key="logout" primaryText="Logout" leftIcon={<ExitToApp />} onTouchTap={this.logout} />
                        : <MenuItem key="login" primaryText="Login" leftIcon={<Person />} onTouchTap={this.openLoginDialog} />}
                    <MenuItem key="signup" primaryText="Sign Up" leftIcon={<PersonAdd />} onTouchTap={this.openSignupDialog} />
                    {(this.props.loggedIn) ? this.renderCharacterOptions() : null}
                </IconMenu>

                <LoginDialog open={this.state.loginOpen} signUp={this.openSignupDialog} buttonCallback={this.closeLoginDialog} />
                <SignupDialog open={this.state.signupOpen} buttonCallback={this.closeSignupDialog} />
                <ShareCharacterDialog {...this.props} open={this.state.shareCharacterOpen} closeCallback={this.closeShareCharacterDialog} />
            </div>
        );
    }
}
