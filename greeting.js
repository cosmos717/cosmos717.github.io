const loginForm = document.querySelector(".login-container .login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username +"!";
  localStorage.setItem(USERNAME_KEY,username);
  paintGreeting(username);
}

function paintGreeting (data){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${data}!`;  //백틱 사용!!
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
