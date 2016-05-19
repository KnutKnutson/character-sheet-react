import React from 'react';

import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Tab from 'material-ui/lib/tabs/tab';
import Tabs from 'material-ui/lib/tabs/tabs';

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton
                    className="menu-button"
                    label="Toggle NavDrawer"
                    onTouchTap={this.handleToggle} >

                    <Menu />
                </IconButton>

                <LeftNav
                    className="navigation-drawer"
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})} >

                    <Tabs>
                        <Tab label="My Sheets" >
                            <MenuItem
                                onTouchTap={this.handleClose} >

                                Menu Item
                            </MenuItem>

                            <MenuItem
                                onTouchTap={this.handleClose} >

                                Menu Item 2
                            </MenuItem>
                        </Tab>

                        <Tab label="Friend's Sheets" >
                            <MenuItem
                                onTouchTap={this.handleClose} >

                                Menu Item
                            </MenuItem>
                        </Tab>
                    </Tabs>
                </LeftNav>
            </div>
        );
    }
}
