var myInput, priority;
myInput = document.body.querySelector("#input");
priority = document.body.querySelector("#priority");

newTask = function() {
  var newLi, text, box;
  newLi = document.createElement("li");
  text = document.createTextNode("myInput");
  box = document.createElement("input");
  box.type = "checkbox";
  newLi.className = priority.value;
  newLi.appendChild(text);
  newLi.appendChild(box);
}

addNewTask = function(newTask) {
  var taskList;
  taskList = document.body.querySelector("#list");
  taskList.appendChild(newTask());
}
