"use strict";

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".choose");
var elResult = document.querySelector(".result");
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var result = elInput.value;

  if (result % 3 === 0 && result % 5 === 0) {
    elResult.textContent = "fizz-bazz";
  } else if (result % 3 === 0) {
    elResult.textContent = "fizz";
  } else if (result % 5 === 0) {
    elResult.textContent = "buzz";
  } else {
    elResult.textContent = result;
  }
});