import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Body from './components/body';

import auth from './util/auth';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        //console.log('authdata');
        //console.log(auth.authenticate());
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
