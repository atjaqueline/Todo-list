const letters = document.querySelectorAll(".letters");

function ramdomRbg() {
    const R = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    console.log(R, B, G);

}

letters.styles.color = ramdomRbg();