var button = document.getElementById("button");
var dataInput = document.getElementById("data-input");

button.addEventListener("click", function () {
  var data = dataInput.value;
  var result = "";

  console.log(data);

  if (data == 0) {
    result = "Invalid input";
  } else {
    if (data % 3 == 0 && data % 5 == 0) {
      result = "FizzBuzz";
    } else if (data % 3 == 0) {
      result = "Fizz";
    } else if (data % 5 == 0) {
      result = "Buzz";
    } else {
      result = data;
    }
  }

  var p = document.createElement("p");
  p.textContent = result;

  var output = document.getElementById("output");
  output.appendChild(p);
});
