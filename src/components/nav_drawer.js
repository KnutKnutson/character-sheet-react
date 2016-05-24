import React from 'react';

import IconButton from 'material-ui/IconButton';
import LeftNav from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        let forceNavDown = {'top': '64px'}
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
                    containerStyle={forceNavDown}
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
