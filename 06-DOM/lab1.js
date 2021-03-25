// Get the header element
let header = document.getElementsByTagName('head')[0];
console.log('header:', header);

// Get all the section elements
let sections = document.getElementsByTagName('section');
console.log('sections:', sections);

// Get the section element with class="current"
let current = document.getElementsByClassName('current')[0];
console.log('current:', current);

// Get the section that comes after the "current" section
let next = current.nextElementSibling;
console.log('next:', next);

// Get the h2 node from the section before the 'current' section
let h2 = current.previousElementSibling;
console.log('h2:', h2);
// or
let h22 = current.previousElementSibling.querySelector('h2');
console.log('alternative h2:', h22);

// Get the div that contains the section that has an h2 with a class of 'highlight'
let found = document.querySelector('h2.highlight').parentElement.parentElement;
console.log('section with h2 with class of highlight:', found);

// Get all the sections that contain an H2 (using a single statement);
let h2Sections = document.querySelectorAll('section h2');
let h2SectionsArray = Array.from(h2Sections);
let allSectionsContainingH2 = h2SectionsArray.map( h2 => h2.parentElement);
console.log('allSectionsContainingH2:', allSectionsContainingH2);