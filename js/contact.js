////////// VARIABLES //////////

// Inputs
const form = document.getElementById("form");
const inputs = document.querySelectorAll('input');
const firstName = document.getElementById("input-first-name");
const lastName = document.getElementById("input-last-name");
const email = document.getElementById("input-email");
const telephone = document.getElementById("input-telephone");
const selectBox = document.getElementById("select-box");
const select = document.getElementById("select");

// Alerts
const alertFirstName = document.querySelector(".alert-first-name");
const alertLastname = document.querySelector(".alert-last-name");
const alertEmail = document.querySelector(".alert-email2");
const alertTelephone = document.querySelector(".alert-telephone");
const alertSelect = document.querySelector(".alert-select");

// Modals
const modalAlert = document.getElementById("modal-alert");
const modalSuccess = document.getElementById("modal-success");
const closeModalAlert = document.getElementById("close-modal-alert");
const closeModalSuccess = document.getElementById("close-modal-success");

// Regular Expressions
const expName = /^[\S][a-zA-ZÀ-ÿ\s]{1,20}$/;
const expEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{4,63}\.){1,125}(com|net|org|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b$/i;
const expTelephone = /^[\S][0-9]{9}$/;


////////// VALIDATIONS //////////
function validateRegularExpressions(e) {
  switch (e.target.id) {

    case "input-first-name":
      if (!expName.test(firstName.value)) {
        firstName.style.borderBottom = "2px solid #c899ff"
        alertFirstName.style.visibility = "visible";
      }
      else {
        firstName.style.borderBottom = "2px solid #009688"
        alertFirstName.style.visibility = "hidden";
      }
      break;

    case "input-last-name":
      if (!expName.test(lastName.value)) {
        lastName.style.borderBottom = "2px solid #c899ff"
        alertLastname.style.visibility = "visible";
      }
      else {
        lastName.style.borderBottom = "2px solid #009688"
        alertLastname.style.visibility = "hidden";
      }
      break;

    case "input-email":
      if (!expEmail.test(email.value)) {
        email.style.borderBottom = "2px solid #c899ff"
        alertEmail.style.visibility = "visible";
      }
      else {
        email.style.borderBottom = "2px solid #009688"
        alertEmail.style.visibility = "hidden";
      }
      break;

    case "input-telephone":
      if (!expTelephone.test(telephone.value)) {
        telephone.style.borderBottom = "2px solid #c899ff"
        alertTelephone.style.visibility = "visible";
      }
      else {
        telephone.style.borderBottom = "2px solid #009688"
        alertTelephone.style.visibility = "hidden";
      }
      break;

    case "select":
      if (select.value == 0) {
        selectBox.style.borderBottom = "2px solid #c899ff"
        alertSelect.style.visibility = "visible";
      }
      else {
        selectBox.style.borderBottom = "2px solid #009688"
        alertSelect.style.visibility = "hidden";
      }
      break;
  }
}

/* Replace white spaces on the input email */
email.addEventListener("input", () => {
  email.value = email.value.replace(/ /g, "");
})

////////// EVENTS //////////
inputs.forEach((input) => {
  input.addEventListener('focus', validateRegularExpressions);
  input.addEventListener('keyup', validateRegularExpressions);
  input.addEventListener('blur', validateRegularExpressions);
});

select.addEventListener('input', validateRegularExpressions);
select.addEventListener('focus', validateRegularExpressions);
select.addEventListener('keyup', validateRegularExpressions);
select.addEventListener('blur', validateRegularExpressions);


////////// SUBMIT FORM //////////
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!expName.test(firstName.value) ||
    !expName.test(lastName.value) ||
    !expEmail.test(email.value) ||
    !expTelephone.test(telephone.value) ||
    select.value == 0) {

    modalAlert.classList.add("active");
  }

  else {
    form.reset();
    modalSuccess.classList.add("active");
  }
});

////////// CLOSE MODAL ALERT //////////
closeModalAlert.addEventListener("click", () => {
  modalAlert.classList.remove("active");
});

////////// CLOSE MODAL SUCCESS //////////
closeModalSuccess.addEventListener("click", () => {
  modalSuccess.classList.remove("active");
  location.href = "../index.html"
});