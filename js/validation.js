window.addEventListener('DOMContentLoaded', function() {
  // Utility functions
  var $ = function(id) { return document.getElementById(id); };
  var _ = function(name) { return document.getElementsByName(name); };

  // Regular expressions for string validation
  var stringNumberReg = /^[a-zA-Z0-9-]*$/;
  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  // Array to store error elements
  var allErrors = [];

  // Function to check if a string is empty or contains only whitespace characters
  var isEmpty = function(userString) {
    var str = userString.trim().length;
    return !str;
  };

  // Function to display an error message associated with a specific field
  var isError = function(id, message) {
    var name = id.replace("Error", "");
    console.error("Error in field", name + ":", message);
    allErrors.push(_(name)[0]);
  };

  // Function to clear the error message associated with a specific field
  var isValid = function(id) {
    var name = id.replace("Error", "");
    var ele = _(name)[0];

    console.log("Field", name, "is valid");

    var index = allErrors.indexOf(ele);
    if (index > -1) {
      allErrors.splice(index, 1);
    }
  };

  // Function to validate the user name field
  var validateUserName = function(userName) {
    if (isEmpty(userName)) {
      isError('userNameError', "You must enter a user name!");
    } else if (!userName.match(stringNumberReg)) {
      isError('userNameError', "A user name can only contain letters and numbers!");
    } else {
      isValid("userNameError");
    }
  };

  // Function to validate the password field
  var validatePassword = function(password) {
    if (isEmpty(password)) {
      isError('passwordError', "A password is required!");
    } else if (password.length < 8) {
      isError('passwordError', "A password must be at least 8 characters long!");
    } else {
      isValid("passwordError");
    }
  };

  // Function to validate the password verification field
  var validateVerify = function(verify, password) {
    if (isEmpty(verify)) {
      isError('passwordVerifyError', "You must enter a password!");
    } else if (verify !== password) {
      isError('passwordVerifyError', "Your passwords do not match!");
    } else {
      isValid('passwordVerifyError');
    }
  };

  // Function to validate the first name field
  var validateFirstName = function(firstName) {
    if (isEmpty(firstName)) {
      isError('firstNameError', "A first name is required!");
    } else {
      isValid('firstNameError');
    }
  };

  // Function to validate the last name field
  var validateLastName = function(lastName) {
    if (isEmpty(lastName)) {
      isError('lastNameError', "A last name is required!");
    } else {
      isValid('lastNameError');
    }
  };

  // Function to validate the email field
  var validateEmail = function(email) {
    if (isEmpty(email)) {
      isError('emailError', "An email is required!");
    } else if (!email.match(emailReg)) {
      isError('emailError', 'You must enter a valid email!');
    } else {
      isValid('emailError');
    }
  };

  // Function to validate the phone number field
  var validatePhone = function(phone) {
    if (isEmpty(phone)) {
      isError('phoneNumberError', "A phone number is required!");
    } else if (!phone.match(phoneReg)) {
      isError('phoneNumberError', 'You must enter a valid phone number!');
    } else {
      isValid('phoneNumberError');
    }
  };

  // Function to set a cookie
  var setCookie = function(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  // Function to get a cookie
  var getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Function to validate all fields in the form
  var validateFields = function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      allErrors = []; // Reset the array of error elements

      validateUserName(form.userName.value);
      validatePassword(form.password.value);
      validateVerify(form.passwordVerify.value, form.password.value);
      validateFirstName(form.firstName.value);
      validateLastName(form.lastName.value);
      validateEmail(form.email.value);
      validatePhone(form.phoneNumber.value);

      if (allErrors.length === 0) {
        // Save form data to cookies
        setCookie("userName", form.userName.value, 30); // Cookie expires in 30 days
        setCookie("password", form.password.value, 30);
        setCookie("passwordVerify", form.passwordVerify.value, 30);
        setCookie("firstName", form.firstName.value, 30);
        setCookie("lastName", form.lastName.value, 30);
        setCookie("email", form.email.value, 30);
        setCookie("phoneNumber", form.phoneNumber.value, 30);

        // Redirect to confirm.html
        window.location.href = "interest.html";
      } else {
        allErrors[0].focus(); // Set focus on the first error element
      }
    });
  };

  // Get the form element and attach the validation logic
  var registrationForm = $('validateForm');
  if (registrationForm) {
    validateFields(registrationForm);
  }
});


  
  
