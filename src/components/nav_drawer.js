import React from 'react';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import LeftNav from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Subheader from 'material-ui/Subheader';

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
                    width={250}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})} >

                    <AppBar
                        title="Characters"
                        iconElementLeft={
                            <IconButton
                                className="menu-button"
                                label="Toggle NavDrawer"
                                onTouchTap={this.handleToggle} >

                                <Menu />
                            </IconButton>}
                        />

                    <List>
                        <Subheader>My Characters</Subheader>
                        <div>
                            <ListItem onTouchTap="" primaryText="Sent mail"  />
                            <ListItem onTouchTap="" primaryText="Drafts"  />
                        </div>

                        <Divider />

                        <Subheader>Allies</Subheader>
                    </List>
                </LeftNav>
            </div>
        );
    }
}
