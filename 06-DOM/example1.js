//Get number of children in ul
const listItems = document.querySelector('ul').children;
console.log('num of li', listItems.length);

//Get the li with the class selected
const selectedItem = document.querySelector('li.selected')
console.log('li.selected', selectedItem);

//Get li.selected's previous sibling
const first = selectedItem.previousElementSibling;
console.log('li.selected prev sibling', first);

//Get li.selected's next sibling
const last = selectedItem.nextElementSibling;
console.log('li.selected next sibling', last);

//Get li.selected's parent
const list = selectedItem.parentElement;
console.log('li.selected parent', list);

//Get li.selected's "grand"parent
const header = selectedItem.parentElement.parentElement;
console.log('li.selected "grand" parent', header);

//Get li.selected's "grand"parent's next sibling
const section = selectedItem.parentElement.parentElement.nextElementSibling;
console.log('li.selected "grand" parent\'s sibling', section);