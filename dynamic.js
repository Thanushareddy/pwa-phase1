function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }
};
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
}
)
var left=document.querySelector(".left");
function profile(p){
var img=document.createElement("img");
img.src=p.image;
left.appendChild(img);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.degree;
left.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.phno;
left.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.emailid;
left.append(h5);
}
c
