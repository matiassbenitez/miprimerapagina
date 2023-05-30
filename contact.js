const form = document.getElementById("myForm"); // si no existe el formulario, da error y no funcionan las líneas que siguen a esta instruccion


form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
   // const regex =            /^    [^\s@]    +    @    [^\s@]    +    \.    [^\s@]{2,7}       $/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}