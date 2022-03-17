// Create a close button and append it to each list item

const myNodelist = document.getElementsByTagName("li");
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("spam");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    myNodelist[i].append(span);
}

// Add class "Checked" when list is clicked

const listItem = document.querySelector("ul");

listItem.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
});



// Click on a close button to hide the current list item

const closeBtn = document.querySelector("ul");

closeBtn.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAM') {
        e.target.parentElement.remove();
    }
});


// Create a new list item when clicking "Add" button

const addItem = document.querySelector(".addBtn");

addItem.addEventListener('click', function() {
    const li = document.createElement("li")
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must enter a task!");
    } else {
        document.getElementById("myUL").append(li);
    }
    document.getElementById("myInput").value = "";
    const span = document.createElement("spam");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    li.append(span);
});












/*

function ramdomRgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}


const letters = document.getElementsByClassName('letter')

console.log(letters)




letters.style.color = "blue";
*/