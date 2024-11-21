// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcTrapezoid);

// Find inputs
var input1El = document.getElementById("b1-in");
var input2El = document.getElementById("b2-in");
var input3El = document.getElementById("h-in");
var aOut = document.getElementById("area-out");
var picContain = document.getElementById("pic");

// Event Function
function calcTrapezoid() {
  // Input
  let b1 = +input1El.value;
  let b2 = +input2El.value;
  let h = +input3El.value;

  // Process
  let area = (1 / 2) * (b1 + b2) * h;
  area = area.toFixed(2);

  // Output
  aOut.innerHTML = area;
  aOut.style.border = "2px solid green";

  //   Clear inputs

  input1El.value = " ";
  input2El.value = " ";
  input3El.value = " ";

  picContain.innerHTML =
    "<img src='img/checkmark-removebg-preview.png' width='50px' />";
}

//   Dropdown menu

var unitDropDown = document.getElementById("units");
unitDropDown.addEventListener("change", unit123);
function unit123() {
  // Read pizza size
  let unit12 = unitDropDown.value;

  //   Make output sentence
  let output = unit12;

  //   Ouput to site

  document.getElementById("size1").innerHTML = output;
}
