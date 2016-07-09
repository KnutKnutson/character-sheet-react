import React from 'react';
import Firebase from 'firebase';
import Masonry from 'react-masonry-component';

import Paper from 'material-ui/Paper';

import Attributes from './sheet/attributes';
import Character from '../model/character';
import CombatStats from './sheet/combat_stats';
import Profile from './sheet/profile';

export default class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: new Character(this.props.characterId),
            resizeMasonry: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.characterId !== nextProps.characterId) {
            let nextCharacter = new Character(nextProps.characterId);
            this.state.character.unBindFireBaseCharacter();
            nextCharacter.bindFireBaseCharacter(this);
        }
    }

    componentWillMount() {
        this.state.character.bindFireBaseCharacter(this);
    }

    componentWillUnmount() {
        this.state.character.unBindFireBaseCharacter();
    }

    resizeMasonry = () => {
        this.setState({resizeMasonry: !this.state.resizeMasonry});
    };

    updateCharacterValueCallback = (path, value) => {
        this.state.character.updateCharacter(path, value);
    };

    render() {
        return (
            <div className="sheet-masonry-wrap">
                <Masonry
                    className="masonry"
                    resizeLayout={this.state.resizeMasonry} >
                    <Profile
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                    />
                    <Attributes
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                        onNestedListToggle={this.resizeMasonry}
                    />
                    <CombatStats
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                    />
                    <Profile
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                    />
                    <Profile
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                    />
                    <Profile
                        character={this.state.character}
                        onCharacterValueUpdate={this.updateCharacterValueCallback}
                        onExpandChange={this.resizeMasonry}
                    />
                </Masonry>
            </div>
        );
    }
}
