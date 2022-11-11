let form=document.querySelector("form").addEventListener("submit",fun);
let heightArr=JSON.parse(localStorage.getItem("height")) ||[]
function fun(event){
  event.preventDefault()
  let height=document.querySelector("#height").value;
  let unit=document.querySelector("#unit1").value;
  let obj={
    height,unit
  }
  heightArr.push(obj)
  console.log(heightArr)

  localStorage.setItem("height",JSON.stringify(heightArr));
  window.location.href="gender.html";
  
}