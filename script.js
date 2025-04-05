// function moveRandomE1(elm) {
//     elm.style.position = "absolute"
//     elm.style.top = Math.floor(Math.random() * 90 + 5) * "%";
//     elm.style.left = Math.floor(Math.random() * 90 + 5) * "%";
// }

// const moveRandom = document.querySelector("#move-random");

// moveRandom.addEventListener("mouseenter", function (e) {
//     moveRandomE1(e.target);
// });

document.getElementById("move-random").addEventListener("click", function() {
    const element = document.getElementById("move-random");

    const maxWidth = window.innerWidth - element.offsetWidth;
    const maxHeight = window.innerHeight - element.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    element.style.position = "absolute";
    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
});
