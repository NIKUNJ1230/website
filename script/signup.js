let user = JSON.parse(localStorage.getItem("user")) || [];

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    email : document.getElementById("email").value,
    password : document.getElementById("password").value,
    cpassword : document.getElementById("cpassword").value
  }
  console.log(data);

  user.push(data)
  console.log(user);
  localStorage.setItem(("user"),JSON.stringify(user));
});
