// TELA DE LOGIN
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});
email.addEventListener("blur", () => {
    checkEmail();
});
password.addEventListener("blur", () => {
    checkPassword();
});

function checkEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "Campo não preenchido!")
    }
    else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        errorInput(password, "Campo não preenchido!");
    }
    else {
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm() {
    checkEmail();
    checkPassword();

    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";   // verifica se cada item da lista apresenta a classe 'form-content'
    });
    if (isValid) {
        alert("Bem-vindo(a) de volta!");
    }
}

function errorInput(input, msg) {
    const formItem = input.parentElement;
    const textMsg = formItem.querySelector('a');
    textMsg.innerText = msg;
    formItem.className = "form-content error"
}