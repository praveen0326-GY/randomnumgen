const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `Hello! "Thanks for subscribe"!`;
  } else {
    subResult.textContent = `Your not subscribed to this page!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa Card`;
  } else if (mastercardBtn.checked) {
    paymentResult.textContent = `You are using with Mastercard`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with paypal`;
  } else {
    paymentResult.textContent = `Please select payment type!`;
  }
};
