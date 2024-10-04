let input = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else if (e.target.innerHTML == "X") {
        string += "*";
        input.value = string;
      } else {
        string += e.target.innerHTML;
        input.value = string;
      }
    } catch (err) {
      console.log("Error:", err.message);
      input.value = "Error";
      string = "";
    }
  });
});
