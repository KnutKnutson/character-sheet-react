import React from 'react';
import Firebase from 'firebase';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import CardActions from 'material-ui/card/card-actions';
//import CardHeader from 'material-ui/card/card-header';
//import CardMedia from 'material-ui/card/card-media';
//import CardTitle from 'material-ui/card/card-title';
import FlatButton from 'material-ui/FlatButton';
//import CardText from 'material-ui/card/card-text';

export default class SheetFragment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        //<Card
        //    className="sheet-fragment"
        //    initiallyExpanded={this.props.initiallyExpanded}
        //>
        //    <CardHeader
        //        title={this.props.title}
        //        actAsExpander={true}
        //        showExpandableButton={true}
        //    />
        //    {this.props.children}
        //
        //</Card>
        return (
            <Card
                className="sheet-fragment"
                initiallyExpanded={true}
            >
                {this.props.children}

            </Card>
        );
    }
}
