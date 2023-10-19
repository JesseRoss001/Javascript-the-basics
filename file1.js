
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

