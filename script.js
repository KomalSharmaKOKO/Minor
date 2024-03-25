let input=document.getElementById("task-input"); // input field text
let btn=document.getElementById("btn"); // button 
let task_list=document.getElementById("Task-list"); //task list

showdata();
function addtask(){
    if(input.value.trim()==="" || input.value.trim()===" "){
        alert("Invalid");
        return;
    }
    let li= document.createElement("li");
    li.innerHTML=input.value;
    task_list.appendChild(li);
    let cross=document.createElement("span");
    cross.innerHTML="\u00d7";
    li.appendChild(cross)
    input.value="";
    savedata();
}
btn.addEventListener("click",addtask);
window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addtask();
    }
})

task_list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",task_list.innerHTML);
}

function showdata(){
    task_list.innerHTML=localStorage.getItem("data");
}