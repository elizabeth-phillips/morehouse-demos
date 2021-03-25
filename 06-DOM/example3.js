window.onload = function() {
  const el = document.getElementById('myEl');
  el.addEventListener('click', function(event){
	  alert('Thank you!');
  });

  // Combine with DOM editing
  el.addEventListener('mouseover', function(event) {
	  el.innerHTML = 'Getting Warmer';
  });
  el.addEventListener('mouseout', function(event) {
	  el.innerHTML = 'Goodbye';
  });
};

function log(message) {
  console.clear();
  console.log(message);
  let messageElement = document.getElementById('message');
  messageElement.innerHTML = message;
}

document.querySelector('#main').addEventListener('click', function(e) {
  log(`target: ${e.target.id}, currentTarget: ${e.currentTarget.id}`);
});
