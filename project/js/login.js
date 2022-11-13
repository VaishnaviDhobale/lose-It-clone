document.querySelector("form").addEventListener("submit",fun)
function fun(event){
  let checkData=JSON.parse(localStorage.getItem("commanData"));
  event.preventDefault()
  let email=document.querySelector("#email").value;
  let pass=document.querySelector("#pass").value;
  let count=0;
  let userName;
  // console.log(checkData,email,pass)
  for(let i=0;i<checkData.length;i++){
    if(email==checkData[i].email && pass==checkData[i].pass){
      count++;
      userName=checkData[i].name;
      localStorage.setItem("userName",userName)
    }
  }
  if(count==0){
    alert("Wrong Credentials")
  }else{
    // console.log(userName)
    alert("Login Successfully!")
    window.location.href="welcome.html";
  }
}