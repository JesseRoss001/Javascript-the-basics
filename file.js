var myName ="Jesse";

let surname="Ross";

const pi=3.14;

var a;
var b=2;
console.log(b)
a = 7;
console.log(a)
b = a;
console.log(a)
console.log(b)

var a=9;

var d = 10;
var e = 11;
var f = "I am a "

d +=1
console.log(d)
e -=1 
console.log(e)

f= f + "string";
console.log(f)

let text = "This is a quote 'is it ' \n A new line"
console.log(text);


var apple = " I come first";
apple +="I come second";
console.log(apple)

let firstName = "Jesse"
firstNameLength = firstName + ":" + firstName.length 
console.log(firstNameLength)

firstName1=firstName[0]
console.log(firstName1)


firstName2=firstName[firstName.length-1];
console.log(firstName2)
fullName=firstName + ` ` + surname
fullNameLength=firstName.length+surname.length;
console.log(fullName + `:` + fullNameLength)


function minusSeven(num) {
    return num - 7 ;
}

console.log(minusSeven(7));

function timesFive(num) {
    return num*5 ;

}

console.log(timesFive(10));

/** 
 * This is a timer that updates H1 for each second since the page has been uploaded 
 * NTS parseInt coverts the string into a number 
 * 
 */
setInterval(function() {
    // setting a variable to the timer 
    let timerElement = document.getElementById('timer');
    // 
    let currentTime = parseInt(timerElement.innerHTML);
    currentTime ++;
    timerElement.innerHTML =currentTime; },1000); 

let hHeader = document.getElementById('h2-header');
hHeader.innerHTML = " This is a java-script written header "; 
document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;

document.getElementById('title').innerHTML = document.title;

document.body.onload = function() {
    console.log('We can call various methods of the body object as well, such as this one, body.onload, which gets called when loading is complete! Now we know that the body has been loaded!');
}


//paragraph notation as well grabbing by tag name 
let firstParagraph = document.getElementsByTagName('p')[0];
let numParagraphs = document.getElementsByTagName('p').length;
let secondParagraph = document.getElementsByTagName('p').item(1);
let specificParagraph = document.getElementsByTagName('p').namedItem('specific');

console.log(firstParagraph);
console.log(numParagraphs);
console.log(secondParagraph);
console.log(specificParagraph);