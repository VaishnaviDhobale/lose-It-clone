document.querySelector("form").addEventListener("submit",fun);
let signupArr=JSON.parse(localStorage.getItem("signupArr"))||[]
function fun(event){
  event.preventDefault();
  let name=document.querySelector("#name").value;
  let email=document.querySelector("#email").value;
  let pass=document.querySelector("#pass").value;
  let cpass=document.querySelector("#cpass").value;
  let obj={
    name,email,pass,cpass
  }
  signupArr.push(obj)

  localStorage.setItem("signupArr",JSON.stringify(signupArr))
}