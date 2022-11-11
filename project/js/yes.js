let form=document.querySelector("form").addEventListener("submit",fun);

let data=JSON.parse(localStorage.getItem("try")) || [];
function fun(event){
  event.preventDefault()
  let cw=document.querySelector("#cWeight").value;
  let m1=document.querySelector("#unit1").value;
  let gw=document.querySelector("#gWeight").value;
  let m2=document.querySelector("#unit2").value;
  let obj={
    cw,m1,gw,m2
  }
  data.push(obj)
  localStorage.setItem("try",JSON.stringify(data));
  window.location.href="height.html";
}
console.log(data)