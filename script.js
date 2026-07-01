// =========================
// STARS
// =========================

const stars = document.getElementById("stars");

const STAR_COUNT = 180;

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement("span");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    star.style.animationDelay = (Math.random() * 5) + "s";

    stars.appendChild(star);

}

// =========================
// METEOR
// =========================

const meteors = document.getElementById("meteors");

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left =
        (Math.random() * window.innerWidth + 200) + "px";

    meteor.style.top =
        (-200 - Math.random() * 250) + "px";

    meteor.style.height =
        (80 + Math.random() * 120) + "px";

    meteor.style.opacity =
        (Math.random() * .5 + .5);

    meteor.style.animationDuration =
        (0.8 + Math.random() * 1.5) + "s";

    meteors.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 2500);

}

// Meteor awal
for (let i = 0; i < 5; i++) {

    setTimeout(createMeteor, i * 400);

}

// Meteor terus-menerus
setInterval(() => {

    createMeteor();

}, 700);

// =========================
// CARD HOVER EFFECT
// =========================

const card = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * -8;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform = "rotateX(0) rotateY(0)";

});

// =========================
// BUTTON CLICK
// =========================

document.querySelectorAll(".link").forEach(link => {

    link.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 120);

    });

});

// =========================
// CONSOLE
// =========================

console.log("%cMrjhon Official", "color:#9b6dff;font-size:20px;font-weight:bold;");
console.log("%cMade with ❤️ by Mrjhon Mc", "color:#ffffff;font-size:14px;");
