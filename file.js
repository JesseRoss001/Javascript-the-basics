console.log("%c Session one 16-10-2023 ", "color: red; font-weight: bold; font-size:30px ; ");
console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");

console.log("Hello World ")

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

console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");
console.log("%c Session Two 17-10-2023 ", "color: red; font-weight: bold; font-size:30px ; ");
console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");
console.log("working in the code institute LMS learning basic javascript ")
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

console.log("%c============================================", "color: red; font-weight: bold;");
console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");
console.log("%c Session Three 18-10-2023 ", "color: red; font-weight: bold; font-size:30px ; ");
console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");

hHeader.innerHTML = " This is a java-script written header "; 
document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;

document.getElementById('title').innerHTML = document.title;

document.body.onload = function() {
    console.log('We can call various methods of the body object as well, such as this one, body.onload, which gets called when loading is complete! Now we know that the body has been loaded!');
}

console.log ("%c Working with paragraphs \n ", "font-size:18px; color:lightgreen;")
//paragraph notation as well grabbing by tag name 
let firstParagraph = document.getElementsByTagName('p')[0];
let numParagraphs = document.getElementsByTagName('p').length;
let secondParagraph = document.getElementsByTagName('p').item(1);
let specificParagraph = document.getElementsByTagName('p').namedItem('specific');
let allParagraphs = document.getElementsByTagName('p');

console.log(firstParagraph);
console.log(numParagraphs);
console.log(secondParagraph);
console.log(specificParagraph);
console.log(allParagraphs); 


console.log ("%c Paragraph Exercise \n ", "font-size:16px; color:orange;")

let pElements = document.getElementsByTagName('p')
console.log(pElements)
let secondH1 = document.getElementsByTagName('h1')[2]; 
console.log(secondH1)


console.log ("%c Working with classnames  \n ", "font-size:18px; color:lightgreen;")

let blueThings = document.getElementsByClassName('blue');

// All items with class="blue"
console.log('The HTMLCollection contains:', blueThings);

// Iterate and print all their texts:
for(let i = 0; i < blueThings.length; i++) {
  console.log('Index ' + i + ' in the collection: ' + blueThings[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", blueThings[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", blueThings.item(3).textContent);

// Get the item with class="blue" and id="blue-div" and log its tag name:
console.log('The item with id="blue-div" is a', blueThings.namedItem('blue-div').tagName, 'element.');

// The other div is not in the collection since it doesn't have the "blue" class. The namedItem() method returns null
console.log('The item with id="another-blue-div" is', blueThings.namedItem('another-blue-div'));


console.log ("%c classname  Exercise \n ", "font-size:16px; color:orange;")

let theGreenTeam=document.getElementsByClassName("green");
for (let a=0 ; a < theGreenTeam.length; a++) {console.log("I am teamMember :"+ a + "," + theGreenTeam[a] + "AKA" + theGreenTeam[a].textContent)}
let greenbean =document.getElementById("greenbean");
console.log("They call me the team leader of the Green Team ." +theGreenTeam.namedItem('greenbean') + "my name is " + greenbean.textContent);
