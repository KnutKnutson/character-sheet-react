import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class Sheet extends React.Component {

    render() {
        return (
            <Paper
                className="sheet-paper"
                zDepth={1}>

            </Paper>
        );
    }
}
