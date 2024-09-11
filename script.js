function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




function loadingAnimation() {
  const heads = document.querySelectorAll("#loader h3")

  heads.forEach((head) => {
    gsap.to("#loader h3", {
      opacity: 1,
      stagger: 0.3,
    })

    gsap.to("#loader h3", {
      opacity: 0,
      stagger: 0.3,
    })
  })

  gsap.to("#loader #progress-bar", {
    width: "20vw",
    duration: 3.3
  })

  gsap.to("#loader", {
    top: "-100%",
    delay: 4.5
  })
}
loadingAnimation()


const dots = [];
const cursor = {
    x: 0,
    y: 0,
};


for (let i = 0; i < 40; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    document.body.appendChild(dot);
    dots.push(dot);
}

function draw() {

    document.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
    });


    let x = cursor.x;
    let y = cursor.y;

    dots.forEach((dot, index) => {
        let nextDot;
        if (dots[index + 1]) {
            nextDot = dots[index + 1];
        } else {
            nextDot = dots[0];
        }

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        x += (nextDot.offsetLeft - dot.offsetLeft) * 0.55;
        y += (nextDot.offsetTop - dot.offsetTop) * 0.55;
    });
}

setInterval(draw, 13);