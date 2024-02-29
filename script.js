function calculate() {
  var input1 = document.getElementById("input1").value.trim();
  var input2 = document.getElementById("input2").value.trim();

  if (!isBinary(input1) || !isBinary(input2)) {
    alert("Please enter 1-digit binary values (0 or 1) only.");
    return;
  }

  input1 = parseInt(input1);
  input2 = parseInt(input2);

  var gateType = document.getElementById("gateType").value;
  var output;

  switch (gateType) {
    case "AND":
      output = input1 && input2;
      break;
    case "OR":
      output = input1 || input2;
      break;
    case "XOR":
      output = input1 ^ input2;
      break;
    case "XNOR":
      output = !(input1 ^ input2);
      break;
    case "NAND":
      output = !(input1 && input2);
      break;
    case "NOR":
      output = !(input1 || input2);
      break;
  }

  document.getElementById("output").textContent = output ? 1 : 0;
  if (output == 1) {
    document.querySelector(".output").style.backgroundColor = "#5be9b9";
  } else if (output == 0) {
    document.querySelector(".output").style.backgroundColor = "#e95b5b";
  }
}

function isBinary(input) {
  if (input == 1 || input == 0) {
    return true;
  }
  return false;
}

var inputField1 = document.getElementById("input1");
var inputField2 = document.getElementById("input2");

inputField1.addEventListener("input", function () {
  var inputValue = inputField1.value.trim();

  if (inputValue === "0") {
    inputField1.style.backgroundColor = "#e95b5b";
  } else if (inputValue === "1") {
    inputField1.style.backgroundColor = "#5be9b9";
  } else {
    inputField1.style.backgroundColor = "";
  }
});

inputField2.addEventListener("input", function () {
  var inputValue = inputField2.value.trim();

  if (inputValue === "0") {
    inputField2.style.backgroundColor = "#e95b5b";
  } else if (inputValue === "1") {
    inputField2.style.backgroundColor = "#5be9b9";
  } else {
    inputField2.style.backgroundColor = "";
  }
});
