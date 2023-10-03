fetch("http://localhost:8001/api/rooms/6519c2d39c91f8825ccc3397")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_one");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519c4f09c91f8825ccc3399")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_two");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519c71c9c91f8825ccc339b")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_three");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519c8519c91f8825ccc339d")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_four");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519ca279c91f8825ccc339f")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_five");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519ca969c91f8825ccc33a1")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_six");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519cae79c91f8825ccc33a3")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_seven");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/6519cb509c91f8825ccc33a5")
  .then((response) => response.json())
  .then((data) => {
    const description = document.getElementById("room_eight");
    description.innerHTML = data.desc;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("http://localhost:8001/api/rooms/")
  .then((response) => response.json())
  .then((data) => {
    let number = 1;
    let id = "room" + number;
    for (number = 1; number <= 8; number++) {
      id = "room" + number;
      //Title
      const title = document.getElementById(id + "Title");
      title.textContent = data[number - 1].title;
      //Data
      const Data = document.getElementById(id + "Data");
      Data.textContent =
        data[number - 1].Area +
        "m²" +
        "/" +
        data[number - 1].view +
        "/" +
        data[number - 1].maxPeople +
        " Guests";
      //Size
      const size = document.getElementById(id + "Size");
      size.textContent = data[number - 1].Area + "m²";
      //Guest
      const guest = document.getElementById(id + "Guest");
      guest.textContent = data[number - 1].maxPeople;
      //Bed
      const BED = document.getElementById(id + "Bed");
      BED.textContent = data[number - 1].NoOfBeds;
      //Bath
      const Bath = document.getElementById(id + "Bath");
      Bath.textContent = data[number - 1].NoOfBath;
      //Text
      const Text = document.getElementsByClassName("text")[number - 1];
      Text.textContent = "₹" + data[number - 1].price+" /night";
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
const plus = document.getElementsByClassName("inc");
let val = 0;
const increment = function () {
  let count = document.getElementsByClassName("count1")[0].textContent;
  val = Number(count);
  val = val + 1;
  document.getElementsByClassName("count1")[0].innerHTML = val;
};
const decrement = function () {
  let count = document.getElementsByClassName("count1")[0].textContent;
  val = Number(count);
  if (val > 0) {
    val = val - 1;
  }
  document.getElementsByClassName("count1")[0].innerHTML = val;
};
const incrementRoom = function () {
  let count = document.getElementsByClassName("countr1")[0].textContent;
  val = Number(count);
  val = val + 1;
  document.getElementsByClassName("countr1")[0].innerHTML = val;
};
const decrementRoom = function () {
  let count = document.getElementsByClassName("countr1")[0].textContent;
  val = Number(count);
  if (val > 0) {
    val = val - 1;
  }
  document.getElementsByClassName("countr1")[0].innerHTML = val;
};

const incrementRoomtwo = function () {
  let count = document.getElementsByClassName("countr12")[0].textContent;
  val = Number(count);
  val = val + 1;
  document.getElementsByClassName("countr12")[0].innerHTML = val;
};
const decrementRoomtwo = function () {
  let count = document.getElementsByClassName("countr12")[0].textContent;
  val = Number(count);
  if (val > 0) {
    val = val - 1;
  }
  document.getElementsByClassName("countr12")[0].innerHTML = val;
};
const incrementtwo = function () {
  let count = document.getElementsByClassName("count12")[0].textContent;
  val = Number(count);
  val = val + 1;
  document.getElementsByClassName("count12")[0].innerHTML = val;
};
const decrementtwo = function () {
  let count = document.getElementsByClassName("count12")[0].textContent;
  val = Number(count);
  if (val > 0) {
    val = val - 1;
  }
  document.getElementsByClassName("count12")[0].innerHTML = val;
};
