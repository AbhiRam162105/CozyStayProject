// JavaScript function to send a POST request
function sendPostRequest() {
  // Get form elements by their IDs
  const checkin = document.getElementById("ckin").value;
  const checkout = document.getElementById("ckout").value;
  const rooms = document.querySelector(".q1").textContent;
  const adults = document.querySelector(".q2").textContent;
  const children = document.querySelector(".q3").textContent;
  const massage = document.querySelector(".q4").textContent;
  const drySpa = document.querySelector(".q5").textContent;
  const TotalBase = document.getElementById("TotalBase").textContent;
  const TotalCost = document.getElementById("TotalCost").textContent;

  // Create an object with the form data
  const formData = {
    Checkin: checkin,
    Checkout: checkout,
    NoOfRooms: Number(rooms),
    NoOfAdults: Number(adults),
    NoOfChildren: Number(children),
    Massage: Number(massage),
    DrySpa: Number(drySpa),
    TotalBase: Number(TotalBase),
    TotalCost: Number(TotalCost),
  };

  // Send a POST request to the server
  fetch("http://localhost:8001/api/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Handle a successful response here
        console.log("POST request was successful");
      } else {
        // Handle errors here
        console.error("POST request failed");
      }
    })
    .catch((error) => {
      // Handle network or other errors here
      console.error("Error:", error);
    });
}
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  sendPostRequest(); // Call the function to send the POST request
});
