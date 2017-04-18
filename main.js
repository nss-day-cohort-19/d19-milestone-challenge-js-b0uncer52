var height = document.getElementById("height");
var character = document.getElementById("char");
var submitButton = document.getElementById("submit");
var treeHeight;
var leafType;

function growTree(tree){
	for (var i = 0; i < tree.height; i++) {
	console.log((" ").repeat((tree.height - i) * (tree.leaf).length), tree.leaf.repeat(1 + 2* i));
	}
}
function submit(event) {
	treeHeight = parseInt(height.value);
	leafType = character.value;
	if(!Number.isInteger(treeHeight)){
		alert("Must enter a number");
	}
	else if(leafType.length < 1) {
		alert("Enter a String or Character");
	}else {
		var tree = {height: treeHeight, leaf: leafType};
		growTree(tree);
	}
}
function enterEvent(event){
	if(event.keyCode == 13){
		submit(event);
	}
}
submitButton.addEventListener("click", submit);
height.addEventListener("keyup", enterEvent);
character.addEventListener("keyup", enterEvent);