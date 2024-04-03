// RGB Colors
// Event Listener
document
  .getElementById("previewBtn")
  .addEventListener("click", previewBtnClicked);
document.getElementById("blk-btn").addEventListener("click", blkBtnClicked);
document.getElementById("wte-btn").addEventListener("click", wteBtnClicked);
// Event Function
function previewBtnClicked() {
  //Input
  let red = +document.getElementById("red-in").value;
  let green = +document.getElementById("green-in").value;
  let blue = +document.getElementById("blue-in").value;
  // Process
  let rgbColour = `rgb(${red}, ${green}, ${blue})`;
  let rgbNumber = `${red}, ${green}, ${blue}`;

  // Output
  document.getElementById("display").style.background = rgbColour;
  document.getElementById("results").innerHTML = rgbNumber;
}
// Event Function
function blkBtnClicked() {
  document.getElementById("display").style.background = "rgb(0, 0, 0)";
  document.getElementById("results").innerHTML = "0, 0, 0";
}
// Event Function
function wteBtnClicked() {
  document.getElementById("display").style.background = "rgb(255, 255, 255)";
  document.getElementById("results").innerHTML = "255, 255, 255";
}
