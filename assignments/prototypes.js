/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(gameObejectAttributes){
  this.createdAt = gameObejectAttributes.createdAt;
  this.dimensions = gameObejectAttributes.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterStatsAttribute){
  this.hp = characterStatsAttribute.hp;
  this.name = characterStatsAttribute.name;
  GameObject.call(this, characterStatsAttribute);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanoidAttribute){
  this.faction = humanoidAttribute.faction;
  this.weapons = humanoidAttribute.weapons;
  this.language = humanoidAttribute.language;
  CharacterStats.call(this, humanoidAttribute);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  //stretch

  function Villian(viilianAttribute){
    this.attack = viilianAttribute.attack;
    this.health = viilianAttribute.health;
    Humanoid.call(this, viilianAttribute);
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  Villian.prototype.atk = function () {
    this.health -= 55;
    return `${this.name} uses ${this.attack} to attack the hero`;
  }

  Villian.prototype.speak = function () {
    return `${this.name} says Kaio what?`;
  }
  
  function Hero(heroAttribute){
    this.trumpCard = heroAttribute.trumpCard;
    this.attack = heroAttribute.attack;
    this.health = heroAttribute.health;
    Humanoid.call(this, heroAttribute);
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.attk = function () {
    this.health -= 30;
    return `${this.name} uses ${this.attack} to attack the villian`;
  }

  Hero.prototype.finalAtk = function () {
    this.health -= 70;
    return `${this.name} uses ${this.trumpCard} and ${this.attack} to defeat the villian`;
  }
  
  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    hp: 15,
    name: 'Vegeta',
    faction: 'Saiyan Royalty',
    weapons: [
      'None'
      ],
    language: 'Common Toungue',
    attack: 'Galick Gun',
    health: 100,
  });


  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 5,
    },
    hp: 15,
    name: 'Goku',
    faction: 'Saiyan of Earth',
    weapons: [
      'None'
      ],
    language: 'Common Toungue',
    attack: 'kamehameha',
    trumpCard: 'kaioken x4',
    health: 100,
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  console.log(`${villian.name} and ${hero.name} join the fight`);
  console.log(villian.atk());
  console.log(`${hero.name} has been damaged, ${hero.name} has ${villian.health} health`);
  console.log(hero.attk());
  console.log(`${villian.name} has been damaged, ${villian.name} has ${hero.health} health`);
  console.log(hero.finalAtk());
  console.log(`${villian.name} has been damaged, ${villian.name} has ${hero.health} health`);
  console.log(villian.destroy());


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!