// ------ ---- -------- --------- ---------  JS CODE START  ------- ----- ---- ---- ------- -----//

const inputBox = document.getElementById("input-box");
const listCntnr = document.getElementById("list-cntnr");


function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCntnr.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listCntnr.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listCntnr.innerHTML );
}

function showTask(){
  listCntnr.innerHTML = localStorage.getItem("data");
}
showTask();