const GlobalUser = "";
const form = document.getElementById("Form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = new FormData(form);
  const Data = Object.fromEntries(payload);
  console.log(Data);
  fetch("http://localhost:8001/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  })
    .then((res) => res.json()) // Corrected this line by calling res.json()
    .then((data) => {
      console.log(data);
      GlobalUser = data.username;
    })
    .catch((err) => console.log(err));
});

export default { GlobalUser };
