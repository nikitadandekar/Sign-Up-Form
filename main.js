var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  console.log(name);

  var Last = document.getElementById("Last").value;
  console.log(Last);

  var email = document.getElementById("email").value;
  console.log(email);

  var password = document.getElementById("password").value;
  console.log(password);

  var confirm = document.getElementById("confirm").value;
  console.log(confirm);
});
