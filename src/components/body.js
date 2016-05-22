import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import Header from './navigation.js';
import Sheet from './sheet';

import CustomTheme from '../theme';

import Character from '../model/character';

import auth from '../model/auth';

@ThemeDecorator(ThemeManager.getMuiTheme(CustomTheme))
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
        console.log(this.props);
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
