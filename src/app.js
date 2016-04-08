import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/navigation.js';
import LeftNavSimpleExample from './components/nav_drawer';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
    <div>
        <Header />
    </div> ,
    document.getElementById('app')
);
