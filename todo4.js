var input, priority;
input = document.body.querySelector("#input");
priority = document.body.querySelector("#priority");

newTask = function() {
  var newLi, text, box;
  newLi = document.createElement("li");
  text = document.createTextNode("input");
  box = document.createElement("checkbox");
  document.getElementById("newLi").className=priority;
  newLi.appendChild(text);
  newLi.appendChild(box);
}

addNewTask = function(newTask) {
  var taskList;
  taskList = document.body.querySelector("#list");
  taskList.appendChild(newTask());
}
