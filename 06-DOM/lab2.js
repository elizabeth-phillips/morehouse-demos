window.onload = function() {
	const div = document.querySelector('div');
	const h1 = document.querySelector('h1');

	console.log(h1.innerHTML);   // "Hello"
	console.log(div.innerHTML); // '<h1>Hello</h1>'

	h1.innerHTML = "Aloha";
}

let allLi = Array.from(document.querySelectorAll('li'));

// Update the 'Coffee' item to say 'Fair Trade Coffee'
let coffeeLi = allLi.find(el => el.textContent === 'Coffee');
console.log("Coffee tag", coffeeLi);
coffeeLi.innerText = 'Fair Trade Coffee';

// Remove 'Veggie Burgers' from the list
let veggieLi = allLi.find(el => el.textContent === 'Veggie Burgers');
console.log("Veggie Burger tag", veggieLi);
veggieLi.remove();

// Add an item 'Cheese Whiz'
const newLI = document.createElement('li');
newLI.innerHTML = "Cheese Whiz";
list.appendChild(newLI);
allLi = Array.from(document.querySelectorAll('li'));

// Clear the list and programmatically add the following items: ['protein powder', 'muscle milk', 'power bars']
let newItems = ['protein powder', 'muscle milk', 'power bars'];
allLi.forEach(currLi => currLi.remove());

const ulList = document.querySelector('ul')
newItems.forEach(curr => {
	const newLI = document.createElement('li');
	newLI.innerHTML = curr;
	ulList.appendChild(newLI);
});
allLi = Array.from(document.querySelectorAll('li'));

// Add the class 'important' to the muscle milk item.
let muscleLi = allLi.find(el => el.textContent === 'muscle milk');
muscleLi.className = "important";
