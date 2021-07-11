const body = document.querySelector("body");
const images = [0,1,2,3,4,5,6,7,8];

const choice = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${choice}.jpg`;
bgImg.classList.add("bgImg");
//document.body.appendChild(bgImg);
body.style.backgroundImage = `url(${bgImg.src})`;
