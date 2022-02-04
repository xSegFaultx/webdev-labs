let currentFontsize=1.4;

const makeBigger = () => {
   currentFontsize += 0.2;
   updateFontSize();
};

const makeSmaller = () => {
   currentFontsize -= 0.2;
   updateFontSize();
};

const updateFontSize = () =>{
   document.querySelector(".content").style.fontSize = `${currentFontsize}em`;
   document.querySelector("h1").style.fontSize = `${currentFontsize+1}em`;
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

