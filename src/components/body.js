import React from 'react';

import Header from './navigation.js';
import Sheet from './sheet';

import UserCharacters from '../model/user_characters';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }
    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        //if (this.props.user.uid !== nextProps.user.uid) {
        //    let nextUserCharacters = new UserCharacters(nextProps.user.uid);
        //    this.state.character.unBindFireBaseCharacter();
        //    nextUserCharacters.bindFireBaseCharacter(this);
        //}
    }

    onSetOpen(open) {
    }

    mediaQueryChanged() {
    }

    render() {
        return (
            <div>
                <Header {...this.props} />
                {
                    this.props.loggedIn ? <Sheet {...this.props} characterId={1} /> : null
                }
            </div>
        );
    }
}

export default Body
