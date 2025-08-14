// Digital Pet OOP Project
// This demonstrates basic Object-Oriented Programming concepts

// Base Pet class - demonstrates encapsulation and basic methods
function Pet(name, type) {
    // Private properties (encapsulation)
    var _hunger = 50;
    var _happiness = 50;
    var _energy = 50;
    var _name = name;
    var _type = type;
    
    // Getter methods to access private properties
    this.getHunger = function() {
        return _hunger;
    };
    
    this.getHappiness = function() {
        return _happiness;
    };
    
    this.getEnergy = function() {
        return _energy;
    };
    
    this.getName = function() {
        return _name;
    };
    
    this.getType = function() {
        return _type;
    };
    
    // Method to feed the pet
    this.feed = function() {
        if (_hunger > 0) {
            _hunger = Math.max(0, _hunger - 20);
            _energy = Math.min(100, _energy + 10);
            return _name + " ate some food! Energy increased.";
        } else {
            return _name + " is not hungry right now.";
        }
    };
    
    // Method to play with the pet
    this.play = function() {
        if (_energy > 10) {
            _happiness = Math.min(100, _happiness + 20);
            _energy = Math.max(0, _energy - 15);
            _hunger = Math.min(100, _hunger + 10);
            return _name + " had fun playing! Happiness increased.";
        } else {
            return _name + " is too tired to play.";
        }
    };
    
    // Method to let the pet rest
    this.rest = function() {
        if (_energy < 100) {
            _energy = Math.min(100, _energy + 25);
            _hunger = Math.min(100, _hunger + 5);
            return _name + " is resting and recovering energy.";
        } else {
            return _name + " is not tired and doesn't need to rest.";
        }
    };
    
    // Method to update pet's mood based on stats
    this.updateMood = function() {
        var average = (_happiness + (100 - _hunger) + _energy) / 3;
        
        if (average >= 80) {
            return "Very Happy! 😄";
        } else if (average >= 60) {
            return "Happy! 😊";
        } else if (average >= 40) {
            return "Okay 😐";
        } else if (average >= 20) {
            return "Sad 😢";
        } else {
            return "Very Sad! 😭";
        }
    };
    
    // Method to check if pet needs attention
    this.needsAttention = function() {
        return _hunger > 80 || _happiness < 20 || _energy < 20;
    };
}

// SpecialPet class - demonstrates inheritance
function SpecialPet(name, type, specialAbility) {
    // Call the parent constructor (inheritance)
    Pet.call(this, name, type);
    
    // Add special property
    var _specialAbility = specialAbility;
    
    // Add special method
    this.useSpecialAbility = function() {
        if (_specialAbility === "healing") {
            this._happiness = Math.min(100, this.getHappiness() + 30);
            this._energy = Math.min(100, this.getEnergy() + 20);
            return _name + " used healing power!";
        } else if (_specialAbility === "speed") {
            this._energy = Math.min(100, this.getEnergy() + 40);
            return _name + " used speed boost!";
        } else {
            return _name + " used " + _specialAbility + "!";
        }
    };
    
    this.getSpecialAbility = function() {
        return _specialAbility;
    };
}

// Game controller class - manages the game state and DOM updates
function GameController() {
    var pet = new SpecialPet("Fluffy", "Cat", "healing");
    var messageDisplay = document.getElementById("message-display");
    
    // Method to update the display
    this.updateDisplay = function() {
        // Update progress bars
        document.getElementById("hunger-bar").style.width = pet.getHunger() + "%";
        document.getElementById("happiness-bar").style.width = pet.getHappiness() + "%";
        document.getElementById("energy-bar").style.width = pet.getEnergy() + "%";
        
        // Update values
        document.getElementById("hunger-value").textContent = pet.getHunger();
        document.getElementById("happiness-value").textContent = pet.getHappiness();
        document.getElementById("energy-value").textContent = pet.getEnergy();
        
        // Update mood
        document.getElementById("pet-mood").textContent = pet.updateMood();
        
        // Update pet image based on mood
        var petImage = document.getElementById("pet-image");
        var average = (pet.getHappiness() + (100 - pet.getHunger()) + pet.getEnergy()) / 3;
        
        if (average >= 80) {
            petImage.textContent = "😸";
        } else if (average >= 60) {
            petImage.textContent = "🐱";
        } else if (average >= 40) {
            petImage.textContent = "😿";
        } else if (average >= 20) {
            petImage.textContent = "😾";
        } else {
            petImage.textContent = "💀";
        }
        
        // Check if pet needs attention
        if (pet.needsAttention()) {
            this.showMessage("⚠️ " + pet.getName() + " needs attention!", "warning");
        }
    };
    
    // Method to show messages
    this.showMessage = function(text, type) {
        messageDisplay.textContent = text;
        messageDisplay.className = "message show";
        
        if (type === "warning") {
            messageDisplay.classList.add("warning");
        }
        
        // Clear message after 3 seconds
        setTimeout(function() {
            messageDisplay.className = "message";
            messageDisplay.textContent = "";
        }, 3000);
    };
    
    // Method to handle feed action
    this.handleFeed = function() {
        var message = pet.feed();
        this.showMessage(message, "show");
        this.updateDisplay();
    };
    
    // Method to handle play action
    this.handlePlay = function() {
        var message = pet.play();
        this.showMessage(message, "show");
        this.updateDisplay();
    };
    
    // Method to handle rest action
    this.handleRest = function() {
        var message = pet.rest();
        this.showMessage(message, "show");
        this.updateDisplay();
    };
    
    // Method to initialize the game
    this.init = function() {
        // Add event listeners to buttons
        document.getElementById("feed-btn").addEventListener("click", function() {
            game.handleFeed();
        });
        
        document.getElementById("play-btn").addEventListener("click", function() {
            game.handlePlay();
        });
        
        document.getElementById("rest-btn").addEventListener("click", function() {
            game.handleRest();
        });
        
        // Initial display update
        this.updateDisplay();
        
        // Show welcome message
        this.showMessage("Welcome! Meet " + pet.getName() + ", your " + pet.getType() + "!", "show");
    };
}

// Create and initialize the game when the page loads
var game;
document.addEventListener("DOMContentLoaded", function() {
    game = new GameController();
    game.init();
});

// Add some fun console messages for students to discover
console.log("🐾 Welcome to the Digital Pet OOP Project! 🐾");
console.log("💡 Try opening the console to see this message!");
console.log("🔍 Explore the code to understand OOP concepts!");
console.log("✨ Modify the classes to create your own pet behaviors!");
