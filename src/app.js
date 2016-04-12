import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Body from './components/body';

import Auth from './util/auth';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var auth = new Auth();
var authdata = auth.authenticate();
console.log(authdata);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Body
              {...this.props}
          />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
