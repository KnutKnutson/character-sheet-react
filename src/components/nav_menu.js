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

import LoginDialog from './login';

export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loginOpen: false };
    }

    updateField = (fieldName, value) => {
        let stateChange = {};
        stateChange[fieldName] = value;
        this.setState(stateChange);
    };

    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

                    <MenuItem
                        primaryText="Preview"
                        leftIcon={<RemoveRedEye />}
                        onTouchTap={this.updateField('loginOpen', true)} >
                    </MenuItem>
                    <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="Download" leftIcon={<Download />} />
                    <Divider />
                    <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="Remove" leftIcon={<Delete />} />
                </IconMenu>

                <LoginDialog
                    open={this.state.loginOpen}
                    handleCancel={this.updateField('loginOpen', false)}
                    handleSubmit={this.updateField('loginOpen', false)}
                    />
            </div>
        );
    }
}
