let con1=document.querySelector("#con1").addEventListener("click",function(){
  localStorage.setItem("gender","Male")
  window.location.href="bday.html";
});
let con2=document.querySelector("#con2").addEventListener("click",function(){
  localStorage.setItem("gender","Female")
  window.location.href="bday.html";
});
console.log(gender)