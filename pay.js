// =========================
// Stars Generator
// =========================

const starsContainer = document.getElementById("stars");

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
    star.style.animationDelay = (Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}

// =========================
// Meteor Generator
// =========================

const meteorContainer = document.getElementById("meteors");

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left = (Math.random() * window.innerWidth + 200) + "px";

    meteor.style.top = (-200 - Math.random() * 300) + "px";

    meteor.style.height = (80 + Math.random() * 120) + "px";

    meteor.style.opacity = Math.random() * 0.5 + 0.5;

    meteor.style.animationDuration = (0.8 + Math.random() * 1.4) + "s";

    meteorContainer.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 2500);

}

// Meteor awal
for (let i = 0; i < 5; i++) {

    setTimeout(createMeteor, i * 500);

}

// Meteor terus-menerus
setInterval(() => {

    createMeteor();

}, 700);

// =========================
// Floating Glow Effect
// =========================

document.addEventListener("mousemove", (e) => {

    document.body.style.backgroundPosition =
        `${e.clientX / 80}px ${e.clientY / 80}px`;

});

// =========================
// Button Click Animation
// =========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});

// =========================
// Console Message 😎
// =========================

console.log("%cThanks for supporting ❤️", "color:#9b6dff;font-size:18px;font-weight:bold;");
console.log("%cMade by Farhan Maulana", "color:#ffffff;font-size:14px;");
