import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import NavDrawer from './nav_drawer';

var Header = React.createClass({
    render: function() {
        return (
            <AppBar
                title="Character Sheet"
                iconElementLeft={<NavDrawer />}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

                        <MenuItem primaryText="Sign In" />
                        <MenuItem primaryText="New" />
                    </IconMenu>
                }
            />
        );
    }
});

export default Header;
