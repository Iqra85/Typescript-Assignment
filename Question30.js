"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of usernames
const usernames = ['admin', 'Elsa', 'John', 'Alice', 'Bob'];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
