#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to the Number Guessing Game! \ -------------------------------- \ Made by Danyal");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt(
    {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number between 1 and 10",
});

if (answer.userGuessedNumber === randomNumber) {
    console.log("You guessed it!");
} else {
    console.log("You are wrong. The number was " + randomNumber);
}