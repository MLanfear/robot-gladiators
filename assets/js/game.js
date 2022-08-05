// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less





var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
    console.log(enemyNames.length);
    for(var i = 0; i < enemyNames.length; i++) {
        console.log(enemyNames[i]);
    }
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
         playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

    //Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log (playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
    
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    }

    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable.
    playerHealth = playerHealth - enemyAttack;
    
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      }
    
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

     // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
    // if no, ask question again

        else {
            fight();
        }
    }
}

fight();
