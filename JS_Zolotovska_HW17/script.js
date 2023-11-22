// Бібліотека для валідації форми, з використанням класів
class ValidationLibrary {
    constructor(form) {
        this.form = form;
        this.fields = form.querySelectorAll('input, textarea');
    }

    validateField(field) {
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('data-req') && !field.value.trim()) {
            errorMessage = field.getAttribute('data-req');
            isValid = false;
        } else if (field.type === 'email' && field.hasAttribute('data-email') && !/^\S+@\S+\.\S+$/.test(field.value.trim())) {
            errorMessage = field.getAttribute('data-email');
            isValid = false;
        } else if (field.type === 'tel' && !(/^\+38\d{10}$/.test(field.value.trim()))) {
            errorMessage = 'Недійсний номер телефону, введіть у форматі +38';
            isValid = false;
        } else if (field.hasAttribute('data-min_length') && field.value.trim().length < parseInt(field.getAttribute('data-min_length'))) {
            errorMessage = field.getAttribute('data-min_message');
            isValid = false;
        }

        if (!isValid) {
            this.showFeedback(field, errorMessage, false);
        } else {
            this.showFeedback(field, '', true);
        }

        return isValid;
    }

    showFeedback(field, message, isSuccess) {
        const formGroup = field.parentElement;
        const errorElement = formGroup.querySelector('small') || document.createElement('small');
        if (!formGroup.contains(errorElement)) {
            formGroup.appendChild(errorElement);
        }

        formGroup.classList.remove('success', 'error');
        formGroup.classList.add(isSuccess ? 'success' : 'error');
        errorElement.textContent = message;
        errorElement.style.visibility = isSuccess ? 'hidden' : 'visible';
    }

    validate() {
        return Array.from(this.fields).every(field => this.validateField(field));
    }

    disableForm() {
        this.fields.forEach(field => field.disabled = true);
        const submitButton = this.form.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            const formData = new FormData(this.form);
            console.log('Form data:', Object.fromEntries(formData.entries()));
            console.log('Form attributes:', {action: this.form.action, method: this.form.method});
            this.disableForm();
        }
    }
}

const form = document.querySelector('.js--reg_form');
const validation = new ValidationLibrary(form);
form.addEventListener('submit', function(event) { validation.handleSubmit(event); });

// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
