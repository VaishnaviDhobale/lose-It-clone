let form=document.querySelector("form").addEventListener("submit",fun);
function fun(event){
  event.preventDefault();
  let bday=document.querySelector("#date").value;
  localStorage.setItem("bday",bday)
  window.location.href="mainsignup.html"
}