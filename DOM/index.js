document.addEventListener("DOMContentLoaded", domContentLoaded);

function domContentLoaded() {
  fillDocument();
  logRectangleIDs();
  changeTitle();
}

function fillDocument() {
  const h1 = document.createElement("H1");
  h1.innerText = "Keeping Up With the Javascripts: ES6"
  document.body.appendChild(h1);

  const h2 = document.createElement("H2");
  h2.innerText = "Homework Assignment #7: The DOM"
  document.body.appendChild(h2);

  const container = document.createElement("DIV");
  container.id = "rectangleWrapper";
  container.style.padding = "50px 50px 0";
  document.body.appendChild(container);

  const colors = [
    "#FF0000",
    "#FFC0CB",
    "#FFA500",
    "#FFFF00",
    "#800080",
    "#008000",
    "#0000FF",
    "#A52A2A",
    "#808080",
    "#ADFF2F",
  ];

  for (let color of colors) {
    const rectangle = document.createElement("DIV");
    rectangle.id = color;
    rectangle.className = "rectangle";
    rectangle.style.borderColor = color;

    const label = document.createElement("P");
    label.innerText = color;

    container.appendChild(rectangle);
    container.appendChild(label);
  }
}

function logRectangleIDs() {
  console.log("Here are the rectangle IDs");

  const rectangleWrapper = document.getElementById("rectangleWrapper");

  const rectangles = rectangleWrapper.querySelectorAll(".rectangle");

  for (const rectangle of rectangles) {
    console.log(rectangle.id);
  }
}

function changeTitle() {
  const h1 = document.getElementsByTagName("H1")[0];
  document.title = h1.innerText;
}