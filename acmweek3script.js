console.log("If you see this in browser, that means our script is running.");

const myClockFace = document.querySelector("#clock-face");
const myButton = document.querySelector(".btn");
const body = document.querySelector("body");

myClockFace.innerHTML = "23:59:59 PM";
myButton.style.color = "black";
myButton.style.fontSize = "2em";
body.style.backgroundColor = "#889bae";

console.log("Here is the clock face element:");
console.log(myClockFace);
console.log("Here is the button element:");
console.log(myButton);

const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    myClockFace.innerHTML = time;
};

// setTimeout(tick, 3 * 1000);
setInterval(tick, 1000);

const setBackgroundColorToWhite = () => {
    body.style.backgroundColor = "#fffef2";
};

myButton.addEventListener("click", setBackgroundColorToWhite);