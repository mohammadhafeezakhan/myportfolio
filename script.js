const text = ["Full Stack Developer", "Java Developer", "Python Developer"];
let i = 0, j = 0;

function type() {
    document.getElementById("typing").innerText = text[i].slice(0, j++);
    if (j > text[i].length) {
        j = 0;
        i = (i + 1) % text.length;
    }
    setTimeout(type, 120);
}

type();