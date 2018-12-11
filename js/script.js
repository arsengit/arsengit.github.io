
let i = 0;
let txt = "Arsen Alkamyan";
let newtxt = "Junior Front-end Developer"

let speedTypeWriter = 100;


function typeWriter(text, className, speed = speedTypeWriter) {
  if (i < text.length) {
    document.querySelector(`.${className}`).textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed, text, className);
  }
}

typeWriter(txt, "name");



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
