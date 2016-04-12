import React from 'react';

import TextField from 'material-ui/lib/text-field';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextField
                floatingLabelText="Name"
                />
        );
    }
}
