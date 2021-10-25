const form = document.getElementById('form');
const rememberMeCheckBox =  document.getElementById('rememberMe');

console.log(navigator.credentials);
console.dir(PasswordCredential);

navigator.credentials.store();

const saveLoginForm = (event) => {
  if (window.PasswordCredential) {
    var credentials = new PasswordCredential(event.target);
    navigator.credentials.store(credentials);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveLoginForm(event);
});

