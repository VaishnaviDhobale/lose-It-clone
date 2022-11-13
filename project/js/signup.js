document.querySelector("form").addEventListener("submit", fun);
let commanArr = JSON.parse(localStorage.getItem("commanData")) || [];
let emailValidation = [];
commanArr.forEach((el, i) => {
  emailValidation.push(el.email);
});
let i = 0;
function fun(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  name=capitalizeFirstLetter(name)
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  let cpass = document.querySelector("#cpass").value;
  let cweight = document.querySelector("#cweight").value;
  let gweight = document.querySelector("#gweight").value;
  let height = document.querySelector("#height").value;
  let bday = document.querySelector("#bday").value;
  let gender = document.querySelector("#gender").value;
  gender=capitalizeFirstLetter(gender);
  let status=true;
  if (pass !== cpass) {
    alert("Password Not Matched! Try Again");
    status=false;
  }
  else if(cweight<5 && gweight<5){
    alert("Sorry This Is Not For You!");
    status=false;
  }
  else if(cweight==gweight){
    alert("No Need To Try This You Are Alredy Perfect");
    status=false;
  }
  if(pass.length<6){
    status=false;
    alert("Enter Strong Password! You Have To Enter at least 6 Digit")
  }
  if ( name == "" || email == "" || pass == "" || cweight == "" || gweight == "" || height == "" || bday == "" || gender == "") {
    alert("Please Submit All Data");
    status=false
  }
  let count=0
  emailValidation.forEach((el)=>{
    if(email==el){
      count++;
    status=false;
  }
})
if(count>0){
  status=false;
    alert("You Are Alredy Our User Please Go To Login");
  }
  let obj={}
  if(status){
     obj = {
      name,
      email,
      pass,
      cpass,
      cweight,
      gweight,
      height,
      bday,
      gender,
    };
  }
  commanArr.push(obj);
  let i=0
  for(let key in obj){
    i++
  }
  if(i==9){
    localStorage.setItem("commanData", JSON.stringify(commanArr));
    alert("Sign Up Successfully!");
    document.querySelector("form").reset()
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
