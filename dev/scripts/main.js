let ul = document.getElementById('list');
let removeAll = document.getElementById('removeAll');
let add = document.getElementById('add');

// add on click event to add button
// anonymous function
add.onclick = () => {
    addLi(ul);
};

// function fires after clicking add
function addLi(targetUi) {
    let inputText = document.getElementById('text').value;
    let li = document.createElement('li');
    let textNode = document.createTextNode(inputText + " ");
    let removeButton = document.createElement('button');
    document.getElementById('text').value = " ";

    if (inputText.length === 0) {
        alert ("there is no input");
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
    let parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function() {
    ul.innerHTML = "";
}