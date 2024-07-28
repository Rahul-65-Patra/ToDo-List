
const btnElement=document.querySelector(".btn");
const inputElement=document.querySelector("#input-field")
const taskElement=document.querySelector(".list-item")

btnElement.addEventListener('click',btnFun);

function btnFun(){

 // console.log("Clicked")
 //console.log(inputElement.value)

   if(inputElement.value===""){
     alert("Please add your task first");
   }
   else{
        let listItem=document.createElement("li");
        listItem.innerText=inputElement.value;
        taskElement.appendChild(listItem)


        let spanElement=document.createElement("span");
        spanElement.innerText="\u00d7";
        listItem.appendChild(spanElement)
   }
   inputElement.value='';
   saveListElement();
}

taskElement.addEventListener('click',changeBackground);

function changeBackground(event){
    if(event.target.tagName == "LI"){
       event.target.classList.toggle("checked");
       saveListElement();
    }
    else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        saveListElement();
    }
}

//---------- store the data in localStorage--------------------

function saveListElement(){
  localStorage.setItem('task',taskElement.innerHTML);
}

function getListElement(){
   taskElement.innerHTML=localStorage.getItem('task')
}
getListElement();