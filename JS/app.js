// Create a close button and append it to each list item

const myNodelist = document.getElementsByTagName("li");
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("spam");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    myNodelist[i].append(span);
}
















function ramdomRgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}


const letters = document.getElementsByClassName('letter')

console.log(letters)




letters.style.color = "blue";