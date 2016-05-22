import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Body from './components/body';

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
            loggedIn: false
        };
    }

    componentWillMount() {
        auth.bind(this);
    }

    render() {
        return (
          <Body
              loggedIn={this.state.loggedIn}
              {...this.props}
          />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
