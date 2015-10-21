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
  if (this.checked) {
    this.parentNode.className = "done";
  }
  else {
    this.parentNode.classList.remove("done");
  }
}
//doneTask = function() {
//  if (this.checked) {
//    this.parentNode.className = "done";
//  } 
//  else {
//    this.parent.Node.classList.remove("done");
//  }
//<script type="text/javascript" src="http://bnmnetp.github.io/CS130/listsaver.js">
