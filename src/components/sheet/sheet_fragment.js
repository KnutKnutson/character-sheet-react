import React from 'react';
import Firebase from 'firebase';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class SheetFragment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                className="sheet-fragment"
                initiallyExpanded={this.props.initiallyExpanded}
            >
                <CardHeader
                    title={this.props.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                {this.props.children}

            </Card>
        );
    }
}
