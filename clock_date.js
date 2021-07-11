const clock = document.getElementById("clock");
const today = document.getElementById("date");

function getClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function showToDay() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth()).padStart(2,'0');
  const date = String(now.getDate()).padStart(2,'0');
  const day = now.getDay();
  const weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  today.innerText = 
  `${year}. ${month}. ${date}. ${weeks[day]}`
}
showToDay();