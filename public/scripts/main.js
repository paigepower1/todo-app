'use strict';

var ul = document.getElementById('list');
var removeAll = document.getElementById('removeAll');
var add = document.getElementById('add');

// add on click event to add button
// anonymous function
add.onclick = function () {
    addLi(ul);
};

// function fires after clicking add
function addLi(targetUi) {
    var inputText = document.getElementById('text').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement('button');
    document.getElementById('text').value = " ";

    if (inputText.length === 0) {
        alert("there is no input");
        return false;
    }

    removeButton.className = "removeMe";
    removeButton.innerHTML = "Done!";
    removeButton.setAttribute("onclick", "removeMe(this);");

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUi.appendChild(li);
}

function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function () {
    ul.innerHTML = "";
};