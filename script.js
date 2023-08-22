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

// if (healthPoints < 0){
//     healthPoints = 0;
// } if (attackPoints < 0){
//     attackPoints = 0;
// }

// health();
// if (healthPoints <= 0){
//     healthPoints = 0;
// } $(".hp-text").text(arcaneDamage+ 0 + "HP")

// function fungus(){
// if (healthPoints < 1){
//     healthPoints = 0;
// } $(".hp-text").text( 0 + "HP")
// $('.freaky-fungus walk').addClass('.freaky-fungus.dead');

// };
// fungus();

let healthPoints = 100;
let attackPoints = 100;

function onReady() {
console.log("in on ready!");

$("#arcane").on("click", arcaneScepter);
$("#entangleId").on("click", entangleBtn);
$("#dragonBladeBtn").on("click", dragonBladeBtn);
$("#starFireBtn").on("click", starFireBtn);
} //end of onReady
// -------------------------------------------------------

// let arcaneDamage = 14;

// let attempt = healthPoints -= arcaneDamage;

// let runAttack = healthPoints -= arcaneDamage;

// if (healthPoints >= arcaneDamage){
//     healthPoints -= arcaneDamage
//     console.log('this is the health points', healthPoints)
//     $(".hp-text").text(healthPoints + "HP");
// }else if (healthPoints === 0){
//     // healthPoints = 0;
//     $('.freaky-fungus walk').addClass('.freaky-fungus.dead');
// }

//let mushHealth = healthPoints
// if healthpoints are more than or equal to arcaneDamage{then } run attack (healthpoints -= arcaneDamage) if (healthpoints <= 0){
// $('.freaky-fungus walk').removeClass('.freaky-fungus.dead');
//('.freaky-fungus.dead');
//}
//}

// if (healthPoints >= arcaneDamage){
//   runAttack;
//     console.log('this is the health points', healthPoints)
//     $(".hp-text").text(healthPoints + "HP");
// }else if (healthPoints === 0){
//     // healthPoints = 0;
//     $('.freaky-fungus walk').addClass('.freaky-fungus.dead');
// $('.freaky-fungus').removeClass('walk').addClass('dead');
// // }

// function arcaneScepter() {
//     console.log("user used ARCANE SCEPTER!");
//     let healthPoints= 100;
//     let arcaneDamage = 14;

// if (healthPoints => arcaneDamage){
//     healthPoints -= arcaneDamage;
// } else if (healthPoints === 0){
//     $('.freaky-fungus').removeClass('walk').addClass('dead');
// };

// $(".hp-text").text(healthPoints + "HP");
// $("#hp-meter").attr("value", healthPoints);

// $(".ap-text").text(attackPoints + "AP");
// $("#ap-meter").attr("value", attackPoints);

// $(".hp-text").text(arcaneDamage + "HP");
// $("#hp-meter").attr("value", arcaneDamage);

// $(".ap-text").text(arcaneUse + "AP");
// $("#ap-meter").attr("value", arcaneDamage);
//     let arcaneDamage = (healthPoints -= 14);

// console.log(arcaneDamage);

// let arcaneUse = 12;

// let arcaneUse = (attackPoints -= 12);

// if (attackPoints > arcaneUse){
//     attackPoints -= arcaneUse
// } else {
//     attackPoints = 0;
// }
// console.log(arcaneUse);
// $(".ap-text").text(arcaneUse + "AP");
// $("#ap-meter").attr("value", arcaneDamage);
// // // energy();

// if (healthPoints === 0){
//     $('.freaky-fungus walk').removeClass('.freaky-fungus.dead');
// };

function arcaneScepter() {
console.log("user used ARCANE SCEPTER!");

const arcaneDamage = 14;
const arcaneUse = 12;

if (healthPoints >= arcaneDamage && attackPoints >= arcaneUse) {
    healthPoints -= arcaneDamage;
    attackPoints -= arcaneUse;
} else {
    if (healthPoints < arcaneDamage) {
    healthPoints = 0;
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    }
    if (attackPoints < arcaneUse) {
    attackPoints = 0;
    $(".attack-btn").prop("disabled", attackPoints === 0);
    $(".freaky-fungus").removeClass("walk").addClass("jump");

    }
    
}

$(".hp-text").text(healthPoints + "HP");
$("#hp-meter").attr("value", healthPoints);

$(".ap-text").text(attackPoints + "AP");
$("#ap-meter").attr("value", attackPoints);
} //end of arcaneScepter
// -------------------------------------------------------
function entangleBtn() {
console.log("user used ENTANGLE!");

const entangleDamage = 9;
const entangleUse = 23;

if (healthPoints >= entangleDamage && attackPoints >= entangleUse) {
    healthPoints -= entangleDamage;
    attackPoints -= entangleUse;
} else {
    if (healthPoints < entangleDamage) {
    healthPoints = 0;
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    }
    if (attackPoints < entangleUse) {
    attackPoints = 0;
    $(".attack-btn").prop("disabled", attackPoints === 0);
    $(".freaky-fungus").removeClass("walk").addClass("jump");
    }
}

$(".hp-text").text(healthPoints + "HP");
$("#hp-meter").attr("value", healthPoints);

$(".ap-text").text(attackPoints + "AP");
$("#ap-meter").attr("value", attackPoints);
}

// let entangleDamage = (healthPoints -= 9);
// $(".hp-text").text(entangleDamage + "HP");
// $("#hp-meter").attr("value", entangleDamage);

// let entangleUse = (attackPoints -= 23);
// $(".ap-text").text(entangleUse + "AP");
// $("#ap-meter").attr("value", entangleUse);
// } //end of entangleBtn

function dragonBladeBtn() {
console.log("user used DRAGON BLADE!");

const dragonDamage = 47;
const dragonBladeUse = 38;

if (healthPoints >= dragonDamage && attackPoints >= dragonBladeUse) {
    healthPoints -= dragonDamage;
    attackPoints -= dragonBladeUse;
} else {
    if (healthPoints < dragonDamage) {
    healthPoints = 0;
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    }
    if (attackPoints < dragonBladeUse) {
    attackPoints = 0;
    $(".attack-btn").prop("disabled", attackPoints === 0);
    $(".freaky-fungus").removeClass("walk").addClass("jump");
    }
}

$(".hp-text").text(healthPoints + "HP");
$("#hp-meter").attr("value", healthPoints);

$(".ap-text").text(attackPoints + "AP");
$("#ap-meter").attr("value", attackPoints);
}

// let dragonDamage = (healthPoints -= 9);
// $(".hp-text").text(dragonDamage + "HP");
// $("#hp-meter").attr("value", dragonDamage);

// let dragonBladeUse = (attackPoints -= 23);
// $(".ap-text").text(dragonBladeUse + "AP");
// $("#ap-meter").attr("value", dragonBladeUse);
// } //end of dragonBladeBtn

function starFireBtn() {
console.log("user used STAR FIRE!");

const starDamage = 25;
const starFireUse = 33;

if (healthPoints >= starDamage && attackPoints >= starFireUse) {
    healthPoints -= starDamage;
    attackPoints -= starFireUse;
} else {
    if (healthPoints < starDamage) {
    healthPoints = 0;
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    }
    if (attackPoints < starFireUse) {
    attackPoints = 0;
    $(".attack-btn").prop("disabled", attackPoints === 0);
    $(".freaky-fungus").removeClass("walk").addClass("jump");
    }
}

$(".hp-text").text(healthPoints + "HP");
$("#hp-meter").attr("value", healthPoints);

$(".ap-text").text(attackPoints + "AP");
$("#ap-meter").attr("value", attackPoints);
}
// let starDamage = (healthPoints -= 9);
// $(".hp-text").text(starDamage + "HP");
// $("#hp-meter").attr("value", starDamage);

// let starFireUse = (attackPoints -= 23);
// $(".ap-text").text(starFireUse + "AP");
// $("#ap-meter").attr("value", starFireUse);
// } //end of starFireBtn}}}
