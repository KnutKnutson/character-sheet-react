import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Body from './components/body';
import customTheme from './theme';
import auth from './model/auth';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            user: {}
        };
    }

    componentWillMount() {
        auth.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={customTheme}>
                <Body
                    loggedIn={this.state.loggedIn}
                    {...this.props}
                />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
