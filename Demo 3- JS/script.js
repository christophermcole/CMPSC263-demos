// Get references to the DOM elements
const container = document.getElementById("container");
const colorButton = document.getElementById("colorButton");

function getRandomHexColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert the decimal values to hex format
  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  // Combine the hex values to form a complete hex color code
  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
}

function changeBackgroundColor() {
    container.style.backgroundColor = getRandomHexColor();
}

// Add a click event listener to the button
colorButton.addEventListener("click", changeBackgroundColor);
