let Cost = 0;
const totalBase = document.getElementById("TotalBase");
const totalCost = document.getElementById("TotalCost");
fetch("http://localhost:8001/api/rooms/6519c2d39c91f8825ccc3397")
  .then((response) => response.json())
  .then((data) => {
    Cost = data.price;
    console.log(Cost);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const q1 = document.getElementsByClassName("q1")[0];

function increment1() {
  let val = Number(q1.textContent);
  val++;
  q1.textContent = val;
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

function decrement1() {
  let val = Number(q1.textContent);
  if (val > 1) {
    val--;
    q1.textContent = val;
  }
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

// Get references to HTML elements
const q2 = document.getElementsByClassName("q2")[0];

function increment2() {
  let val = Number(q2.textContent);
  val++;
  q2.textContent = val;
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

function decrement2() {
  let val = Number(q2.textContent);
  if (val > 1) {
    val--;
    q2.textContent = val;
  }
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

// Get references to HTML elements

const q3 = document.getElementsByClassName("q3")[0];

function increment3() {
  let val = Number(q3.textContent);
  val++;
  q3.textContent = val;
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

function decrement3() {
  let val = Number(q3.textContent);
  if (val > 0) {
    val--;
    q3.textContent = val;
  }
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

const q4 = document.getElementsByClassName("q4")[0];

function increment4() {
  let val = Number(q4.textContent);
  val++;
  q4.textContent = val;
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

function decrement4() {
  let val = Number(q4.textContent);
  if (val > 0) {
    val--;
    q4.textContent = val;
  }
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

const q5 = document.getElementsByClassName("q5")[0];

function increment5() {
  let val = Number(q5.textContent);
  val++;
  q5.textContent = val;
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}

function decrement5() {
  let val = Number(q5.textContent);
  if (val > 0) {
    val--;
    q5.textContent = val;
  }
  totalBase.textContent =
    "₹" +
    (Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent);

  totalCost.textContent =
    "₹" +
    ((Number(q3.textContent) * (Cost / 2) + Number(q2.textContent) * Cost) *
      Number(q1.textContent) +
      Number(q4.textContent) * 240 +
      Number(q5.textContent) * 4000);
}
