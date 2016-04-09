import React from 'react';
import Paper from 'material-ui/lib/paper';

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

            </Paper>
        );
    }
}
