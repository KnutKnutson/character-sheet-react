import csFirebase from './firebase';

export default class Character {
    constructor(characterId) {
        this.firebase = csFirebase.app().database();
        if (characterId) {
            this.characterFBRef = this.firebase.ref('/characters/' + characterId);
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

    shareCharacter = (characterId, emailsToShareWith) => {
        for (var email of emailsToShareWith) {
            this.characterFBRef.child(email).push(characterId);
        }
    };


    // Field Getters
    userCharacters = () => {

    };

    friendCharacters = () => {

    };


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

    // ATTRIBUTES
    inspiration = () => {
        if (!this.character) { return null; }

    };

    proficiencyBonus = () => {
        if (!this.character) { return null; }

    };

    passiveWisdom = () => {
        if (!this.character) { return null; }

    };

    strength = () => {
        if (!this.character) { return null; }

    };

    dexterity = () => {
        if (!this.character) { return null; }

    };

    constitution = () => {
        if (!this.character) { return null; }

    };

    intelligence = () => {
        if (!this.character) { return null; }

    };

    wisdom = () => {
        if (!this.character) { return null; }

    };

    charisma = () => {
        if (!this.character) { return null; }

    };

    strengthModifier = () => {
        if (!this.character) { return null; }

    } ;

    dexterityModifier = () => {
        if (!this.character) { return null; }

    } ;

    constitutionModifier = () => {
        if (!this.character) { return null; }

    } ;

    intelligenceModifier = () => {
        if (!this.character) { return null; }

    } ;

    wisdomModifier = () => {
        if (!this.character) { return null; }

    } ;

    charismaModifier = () => {
        if (!this.character) { return null; }

    };

    strengthSavingThrow = () => {
        if (!this.character) { return null; }

    };

    dexteritySavingThrow = () => {
        if (!this.character) { return null; }

    };

    constitutionSavingThrow = () => {
        if (!this.character) { return null; }

    };

    intelligenceSavingThrow = () => {
        if (!this.character) { return null; }

    };

    wisdomSavingThrow = () => {
        if (!this.character) { return null; }

    };

    charismaSavingThrow = () => {
        if (!this.character) { return null; }

    };


    // COMBAT STATS

    // SPELLS

    // FEATURES

    // EQUIPMENT

    // ALLIES

}
