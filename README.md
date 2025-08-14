# Digital Pet OOP Project 🐾

A beginner-friendly Vanilla JavaScript project that demonstrates Object-Oriented Programming (OOP) concepts through an interactive digital pet game.

## 🎯 Learning Objectives

This project teaches:
- **Classes and Objects**: Creating classes with properties and methods
- **Encapsulation**: Using private variables and getter methods
- **Inheritance**: Extending classes to create specialized versions
- **DOM Manipulation**: Updating HTML elements based on object state
- **Event Handling**: Responding to user interactions

## 🚀 How to Run

1. Simply open `index.html` in your web browser
2. No server setup required - it's pure HTML, CSS, and JavaScript!

## 🏗️ Project Structure

- `index.html` - Main HTML layout with pet display and controls
- `style.css` - Styling and animations
- `script.js` - All OOP logic and game functionality

## 🐱 How It Works

The project features a digital pet with three main stats:
- **Hunger**: Increases over time, decreases when fed
- **Happiness**: Increases when playing, decreases when hungry
- **Energy**: Decreases when playing, increases when resting

### Classes Explained

#### 1. Pet Class (Base Class)
- **Properties**: hunger, happiness, energy, name, type
- **Methods**: feed(), play(), rest(), updateMood(), needsAttention()
- **Encapsulation**: Private properties accessed through getter methods

#### 2. SpecialPet Class (Inherited Class)
- **Inherits from**: Pet class
- **Additional**: specialAbility property and useSpecialAbility() method
- **Demonstrates**: Inheritance and method overriding

#### 3. GameController Class
- **Manages**: Game state and DOM updates
- **Handles**: User interactions and display updates
- **Connects**: OOP logic with user interface

## 🎮 User Interactions

- **Feed Button**: Reduces hunger, increases energy
- **Play Button**: Increases happiness, decreases energy, increases hunger
- **Rest Button**: Increases energy, slightly increases hunger

## 🔧 Customization Ideas for Students

Try modifying the code to:
1. **Add new pet types** with different behaviors
2. **Create new actions** like "train" or "groom"
3. **Add more stats** like "health" or "intelligence"
4. **Implement pet evolution** based on care level
5. **Add sound effects** or more animations
6. **Create multiple pets** to manage

## 💡 OOP Concepts Demonstrated

- **Classes**: Blueprint for creating objects
- **Objects**: Instances of classes with their own data
- **Properties**: Data stored in objects
- **Methods**: Functions that operate on object data
- **Encapsulation**: Hiding internal data, providing controlled access
- **Inheritance**: Creating new classes based on existing ones
- **Polymorphism**: Different objects responding to the same method calls

## 🎨 CSS Features

- Responsive design that works on mobile and desktop
- Smooth animations and transitions
- Progress bars that update dynamically
- Hover effects and visual feedback

## 🐛 Troubleshooting

If something isn't working:
1. Check the browser console for error messages
2. Make sure all three files are in the same folder
3. Try refreshing the page
4. Check that JavaScript is enabled in your browser

## 📚 Next Steps

After understanding this project, try:
- Building a more complex game
- Creating a pet breeding system
- Adding save/load functionality with localStorage
- Implementing a scoring system
- Creating a pet shop with different pet types

Happy coding! 🎉
