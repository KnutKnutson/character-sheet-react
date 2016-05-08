import Firebase from 'firebase';

export default class Character {
    constructor(characterId) {
        this.url = config.firebase.url + '/characters/' + characterId + '/';
        if (characterId) {
            this.character = new Firebase(this.url);
        }
        this.character = this.newCharacter();
    }

    newCharacter = () => {
        return null;
    };

    deleteCharacter = () => {
        this.character.delete();
    };

    bindFireBaseCharacter = (component) => {
        component.character = this.character;
        component.character.on('value', function(snapshot) {
            component.setState(snapshot.val());
        });
    };

    characterName = () => {
        return this.character.characterName;
    };
}
