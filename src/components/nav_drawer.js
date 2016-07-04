import React from 'react';

import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import LeftNav from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    fabStyle = () => {
      return {
          float: 'right',
          marginRight: '1em',
          marginTop: '1.75em'
      }
    };

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
                        <FloatingActionButton
                            onTouchEnd=""
                            disabled={!this.props.loggedIn}
                            mini={true}
                            secondary={true}
                            style={this.fabStyle()}>

                            <ContentAdd />
                        </FloatingActionButton>
                        <Subheader>My Characters</Subheader>
                        <ListItem onTouchTap="" primaryText="Sent mail"  />
                        <ListItem onTouchTap="" primaryText="Drafts"  />

                        <FloatingActionButton
                            disabled={!this.props.loggedIn}
                            onTouchEnd=""
                            mini={true}
                            secondary={true}
                            style={this.fabStyle()}>

                            <ContentAdd />
                        </FloatingActionButton>
                        <Subheader>Allies</Subheader>
                    </List>
                </LeftNav>
            </div>
        );
    }
}
