////////// NEWSLETTER //////////

// Variables
const btnNewsletter = document.getElementById("btn-newsletter");
const form = document.getElementById("form");
const inputs = document.querySelectorAll('input');
const firstName = document.getElementById("input-first-name");
const lastName = document.getElementById("input-last-name");
const email = document.getElementById("input-email");
const btnSubmit = document.getElementById("btn-submit");

// Alerts
const alertFirstName = document.querySelector(".alert-first-name");
const alertLastname = document.querySelector(".alert-last-name");
const alertEmail = document.querySelector(".alert-email2");


// Modals
const modalNewsletter = document.getElementById("modal-newsletter");
const closeModalNewsletter = document.getElementById("close-modal-newsletter");
const modalSuccess = document.getElementById("modal-success");
const closeModalSuccess = document.getElementById("close-modal-success");

// Regular Expressions
const expName = /^[\S][a-zA-ZÀ-ÿ\s]{1,20}$/;
const expEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{4,63}\.){1,125}[A-Z]{2,4}$/i;

/* Replace white spaces on the inputs */
email.addEventListener("input", () => {
  email.value = email.value.replace(/ /g, "")
})

btnNewsletter.addEventListener("click", () => {
  modalNewsletter.classList.add("active");
})

////////// VALIDATIONS //////////
function validateRegularExpressions(e) {
  switch (e.target.id) {

    case "input-first-name":
      if (!expName.test(firstName.value)) {
        firstName.style.borderBottom = "2px solid #c899ff"
        alertFirstName.style.display = "block";
      }
      else {
        firstName.style.borderBottom = "2px solid #009688"
        alertFirstName.style.display = "none";
      }
      break;

    case "input-last-name":
      if (!expName.test(lastName.value)) {
        lastName.style.borderBottom = "2px solid #c899ff"
        alertLastname.style.display = "block";
      }
      else {
        lastName.style.borderBottom = "2px solid #009688"
        alertLastname.style.display = "none";
      }
      break;

    case "input-email":
      if (!expEmail.test(email.value)) {
        email.style.borderBottom = "2px solid #c899ff"
        alertEmail.style.display = "block";
      }
      else {
        email.style.borderBottom = "2px solid #009688"
        alertEmail.style.display = "none";
      }
      break;
  }
}

////////// EVENTS //////////
inputs.forEach((input) => {
  input.addEventListener('focus', validateRegularExpressions);
  input.addEventListener('keyup', validateRegularExpressions);
  input.addEventListener('blur', validateRegularExpressions);
});

//////// FORM //////////
form.addEventListener("keyup", () => {
  let disabled = false;

  if (!expName.test(firstName.value)) {
    disabled = true;
    btnSubmit.style.opacity = "0.4";
    btnSubmit.style.cursor = "auto";
  }

  if (!expName.test(lastName.value)) {
    disabled = true;
    btnSubmit.style.opacity = "0.4";
    btnSubmit.style.cursor = "auto";
  }

  if (!expEmail.test(email.value)) {
    disabled = true;
    btnSubmit.style.opacity = "0.4";
    btnSubmit.style.cursor = "auto";
  }

  if (disabled === true) {
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = "0.4";
    btnSubmit.style.cursor = "auto";
  }
  else {
    btnSubmit.disabled = false;
    btnSubmit.style.opacity = "1";
    btnSubmit.style.cursor = "pointer";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  modalNewsletter.classList.remove("active");
  modalSuccess.classList.add("active");
});

////////// CLOSE MODAL NEWSLETTER //////////
closeModalNewsletter.addEventListener("click", () => {
  modalNewsletter.classList.remove("active");

  form.reset();

  firstName.style.borderBottom = "2px solid #f5deb3"
  lastName.style.borderBottom = "2px solid #f5deb3"
  email.style.borderBottom = "2px solid #f5deb3"

  alertFirstName.style.display = "none";
  alertLastname.style.display = "none";
  alertEmail.style.display = "none";

  btnSubmit.disabled = true;
  btnSubmit.style.opacity = "0.4";
  btnSubmit.style.cursor = "auto";
});

////////// CLOSE MODAL SUCCESS //////////
closeModalSuccess.addEventListener("click", () => {
  modalSuccess.classList.remove("active");
  location.href = "index.html"
})