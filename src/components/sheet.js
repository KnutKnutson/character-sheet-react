import React from 'react';
import Paper from 'material-ui/lib/paper';

import Profile from './sheet/profile';

export default class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Paper
                className="sheet-paper"
                zDepth={1}>
                <Profile />
            </Paper>
        );
    }
}
