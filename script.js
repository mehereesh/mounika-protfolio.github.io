var typed = new Typed(".text", {
    strings: ["UIUX DESIGNER" ,"WEB DEVELOPER"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


document.addEventListener("mousemove", function (e) {
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    smoke.style.left = `${e.clientX}px`;
    smoke.style.top = `${e.clientY}px`;
    document.body.appendChild(smoke);

    // Remove smoke element after animation
    setTimeout(() => {
        smoke.remove();
    }, 1500);
});

const sr = ScrollReveal({
    origin: 'bottom', // Animation starts from bottom
    distance: '50px', // Distance to move
    duration: 800,    // Animation duration in ms
    delay: 200,       // Delay before animation starts
    reset: true       // Reset animation on scroll (optional)
});

// Target elements for animation
sr.reveal('.home-content', { delay: 300 });
sr.reveal('.profile-photo', { delay: 400, origin: 'left' });
sr.reveal('.btn', { delay: 500, interval: 100 });
sr.reveal('.objective', { delay: 300, origin: 'right' });
sr.reveal('.case-studies .card', { delay: 300, interval: 200 });
sr.reveal('.education-container', { delay: 300 });
sr.reveal('.technical-skills-container .skill-card', { delay: 200, interval: 150 });