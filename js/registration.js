// Function to set a cookie with a specific name, value, and expiration
function setCookie(cookieName, cookieValue, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Function to handle form submission and set cookies with form data
function handleFormSubmission() {
  var form = document.getElementById("validateForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form field values
      var userName = form.userName.value;
      var password = form.password.value;
      var passwordVerify = form.passwordVerify.value;
      var firstName = form.firstName.value;
      var lastName = form.lastName.value;
      var email = form.email.value;
      var phoneNumber = form.phoneNumber.value;

      // Set cookies with form data
      setCookie("userName", userName, 30); // Cookie expires in 30 days
      setCookie("password", password, 30);
      setCookie("passwordVerify", passwordVerify, 30);
      setCookie("firstName", firstName, 30);
      setCookie("lastName", lastName, 30);
      setCookie("email", email, 30);
      setCookie("phoneNumber", phoneNumber, 30);

      // Redirect to confirm.html
      window.location.href = "interest.html";
    });
  }
}

// Attach form submission handler when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  handleFormSubmission();
});


