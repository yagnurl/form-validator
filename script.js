const form = document.getElementById('form'); const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');


const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // console.log(isValid);
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    // Do something with user data
    console.log(user);
}


function processFormData(event) {
    event.preventDefault();
    //Validate Form data
    validateForm();
    // Submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }

    //Style main message for an error message
    if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.stlye.borderColor = 'red';
        return;
    }

    // Check to see if passwords matchs
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }

    else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red'
        return;
    }
    // If form is valid and pass match
    if (isValid && passwordsMatch) {
        message.textContent = 'Succesfully registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// Event Listener
form.addEventListener('submit', processFormData);
