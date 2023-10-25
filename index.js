
// Remove the existing 'main' element if it exists
const existingMain = document.querySelector("main");
if (existingMain) {
  existingMain.remove();
}

// Create a new <h1> element with the id 'victory'
const newHeader = document.createElement("h1");
newHeader.id = "#victory";
newHeader.textContent = "victory is the champion";

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);


