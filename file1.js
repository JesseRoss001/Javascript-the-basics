
// Get the main div and footer divs
let main = document.getElementById('main-div');
let footer = document.getElementById('footer-div');

// First child of the main div is the title div
let titleDiv = main.children[0];
console.log(titleDiv);

// First child of the recipe-title div is the h1
let recipeTitle = titleDiv.children[0];
console.log('Recipe is called:', recipeTitle.textContent); 

// Next sibling of the title div is the ingredients div
let ingredientsDiv = titleDiv.nextElementSibling;
console.log(ingredientsDiv);

// And its first child is a <ul> w/ the ingredients:
let ingredientList = ingredientsDiv.children[0];
console.log(ingredientList);

// Now we can get its children and iterate though them:
console.log("%c Session Four 19-10-2023 ", "color: red; font-weight: bold; font-size:30px ; ");
console.log("%c====================================================================================================================================", "color: blue; font-weight: bold;");


let allIngredients = ingredientList.children;
for(let i = 0; i < allIngredients.length; i++) {
    console.log('Ingredient', i, 'is', allIngredients[i].textContent);
}

// Parent of the main-div is <body>
console.log(main.parentNode);

// and its sibling is the footer-div
console.log(main.nextElementSibling);

// So we could combine all of these to get the footer text easily, even if it had no id/class
let footerText = main.parentNode.children[1].children[0].textContent;
console.log('Footer text is:', footerText);

// Of course, since it has an id, you can also do this to access it directly
footerText = document.getElementById('footer-div').children[0].textContent;
console.log('Footer text (alternative method) is:', footerText);



console.log("%c Practice Children + Parent + Sibling ", "color: red; font-weight: bold; font-size:30px ; ");


let theBigOne = document.getElementById("main1");
let header = main1.children[0] ;
console.log("1" + header + header.textContent); 
console.log("2" + header.nextElementSibling + header.nextElementSibling.textContent); 

let iteration =document.getElementById("iterate-elements");
let theChildren = iteration.children;
let a = 0 ; 

for (let a = 0; a < theChildren.length; a++) {
    console.log(a +  theChildren[a].textContent);
}


console.log("%c Getting Specific Element Properties ", "color: red; font-weight: bold; font-size:30px ; ");

let box = document.getElementById('main-box');

// All the box's content
console.log(box.innerHTML);

// You can use window.getComputedStyle and pass it an element to get that element's styles as a list of key/value pairs
console.log("The box's shadow:", window.getComputedStyle(box).boxShadow);
console.log("The box's border", window.getComputedStyle(box).border);
console.log("The box's border radius", window.getComputedStyle(box).borderRadius);
console.log(window.getComputedStyle(box).padding)
// The box's height and width
console.log('Box height is:', box.clientHeight);
console.log('Box width is:', box.clientWidth);

// The main heading
let heading = box.children[0];

// The heading's classes
console.log(heading.classList);



console.log(box.classList);

// The input box
let username = document.getElementById('username-input');

// All the input's attributes
console.log(username.attributes);

// To get their name/value, we must iterate
let attrs = username.attributes;
for (let i = 0; i < attrs.length; i++) {
    console.log('Attr name:', attrs[i].name, '- Attr value:', attrs[i].value);
}


console.log("%c Getting Specific Element Properties  Exercise ", "color: red; font-weight: bold; font-size:30px ; ");

let  usernameInput = document.getElementById("username-input");
console.log("This gives the outerHTML "+ usernameInput.outerHTML)
let inputPadding = document.getElementById("username-input");
console.log(getComputedStyle(inputPadding).padding);
console.log(getComputedStyle(inputPadding).color);


console.log("%c document.write()", "color: red; font-weight: bold; font-size:30px ; ");


function replace() {
    document.write('<h1>Hello!</h1>');
    document.write("Today is ", Date());
    document.write('<p>Each call to <code>document.write()</code> is appended in order to the document, without newlines.</p>');
    document.write('<p>Notice the css for the &lt;code&gt; tag isn\'t working anymore...</p>');
    document.write('<p>That\'s because the whole document was replaced, including the link to the css file!</p>');

    document.write('The calls above are on new lines because they\'re writing paragraphs and headings. If writing plaintext...');
    document.write('notice that this method will NOT append a new line after each statement.');
    document.write('<br><br>To do that, you can use break tags');
}

console.log("%c challenge document.write()", "color: red; font-weight: bold; font-size:30px ; ");
let newH2 = document.getElementById("h2-rewrite");
newH2.innerHTML = "is this replacing";
newH2.innerHTML += "Yup" ;

document.getElementById("getanwer-button").addEventListener("click", function() {
    function getAnswer() {
        let element = document.querySelector(".re-write");

        if (element) {
            element.innerHTML = '<h2>Is this what you are looking for?</h2>';
            element.innerHTML += '<h4>TOO BAD IT WAS A TRAP</h4>';
        }
    }

    getAnswer(); // Call the getAnswer function when the button is clicked
});










