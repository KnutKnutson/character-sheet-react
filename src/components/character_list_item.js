import React from 'react';

import {List, ListItem} from 'material-ui/List';

export default class CharacterListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ListItem
                onTouchTap=""
                primaryText="Drafts"
            />
        );
    }
}
