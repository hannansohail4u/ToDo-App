
// Add to do
function addtodo(){
var ToDotask = document.getElementById("ToDotask")
// console.log(ToDotask.value)

  if(ToDotask.value.length < 3 ) {
      alert("Enter correct value")
      return
  }
   
    var li = document.createElement("li")
    li.innerHTML = ToDotask.value
     console.log(li)

    var editbtn = document.createElement("button")
    editbtn.innerHTML = "Edit"
    editbtn.setAttribute("onClick", "edittodo(this)")

    var dltbtn = document.createElement("button")
    dltbtn.innerHTML = "Delete"
    dltbtn.setAttribute("onClick", "deltodo(this)")

    li.appendChild(editbtn)
    li.appendChild(dltbtn)
    todoparent.appendChild(li)
    ToDotask.value = ""

}

// delete all todo
function dlteall(){
  var todoparent = document.getElementById("todoparent")
  todoparent.innerHTML = ""
}

function deltodo(ele){
   console.log(ele.parentNode)
   ele.parentNode.remove()
}

function edittodo(ele){
  console.log(ele.previousSibling.nodeValue)

  var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
  ele.previousSibling.nodeValue = editVal
}