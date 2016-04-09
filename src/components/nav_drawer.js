import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';

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
                    //width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})} >

                    <MenuItem
                        onTouchTap={this.handleClose} >

                        Menu Item
                    </MenuItem>

                    <MenuItem
                        onTouchTap={this.handleClose} >

                        Menu Item 2
                    </MenuItem>
                </LeftNav>
            </div>
        );
    }
}
