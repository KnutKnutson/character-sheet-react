import React from 'react';

import Header from './navigation.js';
import Sheet from './sheet';

import UserCharacters from '../model/user_characters';

class Body extends React.Component {
    constructor(props) {
        super(props);
        let user = this.props.user;
        let userId = null;
        if (user) {
            userId = user.uid;
        }
        this.state = {
            userCharacters: new UserCharacters(userId)
        };
    }

    componentWillMount() {
    }
    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user && nextProps.user) {
            if (this.props.user.uid !== nextProps.user.uid) {
                let nextUserCharacters = new UserCharacters(nextProps.user.uid);
                this.state.userCharacters.unBindUserCharacters();
                nextUserCharacters.bindUserCharacters(this);
            }
        }
    }

    onSetOpen(open) {
    }

    mediaQueryChanged() {
    }

    render() {
        return (
            <div>
                <Header {...this.props} userCharacters={this.state.userCharacters} />
                {
                    this.props.loggedIn ? <Sheet {...this.props} characterId={1} /> : null
                }
            </div>
        );
    }
}

export default Body
