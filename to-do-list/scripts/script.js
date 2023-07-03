  /* global document,localStorage */


function get_todos() {
    'use strict';
    var todos = ([]), todos_str = localStorage.getItem('todo');
    if (todos_str !== null) { 
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*

function saveImagesInLocalStorage (){
     
}

function get_images(){
    'use strictly';
    var myImages = ([]);
    var img = document.getElementById("myButton");
    var gallery_images = localstorage.getItem("myImages");
    if(gallery_images !== null) {

    }
}

var 


*/

function show() {
    'use strict';
    var todos = get_todos(), html = '<ul>';
    
    for (var i = 0; i<todos.length; i++) 
        html += '<li>' + todos[i] + '<button class="remove">Delete</button> </li>';
    
    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html;
    
    var buttons = document.getElementsByClassName('remove');
    for (i=0; i < buttons.length; i++) 
        buttons[i].addEventListener('click', remove);    
            
}



function add() {
    'use strict';
    var task = document.getElementById('task').value, todos = get_todos();

    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    
    show();
    return false; 
}
/*
function clearDefault() {
    if (a.defaultValue==todo.value) {a.value=""}
*/

    
    
    


function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    
    show();
    
    return false;
}

/*
function show() {
    var todos = get_todos();
    
    var html = '<ul>';
    for (var i = 0; i<todos.length; i++) 
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">Delete</button> </li>';
    
    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html;
    
    var buttons = document.getElementsByClassName('remove');
    for (i=0; i < buttons.length; i++) 
        buttons[i].addEventListener('click', remove);    
            
}
*/
function clearInput() {
    document.getElementById("task").value = "";   
}
document.getElementById('add').addEventListener('click', add);
show();

document.getElementById('add').addEventListener('click', clearInput);
    
