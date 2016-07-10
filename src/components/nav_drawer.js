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
        this.state = {open: this.props.openNavDrawer};
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.open) {
            if (!nextProps.openNavDrawer) { this.handleToggle(); }
        } else {
            if (nextProps.openNavDrawer) { this.handleToggle(); }
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    userCharacters = () => {
        if (this.props.userCharacters && this.props.userCharacters.userCharacterSummary) {
            return this.props.userCharacters.userCharacterSummary;
        } else {
            return [];
        }
    };

    sharedCharacters = () => {
        return [];
    };

    renderUserCharacters = () => {
        let parent = this;
        return this.userCharacters().map( function(character) {
            return( <CharacterListItem
                {...parent.props}
                key={character.uid}
                characterId={character.uid} />);
        })
    };

    renderSharedCharacters = () => {
        let parent = this;
        return this.sharedCharacters().map(function(character) {
            return( <CharacterListItem
                {...parent.props}
                key={character.uid}
                characterId={character} />);
        })
    };

    render() {
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
                        {this.renderUserCharacters()}

                        <Divider />

                        <Subheader>Allies</Subheader>
                        {this.renderSharedCharacters()}
                    </List>
                </LeftNav>
            </div>
        );
    }
}
