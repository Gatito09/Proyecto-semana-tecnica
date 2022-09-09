var imagen1 = document.getElementById("imagen");

var background = false;

function cambiar() {
    
    var background2 = document.getElementById('time');
    var background1 = document.getElementById("btn");
    var button = document.querySelector('.material-symbols-outlined');

    if (!background){
        imagen1.style.backgroundImage = "url(img/bg_white.jpg)";
        button.innerHTML = 'dark_mode';
        background1.style.backgroundColor = '#FFFFFF20';
        background2.style.backgroundColor = '#FFFFFF20';
        background = true;
    } else{
        imagen1.style.backgroundImage = "url(img/bg_black.jpg)"
        button.innerHTML = 'light_mode';
        background1.style.backgroundColor = '#2b2b2b60'
        background2.style.backgroundColor = '#2b2b2b60'
        background = false;
    }
}