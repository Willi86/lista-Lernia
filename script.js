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

  if (!text) {
    /* swal("Come on man", "Please enter a task!"); //if the user doesn't enter a task, an alert will pop up

    const Alret = document.createElement("text");
    Alret = "No empty text allowed";
    document.body.appendChild(text); */
    var divClass =
      document.querySelector(
        "#div1"
      ); /*connecting the divClass with the id div1*/
    divClass.style.display = "block"; /*Finally */ /*displaying the divClass*/
    const myTimeout = setTimeout(
      myGreeting,
      2000
    ); /*setting the timeout for 1 second,then next code will start */
    function myGreeting() {
      document.getElementById("div1").innerHTML = "";
    } /*this function will change divClass be empty*/
    return;
  } else if (text.length > 20) {
    /*i removed the sweetalret and add the same as above so it will show the same message 
  if i still have time i will search on how to have a new message instead, 
  I still have a problem with making the code and the function run again, it only run once */
    var divClass = document.querySelector("#div1");
    divClass.style.display = "block"; /*Finally */
    const myTimeout = setTimeout(myGreeting, 1000);
    function myGreeting() {
      document.getElementById("div1").innerHTML = "";
    }

    /*swal("Please enter a task less than 50 characters!");*/
    return;
  } /*if the user enters a task with more than 20 characters, an alert will pop up, But now i commented it
   because its not needed anymore*/

  /*else if (text.length < 20) {
    swal("Task added!");
  }*/
  //forEach(item => { completedP ++;}); //completedP is the number of completed tasks

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
});
