// Holds value from input of todo list
document.getElementById('add').addEventListener('click', function() {
	var value = document.getElementById('item').value;
	if (value) addItemTodo(value);
	document.getElementById('item').value = '';
});


// Adds new tasks to list
function addItemTodo(text) {

	var list = document.getElementById('todoContainer');

	var item = document.createElement('div');
	item.classList.add('row-text');

	var label = document.createElement('label');
	var input = document.createElement('input');
	input.type = ('checkbox');
	var span = document.createElement('span');
	
//Click event for check tasks
	input.addEventListener('click', checkTask);

	var lines = document.createElement('div');
	lines.classList.add('lines');

	var task = document.createElement('p');
	task.contentEditable = "true";
	task.setAttribute("contenteditable", "true");
	task.innerText = text;
	
	var imgTrash = document.createElement('img');
	imgTrash.src = 'img/trash.png';
	imgTrash.classList.add('trash');

// Click event for removing tasks
	imgTrash.addEventListener('click', removeItem);

	list.appendChild(item);
	item.appendChild(label);
	label.appendChild(input);
	label.appendChild(span);
	item.appendChild(lines);
	item.appendChild(task);
	item.appendChild(imgTrash);
};

// Remove tasks from list
function removeItem(){
	var item = this.parentNode;
	var parent = this.parentNode.parentNode;
	
	parent.removeChild(item);
};

// Check tasks
function checkTask(){

	var itemm = this.parentNode.childNodes;
	var item = this.parentNode.parentNode;
	var text = item.getElementsByTagName('p');
	var img = item.getElementsByTagName('img');
	var checkbox = item.getElementsByTagName('input');
	
	if (checkbox[0].checked) {

		text[0].classList.add('checked-text');
		img[0].classList.add('checked-trash');
		text[0].contentEditable = "true";
		text[0].setAttribute("contenteditable", "false");

	} else {
		text[0].classList.remove('checked-text');
		img[0].classList.remove('checked-trash');
		

	}

	 
};



