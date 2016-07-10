import React from 'react';

import Header from './navigation.js';
import Sheet from './sheet';

import UserCharacters from '../model/user_characters';
import Character from '../model/character';

class Body extends React.Component {
    constructor(props) {
        super(props);
        let user = this.props.user;
        let userId = null;
        if (user) {
            userId = user.uid;
        }
        this.state = {
            userCharacters: new UserCharacters(userId),
            characterId: null
        };
    }

    componentWillMount() {
        this.state.userCharacters.bindUserCharacters(this);
    }
    componentWillUnmount() {
        this.state.userCharacters.unBindUserCharacters();
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

    newCharacter = () => {
        let newCharacterId = Character.newCharacter();
        this.setState({
           characterId: newCharacterId
        });
    };

    shareCharacter = (emailArray) => {
        this.state.userCharacters.updateUserCharacterShares(emailArray, this.state.characterId);
    };

    changeCharacter = (newCharacterId, event) => {
        this.setState({
            openNavDrawer: false,
            characterId: newCharacterId
        });
        this.state.userCharacters.updateUserCharacter(newCharacterId);
    };

    deleteCharacter = () => {
        // delete shares and usercharacter
        Character.deleteCharacter(this.state.characterId);
        this.userCharacters.deleteCharacter(this.state.characterId);
        this.setState({characterId: null});
    };

    render() {
        return (
            <div>
                <Header
                    {...this.props}
                    newCharacterCallback={this.newCharacter}
                    changeCharacterCallback={this.changeCharacter}
                    shareCharacterCallback={this.shareCharacter}
                    deleteCharacterCallback={this.deleteCharacter}
                    openNavDrawer={this.state.openNavDrawer}
                    userCharacters={this.state.userCharacters}
                    characterId={this.state.characterId} />
                {
                    (this.props.loggedIn && this.state.characterId) ?
                        <Sheet
                            {...this.props}
                            characterId={this.state.characterId} /> : null
                }
            </div>
        );
    }
}

export default Body
