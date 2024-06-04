/*function cancel() {
  alert("Cancel button clicked!");
  // Add your cancel action logic here
}
function Display() {
  var username = document.getElementById("nam").value;
  var password = document.getElementById("pass").value;
  var email = document.getElementById("Email").value;

  alert(
    "Username: " + username+ "\nPassword: " + password + "\nEmail: " + email
);
}*/
function validate() {
  // Get input values
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var sid = document.getElementById("sid").value;
  var sex = document.querySelector('input[name="sex"]:checked');
  var email = document.getElementById("Email").value;
  var mnum = document.getElementById("Mnum").value;
  var dep = document.getElementById("Dep").value;
  var photo = document.getElementById("photo").value;

  // Check if any input is empty
  if (
    fname === "" ||
    lname === "" ||
    sid === "" ||
    sex === null ||
    email === "" ||
    mnum === "" ||
    dep === "" ||
    photo === ""
  ) {
    alert("Some input values are missed!");
  } else {
    //alert("Successfully filled!");
    alert(
      fname +
        "\nl " +
        lname +
        "\ns " +
        sid +
        "\ns " +
        sex +
        "\ne " +
        email +
        "\nm " +
        mnum +
        "\nd " +
        dep
    );
  }
}
