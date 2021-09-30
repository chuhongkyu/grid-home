const number = document.querySelector(".number");
const home = document.querySelector(".home");
const Artworks = document.querySelector(".Artworks");
const profile = document.querySelector(".profile");
const nNFT = document.querySelector(".NFT");
const threeD = document.querySelector(".Print");
const teach = document.querySelector(".teach");
const appbtn = document.querySelector(".appbtn");

const openMenu = document.querySelector(".sidebar");
const menubtn = document.querySelector(".menu");
const menubtn2 = document.querySelector(".menu2");

const HIDDEN_CLASSNAME = "hidden";

function menuOpen(){
    openMenu.classList.toggle(HIDDEN_CLASSNAME);
}
menubtn.addEventListener("mousedown", menuOpen);  
menubtn2.addEventListener("mousedown", menuOpen);


const centerImg = document.querySelector(".center-image");

function defaultImg(){
    centerImg.style.backgroundImage = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/home.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
}

function HomeIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/index.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function ArtIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/Artworks.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function profilIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/profile.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function NFTIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/NFT.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function threeDIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/print.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function teachIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/teach.jpg')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function appIn(){
    centerImg.style.background = "url('/Users/hongkyuchu/Desktop/scss_grid/img/number/APP.png')";
    centerImg.style.backgroundPosition = "center";
    centerImg.style.backgroundSize = "cover";
    console.log("check");
}

function removeHidden(){
    openMenu.classList.remove(HIDDEN_CLASSNAME);
}

menubtn.addEventListener("mousedown",openMenu);

number.addEventListener("mouseout", defaultImg);

home.addEventListener("mouseover", HomeIn);
Artworks.addEventListener("mouseover", ArtIn);
profile.addEventListener("mouseover", profilIn);
nNFT.addEventListener("mouseover", NFTIn);
threeD.addEventListener("mouseover", threeDIn);
teach.addEventListener("mouseover", teachIn);
appbtn.addEventListener("mouseover", appIn);


