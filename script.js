const text = "HARISH RAGHAVENDAR";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

const rollingName =
document.getElementById("rollingName");

const splitContainer =
document.getElementById("splitContainer");

const continueBtn =
document.getElementById("continueBtn");

const homePage =
document.getElementById("homePage");

/* Set split text dynamically */
document.querySelector(".top-half").textContent = text;
document.querySelector(".bottom-half").textContent = text;

/* ---------------------
   ROLLING NAME
--------------------- */

text.split("").forEach((finalChar, index) => {

    const box =
    document.createElement("div");

    box.className =
    "letter-box";

    const strip =
    document.createElement("div");

    strip.className =
    "letter-strip";

    const loops = 4;

    for (let i = 0; i < loops; i++) {

        alphabet.split("").forEach(ch => {

            const div =
            document.createElement("div");

            div.className =
            "letter";

            div.textContent = ch;

            strip.appendChild(div);

        });

    }

    box.appendChild(strip);

    rollingName.appendChild(box);

    const target =
    alphabet.indexOf(finalChar);

    setTimeout(() => {

        /* Read actual height so it works on both desktop (80px) and mobile (50px) */
        const letterHeight =
        box.querySelector(".letter").offsetHeight || 80;

        const move =
        ((loops - 1) * alphabet.length + target) * letterHeight;

        strip.style.transform =
        `translateY(-${move}px)`;

    }, index * 80);

});

/* ---------------------
   AFTER ROLLING
--------------------- */

setTimeout(() => {

    rollingName.style.display =
    "none";

    splitContainer.style.display =
    "flex";

    const top =
    document.querySelector(".top-half");

    const bottom =
    document.querySelector(".bottom-half");

    setTimeout(() => {

        top.style.transform =
        "translateY(-18px)";

        bottom.style.transform =
        "translateY(18px)";

    }, 100);

    setTimeout(() => {

        continueBtn.style.opacity =
        "1";

    }, 600);

}, 4500);

/* ---------------------
   CLICK TO CONTINUE
--------------------- */

continueBtn.addEventListener(
"click",
() => {

    const top =
    document.querySelector(".top-half");

    const bottom =
    document.querySelector(".bottom-half");

    continueBtn.style.opacity =
    "0";

    top.style.transform =
    "translateY(-120vh)";

    bottom.style.transform =
    "translateY(120vh)";

    setTimeout(() => {

        homePage.style.opacity =
        "1";

        homePage.style.pointerEvents =
        "auto";

    }, 700);

});