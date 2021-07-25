const cout = console.log
// getlocalStorage
let localData = JSON.parse(localStorage.getItem("userData"))
if (localStorage.getItem('userData') == null) {
    const dataformat = {
        incompleteArr: [], completeArr: []
    }
    localStorage.setItem('userData', JSON.stringify(dataformat))
}

//click&enter alert
function coutAlert(input) {
    if (input.length == 0 || input.indexOf(' ') == 0) {
        document.getElementById("TaskInput").value = ""
        alert("CANNOT BE EMPTY, PLEASE ADD TO DO LIST")
        return false
    }
    return true
}
function keypress(ev){
    if (ev.keyCode === 13) 
        pressEnter()
}
function empty(input){
    if (input.length == 0 || input.indexOf(' ') == 0) {
        return false
    }
    return true
}
function ArrIndex(arr, key) {
    for (let j = 0; j < arr.length; ++j) {
        if (arr[j] === key) 
            return j
    }
    return -1
}

// function addTodo&addtoDone
function addTodo(inputText){
    const input = inputText;
    const newTask = document.createElement('p')
    const boxTask = document.createElement('div')
    const blockBTn = document.createElement('div')

    function DonePress(){
        newTask.classList.add("todone")
        document.getElementById("doneAll").prepend(newTask)
        localData.incompleteArr.splice(localData.incompleteArr.indexOf(input),1)
        localData.completeArr.push(input)
        localStorage.setItem('userData', JSON.stringify(localData))
        boxTask.remove()
    }

    function BinPress(){
        localData.incompleteArr.splice(localData.incompleteArr.indexOf(input),1)
        localStorage.setItem('userData', JSON.stringify(localData))
        boxTask.remove()
    }

    boxTask.classList.add("todo")
    
    const doneBtn = document.createElement('button')
    const binBtn = document.createElement('button')
    newTask.innerHTML = inputText
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    binBtn.innerHTML = '<i class="fas fa-trash"></i>';
    doneBtn.classList.add("pressDoneBtn");
    binBtn.classList.add("pressBinBtn");
    doneBtn.style.visibility = "hidden"
    binBtn.style.visibility = "hidden"

    //control Mouse
    boxTask.addEventListener('mouseover',()=>{
        doneBtn.style.visibility = "visible";
        binBtn.style.visibility = "visible";
    })
    boxTask.addEventListener('mouseout',()=>{
        doneBtn.style.visibility = "hidden";
        binBtn.style.visibility = "hidden";
    })
    doneBtn.addEventListener("click", DonePress)
    binBtn.addEventListener("click", BinPress)

    //append data
    boxTask.append(newTask)
    boxTask.append(blockBTn)
    blockBTn.append(doneBtn)
    blockBTn.append(binBtn)
    document.getElementById("dolist").prepend(boxTask)

    //clear inputBox after input
    inputText=''
}

function addToDone(inputDone){
    const newTask = document.createElement('p')
    const boxTask = document.createElement('div')
    newTask.classList.add("todone")
    newTask.innerHTML = inputDone
    boxTask.append(newTask)
    document.getElementById("doneAll").prepend(boxTask)
    newTask.classList.add("todone")
}


function pressEnter(){
    cout("")
    const taskIn = document.getElementById("TaskInput").value

    if (coutAlert(taskIn)) {
        addTodo(taskIn)

        localData.incompleteArr.push(taskIn)
        localStorage.setItem('userData', JSON.stringify(localData))
        document.getElementById("TaskInput").value = ""
    }
}


//keep localStorage
localData.incompleteArr.map(x => {
    if (empty(x)) {
        addTodo(x)
    }
})
localData.completeArr.map(x => {
    if (empty(x)) {
        addToDone(x)
    }
})

//clearAll Click
const clearAll = document.querySelector(".clearAll button")
clearAll.addEventListener('click', () =>{
    localStorage.clear();
    location.reload();
    
})

