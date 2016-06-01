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


    // PROFILE --------------------------------------------

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


    // ATTRIBUTES --------------------------------------------

    inspiration = () => {
        if (!this.character) { return null; }
        return this.character.inspiration;
    };

    proficiencyBonus = () => {
        if (!this.character) { return null; }
        return this.character.proficiencyBonus;
    };

    passiveWisdom = () => {
        if (!this.character) { return null; }
        return this.character.passiveWisdom;
    };

    strength = () => {
        if (!this.character) { return null; }
        return this.character.strength;
    };

    dexterity = () => {
        if (!this.character) { return null; }
        return this.character.dexterity;
    };

    constitution = () => {
        if (!this.character) { return null; }
        return this.character.constitution;
    };

    intelligence = () => {
        if (!this.character) { return null; }
        return this.character.intelligence;
    };

    wisdom = () => {
        if (!this.character) { return null; }
        return this.character.wisdom;
    };

    charisma = () => {
        if (!this.character) { return null; }
        return this.character.charisma;
    };

    abilityModifier = (abilityScore) => {
        if (!abilityScore) { return null; }
        let modifier = abilityScore - 10;
        return Math.floor(modifier / 2);
    };

    strengthModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.strength());
    } ;

    dexterityModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.dexterity());
    } ;

    constitutionModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.constitution());
    } ;

    intelligenceModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.intelligence());
    } ;

    wisdomModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.wisdom());
    } ;

    charismaModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.charisma());
    };


    skillBonus = (modifier, trained) => {
        modifier = parseInt(modifier);
        return (trained ? (modifier + parseInt(this.proficiencyBonus())) : modifier);
    };

    strengthSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.strengthModifier(), this.strengthSavingThrowTrained());
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

    acrobatics = () => {
      if (!this.character) { return null; }

    };

    animalHandling = () => {
      if (!this.character) { return null; }

    };

    arcana = () => {
      if (!this.character) { return null; }

    };

    athletics = () => {
      if (!this.character) { return null; }

    };

    deception = () => {
      if (!this.character) { return null; }

    };

    history = () => {
      if (!this.character) { return null; }

    };

    insight = () => {
      if (!this.character) { return null; }

    };

    intimidation = () => {
      if (!this.character) { return null; }

    };

    investigation = () => {
      if (!this.character) { return null; }

    };

    medicine = () => {
      if (!this.character) { return null; }

    };

    nature = () => {
      if (!this.character) { return null; }

    };

    perception = () => {
      if (!this.character) { return null; }

    };

    performance = () => {
      if (!this.character) { return null; }

    };

    persuasion = () => {
      if (!this.character) { return null; }

    };

    religion = () => {
      if (!this.character) { return null; }

    };

    sleightOfHand = () => {
      if (!this.character) { return null; }

    };

    stealth = () => {
      if (!this.character) { return null; }

    };

    survival = () => {
      if (!this.character) { return null; }

    };

    strengthSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.strengthSavingThrowTrained;
    };

    dexteritySavingThrowTrained = () => {
        if (!this.character) { return null; }

    };

    constitutionSavingThrowTrained = () => {
        if (!this.character) { return null; }

    };

    intelligenceSavingThrowTrained = () => {
        if (!this.character) { return null; }

    };

    wisdomSavingThrowTrained = () => {
        if (!this.character) { return null; }

    };

    charismaSavingThrowTrained = () => {
        if (!this.character) { return null; }

    };

    acrobaticsTrained = () => {
        if (!this.character) { return null; }

    };

    animalHandlingTrained = () => {
        if (!this.character) { return null; }

    };

    arcanaTrained = () => {
        if (!this.character) { return null; }

    };

    athleticsTrained = () => {
        if (!this.character) { return null; }

    };

    deceptionTrained = () => {
        if (!this.character) { return null; }

    };

    historyTrained = () => {
        if (!this.character) { return null; }

    };

    insightTrained = () => {
        if (!this.character) { return null; }

    };

    intimidationTrained = () => {
        if (!this.character) { return null; }

    };

    investigationTrained = () => {
        if (!this.character) { return null; }

    };

    medicineTrained = () => {
        if (!this.character) { return null; }

    };

    natureTrained = () => {
        if (!this.character) { return null; }

    };

    perceptionTrained = () => {
        if (!this.character) { return null; }

    };

    performanceTrained = () => {
        if (!this.character) { return null; }

    };

    persuasionTrained = () => {
        if (!this.character) { return null; }

    };

    religionTrained = () => {
        if (!this.character) { return null; }

    };

    sleightOfHandTrained = () => {
        if (!this.character) { return null; }

    };

    stealthTrained = () => {
        if (!this.character) { return null; }

    };

    survivalTrained = () => {
        if (!this.character) { return null; }

    };

    // COMBAT STATS --------------------------------------------

    // SPELLS --------------------------------------------

    // FEATURES --------------------------------------------

    // EQUIPMENT --------------------------------------------

    // ALLIES --------------------------------------------

}
