var myInput, priority;
myInput = document.body.querySelector("#input");
priority = document.body.querySelector("#priority");

newTask = function() {
  var newLi, text, box, taskList;
  newLi = document.createElement("li");
  text = document.createTextNode(myInput.value);
  box = document.createElement("input");
  box.type = "checkbox";
  box.onclick = boxChecked;
  newLi.className = priority.value;
  newLi.appendChild(text);
  newLi.appendChild(box);
  taskList = document.body.querySelector("#taskList");
  taskList.appendChild(newLi);
}

boxChecked = function() {
  this.parentNode.className("done");
  //uncheck
}
