import React from 'react';

import Header from './navigation.js';
import Sheet from './sheet';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, docked: mql.matches});
    }
    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetOpen(open) {
        this.setState({open: open});
    }

    mediaQueryChanged() {
        this.setState({docked: this.state.mql.matches});
    }

    render() {
        return (
            <div>
                <Header loggedIn={this.props.loggedIn} {...this.props} />
                {
                    this.props.loggedIn ? <Sheet characterId={1} {...this.props} /> : null
                }
            </div>
        );
    }
}

export default Body
