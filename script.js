const input = document.querySelector("input");

const addBtn = document.querySelector("button");

const list = document.querySelector("ul"); // ul is unordered list

const showCompleted = document.querySelector("p");

const toDoArray = []; //array to store the todos

let completedCount = 0;

addBtn.addEventListener("click", function () {
  // addBtn is clicked
  let text = input.value;
  toDoArray.push(text);
  // toDo is the paragraph tag

  if (!text || text.length>2) {
    var divClass =document.querySelector("#div1"); /*connecting the divClass with the id div1*/
    divClass.style.display = "block"; /*Finally */ /*displaying the divClass*/
     setTimeout(
      myGreeting,
      2000
    );
    function myGreeting() {
      document.getElementById("div1").innerHTML = "";
    } /*this function will change divClass be empty*/
    return;
  } 
  else {

  const item = document.createElement("li"); //create a new list item
  list.appendChild(item); //add the new list item to the list

  const itemLabel = document.createElement("span"); // create a span element
  itemLabel.innerText = text; //text is the input value

  item.appendChild(itemLabel);

  input.value = ""; //clears input field  finally found it after 2 hours of searching
  const itemBtn = document.createElement("button"); //create button
  itemBtn.innerText ="🗑️"; //add text to button
  item.appendChild(itemBtn); //add button to li
  itemBtn.className = "BtnClass"; //add class to button
  itemBtn.addEventListener("click", function () {
    //add event listener to button
    item.remove();
  });

  itemLabel.addEventListener("click", function () {
    //add event listener to button

    if (item.getAttribute("class") == "completed") {
      //if class is completed

      item.setAttribute("class", "Not Completed"); //remove class
    } else {
      item.setAttribute("class", "completed"); //add class
      completedCount++;
      showCompleted.innerText = completedCount + " done"; //update completed count
    }
  });
}});

