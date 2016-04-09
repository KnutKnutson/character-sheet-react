import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';

import Header from './navigation.js';
import Sheet from './sheet';

import CustomTheme from '../theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(CustomTheme))
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Lifecycle methods
    getInitialState() {
        return {};
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
                <Header />
                <Sheet />
            </div>
        );
    }
}

export default Body
