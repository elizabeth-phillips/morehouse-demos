function log(newTodo) {
    console.clear();
    console.log(newTodo);
    const todos = document.getElementById('todos')
    const newLI = document.createElement('li');
    newLI.innerHTML = newTodo;
    todos.appendChild(newLI);
}

