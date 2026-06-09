function addTask(){

    let input=document.getElementById("taskInput");

    let task=input.value;

    if(task===""){
        alert("Please Enter Task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=
    `${task}
    <div>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    </div>`;

    document.getElementById("taskList").appendChild(li);

    input.value="";
}

function deleteTask(btn){
    btn.parentElement.parentElement.remove();
}

function editTask(btn){

    let newTask=prompt(
        "Edit Task",
        btn.parentElement.parentElement.firstChild.textContent
    );

    if(newTask){
        btn.parentElement.parentElement.firstChild.textContent=newTask;
    }
}