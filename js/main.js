let cookies = 0;
let pAuto = 100;
let pGrandma = 500;
let pFarm = 1000
let pFactory = 2000;
let nbAuto = 0;
let nbGrandma = 0;
let nbFarm = 0;
let nbFactory = 0;

function addCookies() {
    console.log('Add done')
    cookies++;
    document.getElementById('nbCookies').innerHTML = parseInt(cookies);
    console.log(cookies)
}

function auto() {
    if (cookies >= pAuto) {
        cookies = cookies - pAuto;
        pAuto = pAuto * 1.1;
        nbAuto++;
        document.getElementById('auto').innerHTML = nbAuto;
    }
}

function grandma() {
    if (cookies >= pGrandma) {
        pGrandma = pGrandma * 1.1;
        nbGrandma++;
        document.getElementById('grandma').innerHTML = nbGrandma;
    }
}

function farm() {
    if (cookies >= pFarm) {
        pFarm = pFarm * 1.1;
        nbFarm++;
        document.getElementById('farm').innerHTML = nbFarm;
    }
}

function factory() {
    if (cookies >= pFactory) {
        pFactory = pFactory * 1.1
        nbFactory++;
        document.getElementById('factory').innerHTML = nbFactory;
    }
}

function cps() {
    let cookiesSec = nbAuto + (nbGrandma * 10) + (nbFarm * 25) + (nbFactory * 50);
    cookies = cookies +  cookiesSec;
    document.getElementById('nbCookies').innerHTML = parseInt(cookies);
    document.getElementById('cps').innerHTML = cookiesSec;
}

setInterval(cps, 1000);

function ani(){
    document.getElementById('cookie').className = 'cookies__cookie_img animation';
    setTimeout(document.getElementById('cookie').className = 'cookies__cookie_img', 1000);
}