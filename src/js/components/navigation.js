import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

var Header = React.createClass({
    render: function() {
        return (
            <AppBar
                title="Character Sheet"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
});

export default Header;
