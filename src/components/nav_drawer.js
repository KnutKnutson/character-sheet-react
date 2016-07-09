import React from 'react';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import LeftNav from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Subheader from 'material-ui/Subheader';

import CharacterListItem from './character_list_item';

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    userCharacters = () => {
        if (this.props.userCharacters && this.props.userCharacters.userCharactersData) {
            return this.props.userCharacters.userCharactersData;
        } else {
            return [];
        }
    };

    sharedCharacters = () => {
        return [];
    };

    render() {
        let userCharacters = this.userCharacters();
        let sharedCharacters = this.sharedCharacters();
        return (
            <div>
                <IconButton
                    className="menu-button"
                    label="Toggle NavDrawer"
                    onTouchTap={this.handleToggle} >

                    <Menu />
                </IconButton>

                <LeftNav
                    className="navigation-drawer"
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})} >

                    <AppBar
                        title="Characters"
                        iconElementLeft={
                            <IconButton
                                className="menu-button"
                                label="Toggle NavDrawer"
                                onTouchTap={this.handleToggle} >

                                <Menu />
                            </IconButton>}
                        />

                    <List>
                        <Subheader>My Characters</Subheader>
                        {[].map( function(character) {
                            return( <CharacterListItem
                                {...this.props}
                                key={character.uid}
                                character={character} />);
                        })}

                        <Divider />

                        <Subheader>Allies</Subheader>
                        {[].map(function(character) {
                            return( <CharacterListItem
                                {...this.props}
                                key={character.uid}
                                character={character} />);
                        })}
                    </List>
                </LeftNav>
            </div>
        );
    }
}
