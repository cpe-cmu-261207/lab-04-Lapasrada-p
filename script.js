<<<<<<< HEAD
const inputBox = document.querySelector(".inputText input")
const addButton = document.querySelector(".inputText button")
const todolist = document.querySelector(".todolist")
const clearAll = document.querySelector(".clearAll button")

inputBox.onkeyup = ()=>{
    let Userdata  = inputBox.value;
    if(Userdata.trim() != 0){
        addButton.classList.add("active");
    }else{
        addButton.classList.remove("active");
    }
}
showList();

//add list
addButton.onclick =() =>{
    let arr =[];
    let Userdata  = inputBox.value;
    let getLocalStorage = localStorage.getItem("List Todo");
    if(getLocalStorage == null){
        arr =[];
    }else{
        arr = JSON.parse(getLocalStorage);
    }
    arr.push(Userdata)
    localStorage.setItem("List Todo", JSON.stringify(arr));
    showList();
}

function showList(){
    let getLocalStorage = localStorage.getItem("List Todo");
    if(getLocalStorage == null){
        arr =[];
    }else{
        arr = JSON.parse(getLocalStorage);
    }
    const count =arr.length;
    const notDoneNum = document.querySelector(".notDoneNum");
    notDoneNum.textContent = count;

    if(arr.length>0){
        clearAll.classList.add("active");
    }else{
        clearAll.classList.remove("active");
    }
    let newline = '';
    arr.forEach((element,index)=> {
        newline += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newline;
    inputBox.value ="";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("List Todo");
    arr = JSON.parse(getLocalStorage);
    arr.splice(index,1);
    localStorage.setItem("List Todo", JSON.stringify(arr));
    showList();
}

clearAll.onclick = ()=>{
    arr =[];
    localStorage.setItem("List Todo", JSON.stringify(arr));
    showList();
}
=======
/* Your code here */
>>>>>>> parent of 092010a (outline)
