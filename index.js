const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// ADD  EVENT

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate();
});

const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert("Registration Successful");
        swal("Welcome! " + usernameVal, "Registration Successful", "success");
    }
}

// For final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName("form_control");
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++) {
        if( formCon[i].className === "form_control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }
        else {
            return false;
        }
    }

}

//More Email Validation

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

// Defining the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    
    // Validating Username

    if (usernameVal === ""){
        setErrorMsg(username, "Username cannot be blank");
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, "Min. 3 characters required");
    }
    else {
        setSuccessMsg(username);
    }

    // Validating Email-Id

    if (emailVal === ""){
        setErrorMsg(email, "Email cannot be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, "Enter a valid Email ");
    }
    else {
        setSuccessMsg(email);
    }

     // Validating Phone Number

    if (phoneVal === ""){
        setErrorMsg(phone, "Phone Number cannot be blank");
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, "10 digits phone number required");
    }
    else {
        setSuccessMsg(phone);
    }

    // Validating Password

   if (passwordVal === ""){
       setErrorMsg(password, "Password cannot be blank");
   }
   else if (passwordVal.length <= 5) {
       setErrorMsg(password, "Min. 6 characters required");
   }
   else {
       setSuccessMsg(password);
   }

   // Validating Confirm Password

  if (cpasswordVal === ""){
      setErrorMsg(cpassword, "Confirm password cannot be blank");
  }
  else if (passwordVal != cpasswordVal) {
      setErrorMsg(cpassword, "Password does not match");
  }
  else {
      setSuccessMsg(cpassword);
  }

  successMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form_control error"
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success"
}
