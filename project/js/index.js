// slider
let first=document.querySelector("#first").addEventListener("click",scroll);
let last=document.querySelector("#last").addEventListener("click",scrolr);



// slider for approch
document.querySelector("#left").addEventListener("click",scroll);
document.querySelector("#right").addEventListener("click",scrolr);
function scroll(){
  var left=document.querySelector(".divs")
  left.scrollBy(1080,0);

  var slide=document.querySelector(".slide")
  slide.scrollBy(830,0);
}


function scrolr(){
  var right=document.querySelector(".divs")
  right.scrollBy(-1080,0);

  var slide=document.querySelector(".slide")
  slide.scrollBy(-830,0);
}

