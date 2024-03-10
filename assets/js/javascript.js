const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToDo);

function addToDo(){

        if (input.value.trim() === ""){
            alert("Digite algo!");

    }else{
    
        const newItem = document.createElement("li");

        newItem.innerHTML = '<input type="checkbox" id="checkbox" onchange="updateTaskStatus(this)">' + input.value + '<button onclick="removeTask(this)"><img src="assets/img/remove.png" height="10px" width="auto"></button>';
         
        list.appendChild(newItem);
           
        input.value = "";
        input.placeholder = "Add Item";
        input.placeholder.style = "#76453B italic  10px ";
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}

function updateTaskStatus(checkbox) {
    var li = checkbox.parentElement;
    li.style.textDecoration = checkbox.checked ? "line-through" : "none";   
}

input.addEventListener("keyup", handleKeyUp);


function handleKeyUp(e){

    if(e.key === "Enter"){

        addToDo();

    }}
