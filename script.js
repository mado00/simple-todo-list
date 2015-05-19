
//submit text in the text box
var form = document.querySelector("form");
form.input.focus();
form.addEventListener("submit", function(e) {
	e.preventDefault();
	toDoList();
	
});

//get values from inputs

var button = document.querySelector("button");
button.addEventListener("click", function(){
	toDoList();
});

function toDoList(){
	var input = document.getElementById("input");
	var li = document.createElement("li");
	li.innerHTML = input.value;
	var list = document.getElementById("toDoList");
	list.appendChild(li);
	input.value = "";
	input.focus();
}
