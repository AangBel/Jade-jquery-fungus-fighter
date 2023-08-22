$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!

// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM

let healthPoints = 100;
let attackPoints = 100;


// if (healthPoints < 0){
//     healthPoints = 0;
// } if (attackPoints < 0){
//     attackPoints = 0;
// }


// health();
// if (healthPoints <= 0){
//     healthPoints = 0;
// } $(".hp-text").text(arcaneDamage+ 0 + "HP")



function fungus(){
if (healthPoints < 1){
    healthPoints = 0;
} $(".hp-text").text( 0 + "HP")
$('.freaky-fungus walk').addClass('.freaky-fungus.dead');

};
fungus();



function onReady() {
console.log("in on ready!");

$("#arcane").on("click", arcaneScepter);
$("#entangleId").on("click", entangleBtn);
$("#dragonBladeBtn").on("click", dragonBladeBtn);
$("#starFireBtn").on("click", starFireBtn);
} //end of onReady
// -------------------------------------------------------

function arcaneScepter() {
console.log("user used ARCANE SCEPTER!");


// let arcaneDamage = (healthPoints -= 14);
let arcaneDamage = 14;

// let attempt = healthPoints -= arcaneDamage;

if (healthPoints >= arcaneDamage){
    healthPoints -= arcaneDamage
} else {
    healthPoints = 0;
}
console.log(arcaneDamage);

$(".hp-text").text(arcaneDamage + "HP");
$("#hp-meter").attr("value", arcaneDamage);

let arcaneUse = 12;

// let arcaneUse = (attackPoints -= 12);

if (attackPoints >= arcaneUse){
    attackPoints -= arcaneUse
} else {
    attackPoints = 0;
}
console.log(arcaneUse);
$(".ap-text").text(arcaneUse + "AP");
$("#ap-meter").attr("value", arcaneDamage);
// energy();

} //end of arcaneScepter
// -------------------------------------------------------
function entangleBtn() {
console.log("user used ENTANGLE!");

let entangleDamage = (healthPoints -= 9);
$(".hp-text").text(entangleDamage + "HP");
$("#hp-meter").attr("value", entangleDamage);

let entangleUse = (attackPoints -= 23);
$(".ap-text").text(entangleUse + "AP");
$("#ap-meter").attr("value", entangleUse);
} //end of entangleBtn

function dragonBladeBtn() {
console.log("user used DRAGON BLADE!");

let dragonDamage = (healthPoints -= 9);
$(".hp-text").text(dragonDamage + "HP");
$("#hp-meter").attr("value", dragonDamage);

let dragonBladeUse = (attackPoints -= 23);
$(".ap-text").text(dragonBladeUse + "AP");
$("#ap-meter").attr("value", dragonBladeUse);
} //end of dragonBladeBtn

function starFireBtn() {
console.log("user used STAR FIRE!");

let starDamage = (healthPoints -= 9);
$(".hp-text").text(starDamage + "HP");
$("#hp-meter").attr("value", starDamage);

let starFireUse = (attackPoints -= 23);
$(".ap-text").text(starFireUse + "AP");
$("#ap-meter").attr("value", starFireUse);
} //end of starFireBtn

// function health(){
//     if (healthPoints <= 1){
//         healthPoints = 0;
//     }
// };

// function energy(){
//     if (attackPoints <= 1){
//     attackPoints = 0;
// }
// }

// health();



// Assign Global Variables

// HP=100

// AP=100

// When you click an attack button:

// Make Buttons Attached to Attacks

// Need to Set up Listener for all 4 attacks

// Make sure buttons dont have event default ??? event.preventDefault();

// Button handlers

// Functions should be the same except for their values (AP And HP)

// Figure out what each button does

// Data for writing functions below:

// Arcane Scepter

// - **AP Cost:** 12

// - **HP Damage:** 14

// Both of these values change when the button is run

// Entangle

// - **AP Cost:** 23

// - **HP Damage:** 9

// Both of these values change when the button is run

// Dragon Blade

// - **AP Cost:** 38

// - **HP Damage:** 47

// Both of these values change when the button is run

// Star Fire

// - **AP Cost:** 33

// - **HP Damage:** 25

// Both of these values change when the button is run

// update _state_ variable(s) to make the Freaky Fungus

// lose hit points (HP),

// and to reduce your attack points (AP).

// - AP and HP values of each attack

// - State may be held in one our more variables of your choosing: Easier to keep them seperate

// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)

//If statement outside of the other functions

// If (HP <= 0 || AP <= 0){

// Set value to 0

// make fungus dance

// }

// Make it so that AP and HP are not "Hard Coded" into the DOM

// **Render state changes to the DOM**

// - Update the text above the attack buttons (eg, "100 AP")

// - Update the text above the enemy fungus (eg, "100 HP")

// - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.

// - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.

// - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used.
