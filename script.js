alert('voce ira entrar no mundo da programação')

function mudar() {
    let img = document.getElementById("image");
    if (img.src.match("img1")) {
        img.src = "img_prog-01.png";
    } else {
        img.src = "img_prog-05.png";
    }
}
