const submitForm = document.getElementById('validate');
const email = document.getElementById('email');
const password = document.getElementById('psw');
const repeatPassword = document.getElementById('repeat-psw');

function required (field, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = "This Field is Required!";
        event.preventDefault();
        return false
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailFieldValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please Enter a Valid Email"
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function passwordFieldValidtion (event) {
    let pswRegex = /^[a-zA-Z0-9]+$/i;
    if (!password.value.match(pswRegex)) {
        password.nextElementSibling.innerText = "Password must contain letters or numbers only!"
        event.preventDefault();
        return false;
    } else if (!(password.value.length >= 8)) {
        password.nextElementSibling.innerText = "Password must contain 8 or more characters"
        event.preventDefault();
        return false;
    } else if (password.value != repeatPassword.value) {
        repeatPassword.nextElementSibling.innerText = "Your password should match!"
        event.preventDefault();
        return false;
    } else if (password.value = repeatPassword.value) {
            repeatPassword.nextElementSibling.innerText = ""
            return true;
        } else {
        password.nextElementSibling.innerText = ""
        return true;
    }

}

function validateForm (e) {
    required (email, e);
    required (password, e);
    required (repeatPassword, e);
    emailFieldValidation(e);
    passwordFieldValidtion (e);
    return true;
};

submitForm.addEventListener('submit', validateForm);