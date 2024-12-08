console.log("HELLO-WORLD;");

console.log("");
console.log("1");
// QUESTION NUMBER 01 : EMPTY ARRAY ; ///////////////////////////////////////////////////////////////////////////
console.log("Declaring and Initializing an Empty Multidimensional Array:");
// Declare and initialize an empty multidimensional array
var multiArray = [];

// Example of adding empty sub-arrays
multiArray.push([]);
multiArray.push([]);
multiArray.push([]);

// Output the empty multidimensional array to the console
console.log(multiArray);


console.log("")
console.log("2");
// QUESTION NUMBER 02 :Declare and initialize a multidimensional array representing the following matrix: /////////
console.log("Declare and initialize a multidimensional array representing the following matrix:");
var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(multiArray);


console.log("");
console.log("3");
// QUESTION NUMBER 03 :  Program to print numbers from 1 to 10; /////////////////////////////////////////////////
console.log("Program To Print Numbers From 1 to 10:")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}   


console.log("");
console.log("4");
// QUESTION NUMBER 04 : MULTIPLICATION TABLE USING FOR LOOP; /////////////////////////////////////////////////
console.log("MULTIPLICATION TABLE USING FOR LOOP: ");


// Taking user input for number and length
var number = prompt("Enter a number to show its multiplication table:");
var length = prompt("Enter the length of the multiplication table:");

number = Number(number);
length = Number(length);


if (isNaN(number) || isNaN(length) || length <= 0) {
    console.log("Please enter valid numbers.");
} else {

    console.log("Multiplication table of " + number + " (Length " + length + "):");
    for (var i = 1; i <= length; i++) {
        console.log(number + " * " + i + " = " + (number * i));
    }
}


console.log("");
console.log("5");
// QUESTION NUMBER 05 : PRINTING ITEMS USING FOR LOOP; /////////////////////////////////////////////////////////
console.log("PRINTING ITEMS USING FOR LOOP:");
var items = ["Apple" , "Banana" , "Pineapple" , "Grapes" , "Mango"];
for (var i=0; i<items.length; i++){
    console.log(items[i]);
}


console.log("");
console.log("6");
// QUESTION NUMBER 06 : GENERATING NUMBER SERIES: //////////////////////////////////////////////////////////////
console.log("GENERATING NUMBER SERIES USING FOOR LOOP");
// a. Counting: 1, 2, 3, ..., 15
var counting = "";
for (var i = 1; i <= 15; i++) {
    counting += i + " ";
}
console.log("Counting: " + counting);

// b. Reverse counting: 10, 9, 8, ..., 1
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
    reverseCounting += i + " ";
}
console.log("Reverse Counting: " + reverseCounting);

// c. Even numbers: 0, 2, 4, ..., 20
var evenNumbers = "";
for (var i = 0; i <= 20; i += 2) {
    evenNumbers += i + " ";
}
console.log("Even: " + evenNumbers);

// d. Odd numbers: 1, 3, 5, ..., 19
var oddNumbers = "";
for (var i = 1; i <= 19; i += 2) {
    oddNumbers += i + " ";
}
console.log("Odd: " + oddNumbers);

// e. Series: 2k, 4k, 6k, ..., 20k (Multiples of 2)
var series = "";
for (var i = 1; i <= 10; i++) {
    series += (2 * i) + "k ";
}
console.log("Series: " + series);


///////////////////////////////////////// CHAPTER 17-20 COMPLETED \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\