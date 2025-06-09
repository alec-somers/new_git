// window.addEventListener("click", function () {
//   alert("You clicked on the page!");
// });

var clickCount = 0;

var logText = function (event) {
  console.log(event.target.textContent);
  clickCount++;
};

window.addEventListener("click", logText);
