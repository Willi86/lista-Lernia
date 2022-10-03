
const input = document.querySelector("input");

const addBtn = document.querySelector("button");

const list = document.querySelector("ul"); // ul is unordered list

const showCompleted = document.querySelector("p");

const toDoArray = [];//array to store the todos

let completedCount = 0;

addBtn.addEventListener("click", function() { // addBtn is clicked
let text = input.value;
toDoArray.push(text);
 // toDo is the paragraph tag

if (!text){alert("Please enter a task!"); //if the user doesn't enter a task, an alert will pop up
return;
}
else if (text.length > 10) {alert("Please enter a task less than 10 characters!");return;} //if the user enters a task longer than 10 characters, an alert will pop up
else if (text.length < 10) {alert("Task added!"); 
}
//forEach(item => { completedP ++;}); //completedP is the number of completed tasks

//......................
 //console.log(text);
const item = document.createElement("li"); //create a new list item
list.appendChild(item); //add the new list item to the list


const itemLabel= document.createElement("span");  // create a span element
itemLabel.innerText = text; //text is the input value

item.appendChild(itemLabel);

 input.value = "";  //clears input field  finally found it after 2 hours of searching
const itemBtn = document.createElement("button"); //create button
itemBtn.innerText= "Delete"; //add text to button
item.appendChild(itemBtn); //add button to li

itemBtn.addEventListener("click", function() { //add event listener to button
item.remove();
});

itemLabel.addEventListener("click", function() { //add event listener to button

if (item.getAttribute("class") == "completed") { //if class is completed

    item.setAttribute("class", "Not Completed"); //remove class
 
}


else {
     item.setAttribute("class", "completed"); //add class
     completedCount++;
     showCompleted.innerText = completedCount +"done"; //update completed count

} 


}
);


}
);




