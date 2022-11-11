let commanData=JSON.parse(localStorage.getItem("commanData"));
function displayTable(data){
  // let i=0;
  document.querySelector("tbody").innerHTML=null;
  data.forEach((element,index)=>{
    // i++;
      let row=document.createElement('tr');
      let name=document.createElement("td");
      name.innerText=element.name;

      let email=document.createElement("td");
      email.innerText=element.email;

      let pass=document.createElement("td");
      pass.innerText=element.pass;
      
      let cweight=document.createElement("td");
      cweight.innerText=element.cweight;

      let gweight=document.createElement("td")
      gweight.innerText=element.gweight;

      let height=document.createElement("td")
      height.innerText=element.height;

      let bday=document.createElement("td")
      bday.innerText=element.bday;

      let gender=document.createElement("td")
      gender.innerText=element.gender;

      let del=document.createElement("td");
      del.innerText="Delete";
      del.style.backgroundColor="red";
      del.style.color="white"
      del.style.cursor="pointer"
      del.addEventListener("click",function(){
        deleteData(data,index)
      })
      row.append(name,email,pass,cweight,gweight,height,bday,gender,del)
      document.querySelector("tbody").append(row)

  })
}
function deleteData(data,index){
  console.log(index)
  data.splice(index,1);
  localStorage.setItem("commanData",JSON.stringify(data))
  displayTable(data);

}
displayTable(commanData);