import Firebase from 'firebase';

export default class Character {
    constructor(characterId) {
        this.url = config.firebase.url;
        this.firebase = new Firebase(this.url);
        if (characterId) {
            this.characterFBRef = this.firebase.child('/characters/' + characterId);
        } else {
            this.characterFBRef = this.newCharacter();
        }
    }


    // Bind firebase character to react component
    bindFireBaseCharacter = (component) => {
        var parent = this;
        this.characterFBRef.on('value', function(snapshot) {
            parent.character = snapshot.val();
            component.setState({character: parent});
        });
    };

    unBindFireBaseCharacter = () => {
        this.characterFBRef.off();
    };


    // DML
    newCharacter = () => {
        return null;
    };

    deleteCharacter = () => {
        this.characterFBRef.delete();
    };

    updateCharacter = (path, value, callback) => {
        let updateHash = {};
        updateHash[path] = value;
        this.characterFBRef.update(updateHash);
    };

    pushCharacter = (path, value, callback) => {

    };


    // Field Getters
    // PROFILE
    characterName = () => {
        if (this.character) {
            return this.character.characterName;
        }
    };

    playerName = () => {
        if (this.character) {
            return this.character.playerName;
        }
    };

    characterClass = () => {
        if (!this.character) { return null; }
        return this.character.characterClass;
    };

    characterRace = () => {
        if (!this.character) { return null; }
        return this.character.characterRace;
    };

    level = () => {
        if (!this.character) { return null; }
        return this.character.level;
    };

    xp = () => {
        if (!this.character) { return null; }
        return this.character.xp;
    };

    alignment = () => {
        if (!this.character) { return null; }
        return this.character.alignment;
    };

    background = () => {
        if (!this.character) { return null; }
        return this.character.background;
    };

    age = () => {
        if (!this.character) { return null; }
        return this.character.age;
    };

    height = () => {
        if (!this.character) { return null; }
        return this.character.height;
    };

    weight = () => {
        if (!this.character) { return null; }
        return this.character.weight;
    };

    eyes = () => {
        if (!this.character) { return null; }
        return this.character.eyes;
    };

    skin = () => {
        if (!this.character) { return null; }
        return this.character.skin;
    };

    hair = () => {
        if (!this.character) { return null; }
        return this.character.hair;
    };

    backstory = () => {
        if (!this.character) { return null; }
        return this.character.backstory;
    };

}
