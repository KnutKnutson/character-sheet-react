import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import NavDrawer from './nav_drawer';
import NavMenu from './nav_menu';


export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppBar
                title="Character Sheet"
                iconElementLeft={
                    <NavDrawer {...this.props} />
                }
                iconElementRight={
                    <NavMenu {...this.props} />
                }
            />
        );
    }
}
