import React from 'react';
import Firebase from 'firebase';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

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
                {...this.props}
                className="sheet-fragment"
                actAsExpander={true}
                showExpandableButton={true}
                initiallyExpanded={true} >
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
