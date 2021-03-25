window.onload = function() {
	const div = document.querySelector('div');
	const h1 = document.querySelector('h1');

	console.log('h1 innerHMTL before change:', h1.innerHTML); 
	console.log('div innerHMTL before change:', div.innerHTML);

	h1.innerHTML = "Aloha";

	console.log('h1 innerHMTL after change:', h1.innerHTML); 
	console.log('div innerHMTL after change:', div.innerHTML);
}

const a = document.querySelector('a');

//Get an attribute
console.log('a\'s href attribute', a.href); //"http://google.com"

//Set an attribute
console.log('a\'s name attribute before', a.name);
a.name = 'new link name';
console.log('a\'s name attribute after', a.name);

//Add a new attribute
a.target = "_blank";

//Removes the item with the class "first"
// document.querySelector('.first').remove();

//Create a new list item in the first ul
const newLI = document.createElement('li');
newLI.innerHTML = "Item 4";
const list = document.querySelector('ul');
list.appendChild(newLI);