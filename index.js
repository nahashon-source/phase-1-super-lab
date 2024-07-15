// Write your classes here
// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class that extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`; // Use super to call the parent static method
    }
  }
  
  // Define the Evergreen class that extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`; // Use super to call the parent static method
    }
  }
  
  module.exports = { Tree, Deciduous, Evergreen };
  