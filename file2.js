console.log("%c Adding and removing Elements ", "color: red; font-weight: bold; font-size:30px ; ");

function createShoppingList() {
    // Get the document body (just for convenience)
    let body = document.body;

    // Create a new heading
    let newHeading = document.createElement("h3");

    // Set its innerHTML
    newHeading.innerHTML = "Shopping List:";

    
    // Add it to the body
    body.appendChild(newHeading);

    
    let newHeading1 =document.createElement("h4");
    newHeading1.innerHTML= "<h5> I was here </h5>" ;
    
    body.appendChild(newHeading1);

    // Now make the new list
    let shoppingList = document.createElement('ul');

    // Create an array of items to add
    let shoppingItems = ['Milk', 'Butter', 'Eggs'];

    // Loop through the array and create <li> elements
    for (let i = 0; i < shoppingItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = shoppingItems[i];
        shoppingList.appendChild(listItem);
    };

    // Now append the whole new list to the body
    body.appendChild(shoppingList);

    // When shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
    let button = document.createElement('button');
    button.innerHTML = "Finished Shopping";

    // Set the onclick attribute to call the addToKitchenStock() function below
    button.setAttribute('onclick', 'addToKitchenStock();');

    // Append it to the body
    body.appendChild(button);
}


function addToKitchenStock() {
    // First remove the shopping list heading
    let shoppingListHeading = document.getElementsByTagName('h3')[1];
    shoppingListHeading.remove();

    // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
    let kitchenStock = document.getElementsByTagName('ul')[0];
    let shoppingList = document.getElementsByTagName('ul')[1];
    for (let i = 0; i < shoppingList.children.length; i++) {
        let clone = shoppingList.children[i].cloneNode(true)
        kitchenStock.appendChild(clone);
    }

    // Remove the old shopping list and the buttons
    shoppingList.remove();
    let i = 0;
    while (i < 2) {
        /* This removes the first button in the document each time.
        We need to do it this way since once we delete the first
        one, the 2nd one's index is now 0 */
        document.getElementsByTagName('button')[0].remove();
        i++;
    };

    // Insert a completion note at the top
    let complete = document.createElement('p');
    complete.innerHTML = "Shopping complete!"
    complete.style.color = "red";
    complete.style.fontWeight = "bold";
    let kitchenStockHeading = document.getElementsByTagName('h3')[0];
    document.body.insertBefore(complete, kitchenStockHeading);
}
console.log("%c  Challenge Adding and removing Elements ", "color: red; font-weight: bold; font-size:30px ; ");


function addSquare() {
    let newDiv = document.createElement("div");
    newDiv.className = "square";
    document.getElementById("squares-wrapper").appendChild(newDiv);
}

function removeSquare() {
    let divRmv = document.getElementById("squares-wrapper");
    if (divRmv) {
        divRmv.innerHTML = "";
    }
}



