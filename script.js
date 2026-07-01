const API = "https://x24tp9aek2.execute-api.ap-south-2.amazonaws.com/prod/todo";

async function loadTodos(){

    const response = await fetch(API);

    const todos = await response.json();

    const list = document.getElementById("todoList");

    list.innerHTML = "";

    todos.forEach(todo => {

        list.innerHTML += `
            <li>${todo.task}</li>
        `;

    });

}

async function addTodo(){

    const task = document.getElementById("task").value;

    if(task===""){
        alert("Enter a task");
        return;
    }

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            task:task
        })
    });

    document.getElementById("task").value="";

    loadTodos();

}

loadTodos();