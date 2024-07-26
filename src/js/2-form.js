
const localStorageKey = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(localStorageKey))
    ?? { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const textarea = form.elements.message;

email.value = formData.email;
textarea.value = formData.message;

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = formData.message = "";
});