
const input = document.querySelector("input");

const addBtn = document.querySelector("button");

const list = document.querySelector("ul");

const toDoArray = [];



addBtn.addEventListener("click", function() {

let text = input.value;
toDoArray.push(text);

 //console.log(text);
const item = document.createElement("li");
list.appendChild(item);


const itemLabel= document.createElement("span");
itemLabel.innerText = text;

item.appendChild(itemLabel);


itemLabel.addEventListener("click", function() {

if (item.getAttribute("class") == "completed") {
    item.setAttribute("class", "");
}


else {
     item.setAttribute("class", "completed");

}



}
);



}
);




