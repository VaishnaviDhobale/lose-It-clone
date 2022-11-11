document.querySelector("form").addEventListener("submit", fun);
let commanArr = JSON.parse(localStorage.getItem("commanData")) || [];
let emailValidation = [];
commanArr.forEach((el, i) => {
  emailValidation.push(el.email);
});
console.log(emailValidation);
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
  gender=capitalizeFirstLetter(gender)
  let status =0;
  if (pass !== cpass) {
    alert("Password Not Matched! Try Again");
  }
  if (
    name == "" ||
    email == "" ||
    pass == "" ||
    cweight == "" ||
    gweight == "" ||
    height == "" ||
    bday == "" ||
    gender == ""
  ) {
    alert("Please Submit All Data");
  }
  for (let i = 0; i < emailValidation.length; i++) {
    if (email == emailValidation[i]) {
      alert("This Email Allredy Save");
      status=1
      break;
    }
  }
  console.log(status)
  let obj = {
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
  commanArr.push(obj);
  if(status==0){
    localStorage.setItem("commanData", JSON.stringify(commanArr));
    alert("Sign Up Successfully!");
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
