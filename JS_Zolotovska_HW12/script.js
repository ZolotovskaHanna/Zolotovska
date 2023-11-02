document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--class');
    const nameInput = document.querySelector('input[name="name"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const telInput = document.querySelector('input[name="tel"]');
    const emailInput = document.querySelector('input[name="email"]');
    const addressInput = document.querySelector('input[name="adress"]');

    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        formGroup.appendChild(errorDiv);
    }
    function validateForm() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => errorMessage.remove());

        if (nameInput.value === '') {
            showError(nameInput, 'Поле "Name" є обов\'язковим');
        }
        if (messageInput.value.length < 5) {
            showError(messageInput, 'Поле "Message" повинно бути не менше 5 символів');
        }

        if (!phoneRegex.test(telInput.value)) {
            showError(telInput, 'Початок має бути +380 та тільки цифрами)');
        }

        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Неправильний email');
        }

        if (addressInput.value === '') {
            showError(addressInput, 'Поле "Address" є обов\'язковим');
        }

        const errors = document.querySelectorAll('.error-message');
        if (errors.length > 0) {
            return false;
        }

        console.log('Name:', nameInput.value);
        console.log('Message:', messageInput.value);
        console.log('Phone Number:', telInput.value);
        console.log('Email:', emailInput.value);
        console.log('Address:', addressInput.value);

        return true;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});


