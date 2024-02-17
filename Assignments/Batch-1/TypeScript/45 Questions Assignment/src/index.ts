////1st
// let age: number = 20;
// if (age < 50)
// age += 10;
// console.log(age);

// //2nd - we don't have to define datatype  
// let sales = 10;
// let course = 'TypeScript';
// let is_published = true;
// let level; // try not to use 'any' type, cuz its against.. (if you wanna you, then go & "noImplicitAny": false)

////3rd  Arrays
// let numbers = [1,2,'f'];
// numbers[0] = 1;
// numbers[2] = 'f';
// numbers.forEach(n => n.); // shows intellisense

// //4 Tuples - A tuple is a Fixed Length array, where each element have a particlar Type
// let user: [number,string] = [1, 'Abrar'];              // tuples are usefull when you have only 2 values
// user.push(1);

//// Enums - using enum we can repreasent a list of related constants
// const enum Size {Small = 1, Medium, Large }     //PascalCase || use 'const' then compiler will generate more optimized code
// let mySize: Size = Size.Large
// console.log(mySize);

// //Functions
// function CalculateTax (income: number, TaxYear = 2022): number{   //can use as optional 'taxYear?' 
//     if (TaxYear < 2022)                                      
//     return income * 2;                                  //"noUnusedLocals": true,   
//     return income * 3.5;                                //"noUnusedParameters": true,
// }                                                       //"noImplicitReturns": true, 
// CalculateTax(10000); 

// ////Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

// // 1. Install Node.js, TypeScript and VS Code on your computer.

// // 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var Abrar: string = "Abrar Abbas"
// console.log(`"Hello ${Abrar}, would you like to learn some Python today?"`)


// // 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// var anyname:string = "Ariana Grande"
// console.log("LowerCase: " + anyname.toLowerCase() );
// console.log("UpperCase: " + anyname.toUpperCase());  
// console.log("TitleCase: " + anyname.charAt(0).toUpperCase()+anyname.slice(1));


// // 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// //Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// var author:string = 'Professor Ahmad Rafique Akhtar'
// var quote:string = 'Allah is the Top Priority' 
//  console.log(`${author} Always said, "${quote}"`);


// // 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//  let famous_person:string = 'Professor Ahmad Rafique Akhtar'
//  var quote:string = 'Allah is the Top Priority' 

//  let message: string = `${famous_person} Always said, ${quote}`

//  console.log(message);


// // 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// let personName: string = `\tAbrar Abbas\t`;

// console.log(`Name with Whitespace: \n "${personName}"`);

// let strippedName: string = personName.trim();

// console.log(`\nName after Stripping Whitespace: \n "${strippedName}"`);


// // 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// var WhenAddition: number = 5 + 3
// console.log(`\n__________________\n After Addition: ${WhenAddition} \n__________________\n`); 

// var WhenDivision: number = 16 / 2
// console.log(`\n__________________\n After Division: ${WhenDivision} \n__________________\n`);

// var WhenSubtraction: number = 13 - 5
// console.log(`\n______________________\n After Subtraction: ${WhenSubtraction} \n______________________\n`);

// var WhenMultiplication: number = 4 * 2
// console.log(`\n__________________________\n After Multiplication: ${WhenMultiplication} \n__________________________\n`);


// // 8. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// var favnum: number = 47
// console.log(`All the time i just use ${favnum} number, don't know Why ..`)


// // 9. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// // Answer: i'm already commenting the questions .. !


// // 10. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// var FriendsNames: string[] = ['Billy', 'Salman', 'Wahab', 'Husnain']
// for (let i = 0; i < FriendsNames.length; i++) {
//     console.log(FriendsNames[i]);
// }

// //11. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var FriendsNames: string[] = ['Billy', 'Salman', 'Wahab', 'Husnain']
// let MessageTemplate: string = "Hello, ";
// for (let i = 0; i < FriendsNames.length; i++) {
//     let message = `${MessageTemplate} ${FriendsNames[i]}`;
//     console.log(message);
// }


// // 12. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var Favmode: string[] = ["Mazda", "Ford", "Jaguar", "Caterham Seven", "Nissan", "Lexus"];
// for (let i = 0; i < Favmode.length; i++){
//     console.log(`Would love to drift on ${Favmode[i]}`)
// }


// // 13. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// var guests: string[] = ["Hamza", "Usama", "Sohail"];
// let invi: string = " you are cheerily invited to a dinner party at my place."

// for(let i=0; i < guests.length; i++){
//     let message = `Dear ${guests[i]}${invi}`;
//     console.log(message);
// }


// // 14. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// // • Print a second set of invitation messages, one for each person who is still in your list.

// var guests: string[] = ["Hamza", "Usama", "Sohail"];
// var whocant: string = guests[2];
// console.log(`${whocant} unfortunately can't make it to the dinner.`)

// let invi: string = " you are cheerily invited to a dinner party at my place."
// guests[2] = "Olivia";

// for (let i = 0; i < guests.length; i++) {
//     let message = `Dear ${guests[i]}${invi}`;
//     console.log(message);
// }


// // 15. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. 
// // • Use append() to add one new guest to the end of your list. 
// // • Print a new set of invitation messages, one for each person in your list.

// var guests: string[] = ["Hamza", "Aydin", "Usama", "Sohail"];
// var whocant: string = guests[2];
// console.log(`${whocant} unfortunately can't make it to the dinner.`)

// console.log("We found a bigger table Guyssss !");

// let invi: string = " you are cheerily invited to a dinner party at my place."
// guests[2] = "Alaura";

// guests.unshift("Abrar"); //adding to the beginning
// guests.splice(3,0, "Zakariya"); // Middle
// guests.push("Aileema"); // End

// for (let i = 0; i < guests.length; i++) {
//     let message = `Dear ${guests[i]}${invi}`;
//     console.log(message);
// }


// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// is just same as 15.


// // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person, letting them know you’re sorry you can’t invite them to dinner.

// // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// var guests: string[] = ["Hamza", "Aydin", " Usama", "Sohail"];
// let SeatsAvailable: number = 2; 

// let whocantcome: string = guests.splice (1, 1) [0];

// console.log(`Unfortunately, due to a smaller dinner table, we can invite only ${SeatsAvailable} people for dinner.`)

// while (guests.length > SeatsAvailable){
//     let removeguests = guests.pop();
//     console.log(`Sorry ${removeguests}, we won't be able to invite you to dinner.`)
// }

// for (let i = 0; i < guests.length; i++ ){
//     console.log(`Dear ${guests[i]},\n You are still invited to a dinner.`);
// }

// console.log(`Final guests List: ${guests}`);


// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// // • Store the locations in a array. Make sure the array is not in alphabetical order.

// // 1• Print your array in its original order.

// // 2• Print your array in alphabetical order without modifying the actual list.

// // 3• Show that your array is still in its original order by printing it.

// // 4• Print your array in reverse alphabetical order without changing the order of the original list.

// // 5• Show that your array is still in its original order by printing it again.

// // 6• Reverse the order of your list. Print the array to show that its order has changed.

// // 7• Reverse the order of your list again. Print the list to show it’s back to its original order.

// // 8• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// // 9• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// let Favplaces: string [] = [" Qatar ", " Spain ", " Japan ", " Lithuania ", " Singapore "]
// console.log(`1. Its Original Order:\n ${Favplaces} \n`);

// let alphaOrder = Favplaces.slice().sort() 
// console.log(`2. In Alphabetical Order:\n ${alphaOrder} \n`); //without modifying the actual list

// console.log(`3. Is still in its Original Order:\n ${Favplaces} \n`);

// let alphaReverse = Favplaces.slice().sort().reverse()
// console.log(`4. In Reverse Alphabetical Order:\n ${alphaReverse} \n`); //without modifying the actual list

// console.log(`5. Is still in its Original Order Again:\n ${Favplaces} \n`);

// Favplaces.reverse()
// console.log(`6. Reverse the order of your list:\n ${Favplaces} \n`);

// Favplaces.reverse()
// console.log(`7. Reverse the order of your list again:\n ${Favplaces} \n`); //to show it’s back to its original order

// Favplaces.sort()
// console.log(`8. Sorting "Array" in Alphabetical Order:\n ${Favplaces} \n`);

// Favplaces.sort((a,b) => b.localeCompare(a))
// console.log(`9. Sorting "Array" in Reverse Alphabetical Order:\n ${Favplaces}`)


// // 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// let guests: string[] = ["Abrar", "Hamza", " Aydin", "Zakariya", "Alaura", "Sohail", "Aileema"];
// let numberofguests: number = guests.length;
// console.log(`You are inviting ${numberofguests} people to dinner.`);


// // 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let everything: string [] = ["Arabic", "Coding", "Reggaeton", "Faisalabad"]
// console.log("My Likings are: ")
// for(let i=0; i < everything.length; i++){
// console.log(`- ${everything[i]}`)
// }


// // 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// interface Movie {
//     title: string;
//     actor: string;
//     type: string
//     year: number;
//     Released: boolean;
// }

// let favoriteMovies: Movie[] = [
//     {
//         title: "The Beekeeper",
//         actor: "Jason Statham",
//         type: "Action",
//         year: 2024,
//         Released: false,
//     },
//     {
//         title: "Dark",
//         actor: "Jonas Kahnwald",
//         type: "Mystery",
//         year: 2017,
//         Released: true,
//     },
//     {
//         title: "Knowing",
//         actor: "Nicolas Cage",
//         type: "Sci-fi/Thriller",
//         year: 2009,
//         Released: true,
//     }
// ];

// console.log("My Favorite Movies:");
// for (let i = 0; i < favoriteMovies.length; i++) {
//     let movie = favoriteMovies[i];
//     console.log(` Title: ${movie.title} \n Actor: ${movie.actor} \n Type: ${movie.type} \n Year: ${movie.year} \n Released: ${movie.Released ? "Yes" : "No"} \n`);
// }


// // 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// // i got so many errors in almost every question, and reached here after fixing that. 


// // 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// // let car = 'subaru';

// // console.log("Is car == 'subaru'? I predict True.")

// // console.log(car == 'subaru')

// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let x = 10;
// let y = 20;

// console.log("\n1- Is x != y ? I predicted True")
// console.log(x != y)

// console.log("\n2- Is x == y ? I predicted False")
// console.log(x == y)

// console.log("\n3- Is x < y ? I predicted True")
// console.log(x < y)

// console.log("\n4- Is x > y ? I predicted False")
// console.log(x > y)

// console.log("\n5- Is x <= y ? I predicted True")
// console.log(x <= y)

// console.log("\n6- Is x >= y ? I predicted False")
// console.log(x >= y) 

// console.log("\n7- Is x <= 10 || y < 10? I predicted True")
// console.log(x <= 10 || y < 10)

// console.log("\n8- Is x <= 10 && y < 10? I predicted Fasle")
// console.log(x <= 10 && y < 10) 

// console.log("\n9- Is x == 10 && y == 20? I predicted True")
// console.log(x == 10 && y == 20)

// console.log("\n10- Is x == 10 || y == 20? I predicted Fasle")
// console.log(x != 10 || y != 20)


// // 23. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// // • Test whether an item is in a array

// // • Test whether an item is not in a array

// let string1: string = "a";
// let string2: string = "A";
// let number1: number = 1;
// let number2: number = 2;
// let array1: number[] = [1, 2, 3, 4, 5];
// let array2: number[] = [10, 20, 30, 40, 50];

// console.log(`Is "a" == "A"? - i predicted False`)
// console.log(string1.toLowerCase() == string2);

// console.log(`\nIs "a" == "A"? - i predicted True`)
// console.log(string1.toLowerCase() != string2);

// console.log(`\nIs number1 equal number2 OR number2 less number1 AND number1 NOT EQUAL number2 - i predicted True `)
// console.log(number1 < number2 || number2 > number1 && number1 != number2)

// console.log(`\nIs 25 in array? I predict True`)
// console.log(array1.includes(25))


// // 24. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

//1st
// let alien_color1: string = 'green';

// if (alien_color1 === 'green') {
//     console.log("Player just earned 5 points.");
// }

//2nd
// let alien_color2: string = 'red';

// if (alien_color2 === 'green') {
//     console.log("Player just earned 5 points.");
// }

// // 25. Alien Colors #2: Choose a color for an alien as you did in Exercise 24, and write an if-else chain.
// //• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// //• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// //• Write one version of this program that runs the if block and another that runs the else block.

//1st
// let alien_color1: string = 'green';

// if (alien_color1 === 'green') {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points for shooting the alien.");
// }

//2nd
// let alien_color2: string = 'red';

// if (alien_color2 === 'green') {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points for shooting the alien.");
// }

// // 26. Alien Colors #3: Turn your if-else chain from Exercise 4-3 into an if-else chain.
// // • If the alien is green, print a message that the player earned 5 points.

// // • If the alien is yellow, print a message that the player earned 10 points.

// // • If the alien is red, print a message that the player earned 15 points.

// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// //1st
// let alien_color1: string = 'green';

// if (alien_color1 === 'green') {
//     console.log("Player earned 5 points.");
// } else if (alien_color1 === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (alien_color1 === 'red') {
//     console.log("Player earned 15 points.");
// }

// //2nd
// let alien_color2: string = 'yellow';

// if (alien_color2 === 'green') {
//     console.log("Player earned 5 points.");
// } else if (alien_color2 === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (alien_color2 === 'red') {
//     console.log("Player earned 15 points.");
// }

// // 3rd
// let alien_color3: string = 'red';

// if (alien_color3 === 'green') {
//     console.log("Player earned 5 points.");
// } else if (alien_color3 === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (alien_color3 === 'red') {
//     console.log("Player earned 15 points.");
// }

// // 27. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// // • If the person is less than 2 years old, print a message that the person is a baby.

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// // • If the person is age 65 or older, print a message that the person is an elder.

// let age: number = 25;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

// // 28. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.

// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let favorite_fruits: string[] = ["banana", "apple", "strawberry"];

// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }

// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }

// if (favorite_fruits.includes("grape")) {
//     console.log("You really like grapes!");
// }

// // 29. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let usernames: string[] = ["admin", "Eric", "Alice", "Bob", "Jane", "John"];

// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
//     }
// }

// // 30. No Users: Add an if test to Exercise 27 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.

// let usernames: string[] = []; // write any name for testing

// if (usernames.length === 0 ){
//     console.log("We need to find some users!");
// } else {
//     for (let i = 0; i < usernames.length; i++) {
//         if (usernames[i] === "admin") {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
//         }
//     }
// }


// // 31. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_users: string[] = ["John", "Alice", "Bob", "Eve", "Charlie"];
// let new_users: string[] = ["Eve", "Mallory", "Frank", "Grace", "David"];

// for (let i = 0; i < new_users.length; i++) {
//     let newUsername = new_users[i];
//     let isTaken = false;

//     // Checking for case-insensitive
//     for (let j = 0; j < current_users.length; j++) {
//         if (newUsername.toLowerCase() === current_users[j].toLowerCase()) {
//             isTaken = true;
//             break; 
//         }
//     }

//     if (isTaken) {
//         console.log(`Username '${newUsername}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Username '${newUsername}' is available.`);
//     }
// }


// // 32. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// // • Store the numbers 1 through 9 in a array.

// // • Loop through the array.

// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     let ordinal;

//     if (number === 1) {
//         ordinal = "1st";
//     } else if (number === 2) {
//         ordinal = "2nd";
//     } else if (number === 3) {
//         ordinal = "3rd";
//     } else {
//         ordinal = number + "th";
//     }

//     console.log(ordinal);
// }

// // 33. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// // Print the name of each pizza
// console.log("My favorite pizzas are:");
// for (let i = 0; i < favorite_pizzas.length; i++) {
//     console.log(favorite_pizzas[i]);
// }

// // Print a sentence about each pizza
// console.log("\nMore about my favorite pizzas:");
// for (let i = 0; i < favorite_pizzas.length; i++) {
//     console.log(`I like ${favorite_pizzas[i]} pizza.`);
// }

// // Additional sentence about how much you like pizza
// console.log("\nI really love pizza!");

// // 34. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// // • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// // • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let animals: string[] = ["Dog", "Cat", "Rabbit"];

// // Print the name of each animal
// console.log("Common animals with a characteristic:");

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// console.log("\nMore about these animals:");

// for (let i = 0; i < animals.length; i++) {
//     let animal = animals[i];
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// console.log("\nAny of these animals would make a great pet!");


// // 35. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size} and it will have the message: "${message}".`);
// }

// make_shirt("Large", "Hello, World!");


// // 36. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt size is ${size} and it will have the message: "${message}".`);
// }

// // default values
// make_shirt(); // Large shirt with the default message "I love TypeScript"
// make_shirt("Medium"); // Medium shirt with the default message "I love TypeScript"

// // custom shirt
// make_shirt("Small", "Hello, World!"); 


// // 37. Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// // The function should print a simple sentence, such as Karachi is in Pakistan.
// // Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Call the function with different city-country pairs
// let location1 = city_country("Lahore", "Pakistan");
// let location2 = city_country("Paris", "France");
// let location3 = city_country("New York", "USA");

// console.log(location1);
// console.log(location2);
// console.log(location3);

// // 39. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function make_album(artist: string, album: string, tracks?: number): any {
//     let albumInfo: any = {
//         artist: artist,
//         album: album,
//     };

//     if (tracks !== undefined) {
//         albumInfo.tracks = tracks;
//     }

//     return albumInfo;
// }

// // Create three album dictionaries
// let album1 = make_album("Artist1", "Album1", 10);
// let album2 = make_album("Artist2", "Album2");
// let album3 = make_album("Artist3", "Album3", 12);

// // Print album information
// console.log(album1);
// console.log(album2);
// console.log(album3);

// // 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function make_album(artist: string, album: string, tracks?: number): any {
//     let albumInfo: any = {
//         artist: artist,
//         album: album,
//     };

//     if (tracks !== undefined) {
//         albumInfo.tracks = tracks;
//     }

//     return albumInfo;
// }

// // Create three album dictionaries
// let album1 = make_album("Artist1", "Album1", 10);
// let album2 = make_album("Artist2", "Album2");
// let album3 = make_album("Artist3", "Album3", 12);

// // Print album information
// console.log(album1);
// console.log(album2);
// console.log(album3);

// // 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Array of magician's names
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// // Call the function to show magicians
// show_magicians(magicians);


// // 42. Great Magicians: Start with a copy of your program from Exercise 38. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];

//     for (let magician of magicians) {
//         greatMagicians.push(`the Great ${magician}`);
//     }

//     return greatMagicians;
// }

// // Array of magician's names
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// // Call make_great() to modify the array
// let greatMagicians: string[] = make_great(magicians);

// // Show the updated list of magicians
// show_magicians(greatMagicians);


// // 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];

//     for (let magician of magicians) {
//         greatMagicians.push(`the Great ${magician}`);
//     }

//     return greatMagicians;
// }

// // Array of magician's names
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// // Make a copy of the array
// let originalMagicians: string[] = [...magicians];

// // Call make_great() to modify the copy
// let greatMagicians: string[] = make_great(originalMagicians);

// // Show the original list of magicians
// console.log("Original Magicians:");
// show_magicians(magicians);

// // Show the list of great magicians
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);


// // 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function make_sandwich(...items: string[]): void {
//     console.log("Sandwich Order:");
//     if (items.length === 0) {
//         console.log("You didn't select any items for your sandwich.");
//     } else {
//         console.log("You ordered a sandwich with the following items:");
//         for (let item of items) {
//             console.log(`- ${item}`);
//         }
//     }
//     console.log(); // Add a blank line for separation
// }

// // Call the function with different numbers of arguments
// make_sandwich("Ham", "Cheese", "Lettuce");
// make_sandwich("Turkey", "Swiss Cheese");
// make_sandwich(); // No items specified

////Ended