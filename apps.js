var listOfActivities = [];


var input = document.getElementById("input");


var todolist = document.getElementById("todolist");


document.getElementById("button").onclick = click;



function click() {

  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  displayList();
}


function displayList() {

  todolist.innerHTML = " ";


  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  listOfActivities.splice(i, 1);
  displayList();
}



function editItem(i) {
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  displayList();
}