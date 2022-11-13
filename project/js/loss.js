let url="https://636dfb4c182793016f327cd0.mockapi.io/p";
fetch(url)
.then((res)=>res.json())
.then((data)=>display(data))
.catch((err)=>console.log(err))

function display(data){
  console.log(data)
  data.forEach((element,index)=>{
    let div=document.createElement("div");
    div.setAttribute("id","mainDiv")
    let img=document.createElement("img");
    img.setAttribute("src",element.image)
    let childDiv=document.createElement("div")
    childDiv.setAttribute("id","childDiv")

    let name=document.createElement("h2");
    name.innerText=element.name;

    let disc=document.createElement("p");
    disc.innerText=element.disc;
    childDiv.append(name,disc)
    div.append(img,childDiv)
    document.querySelector(".con").append(div)

  })
  document.querySelector("#about").addEventListener("click",function(){
    window.location.href="about.html"
  })
}