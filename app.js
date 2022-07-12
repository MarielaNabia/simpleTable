document.getElementById("formTask").addEventListener("submit", displayTasks);

function displayTasks(e){
    let title = document.getElementById("title").value;
    let description=document.getElementById("description").value; 

    const task={
        title,
        description
    };

    if(localStorage.getItem("tasks") === null){
        let tasks=[]
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }else{
        let tasks =JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    e.preventDefault()
    getAllTask()
}

function getAllTask(){
let tasks = JSON.parse(localStorage.getItem("tasks"));
let tasksDisplay= document.getElementById("tasks")

tasksDisplay.innerHTML=""
tasks.map(tas =>{  
    tasksDisplay.innerHTML +=` 
    <div id="conteinerTask">
    <div>
    <p>${tas.title}</p>
    
    <p>${tas.description}</p>
    </div>
     
     <button onclick='deleteTask("${tas.title}")'>Delete</button>
    </div>
    
    `   
})
}

function deleteTask(titleTask){  
    let newTask=[]
    console.log(titleTask)
let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
console.log(tasksLocal)
 tasksLocal.map(tas=> {
    
    if(tas.title === titleTask){
      newTask.push(...tasksLocal.filter(item => item.title !== titleTask ))  }
      console.log(newTask)
    })
    
    localStorage.setItem("tasks", JSON.stringify(newTask))
    getAllTask()
}







