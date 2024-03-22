"use strict"

//Mostramos el slider a los 5s
setInterval(()=>{
    setTimeout(()=>{
        document.querySelector(".sliderLabel").setAttribute("hidden","");
        document.querySelector(".circle").setAttribute("hidden","");
    },3000)
    document.querySelector(".sliderLabel").removeAttribute("hidden");
    document.querySelector(".circle").removeAttribute("hidden");
},6000);

//Cartel de inicio
let actualPath = window.location.pathname;
let fileName = actualPath.substring(actualPath.lastIndexOf("/") + 1);
let changer=[];
const descriptionChanger = document.getElementById("mainDescriptionChanger");
console.log(fileName)

if(fileName=="en.html"){
    changer = [
        ["Web Developer","107px"],
        ["Web Designer","100px"]
    ];
    descriptionChanger.style.maxWidth="107px";
}else if(fileName=="index.html"){
    changer = [
        ["Desarrollador Web","130px"],
        ["Diseñador Web","107px"]
    ];
    descriptionChanger.style.maxWidth="130px";
}

let cont=1;

setInterval(()=>{
    if(cont>changer.length-1)cont=0;
    descriptionChanger.removeAttribute("style");
    descriptionChanger.innerText=changer[cont][0];
    descriptionChanger.style.maxWidth=changer[cont][1];

    cont++;
},3000);
   
//Lazy Load
const verifyEntry = entries =>{
    if(entries.target==document.querySelector(".footer")){
        observer.disconnect();
    }
    for(let e of entries){
        if(e.isIntersecting){
            e.target.style.animation="1s show forwards";
        }
    } 
}
const observer = new IntersectionObserver(verifyEntry);
let showElements = document.querySelectorAll(".show");

for(let element of showElements){
    observer.observe(element);
}
observer.observe(document.querySelector(".footer"));

//Collapsed Menu(responsive)
let collapsed = true;
const ul=document.querySelector(".menu-ul");
const nav=document.querySelector(".nav");
const lis=document.querySelectorAll(".li");

document.querySelector(".collapsed-menu-btn").addEventListener("click",function(){
    let liDelay = 0.2;

    if(collapsed){
        this.style.backgroundImage='url("./resources/logos/xIcon.png")';
        ul.removeAttribute("style");
        ul.style.display="block";
        nav.style.animation="1s navExpand forwards";
        for(let li of lis){
            li.style.animation=`1s showLi ${liDelay}s forwards`;
            liDelay+=0.2;
        }
        collapsed = false;
    }else{
        this.style.backgroundImage='url("./resources/logos/collapsedMenuLogo.png")';
        ul.style.display="none";
        nav.style.animation="1s navCollapse forwards";
        collapsed = true;
    }
})
addEventListener("click",e=>{
    if(!collapsed){
        if(!nav.contains(e.target)){
            document.querySelector(".collapsed-menu-btn").style.backgroundImage='url("./resources/logos/collapsedMenuLogo.png")';
            ul.style.display="none";
            nav.style.animation="1s navCollapse forwards";
            collapsed = true;
        }
    }
})

//Despliegue de descripcion home
const titles =document.querySelectorAll(".op");

for(let op of titles){
    op.addEventListener("click",e=>{
        for(let op of titles){
            if(!op.contains(e.target)&&op.firstElementChild.innerText.includes("-")){
                op.lastElementChild.style.animation="0.5s titleClose forwards";
                op.firstElementChild.lastElementChild.innerText="+";
            }
        }
        if(op.contains(e.target)){
            let title = op.firstElementChild;
            switch (title.firstElementChild.innerText){
                case "1": 
                    if(title.innerText.includes("+")){ 
                        title.lastElementChild.innerText="-";
                        op.lastElementChild.style.animation="0.5s titleShow forwards";
                    }else{
                        title.lastElementChild.innerText="+";
                        op.lastElementChild.style.animation="0.5s titleClose forwards"
                    }
                break;
                case "2":
                    if(title.innerText.includes("+")){ 
                        title.lastElementChild.innerText="-";
                        op.lastElementChild.style.animation="0.5s titleShow forwards";
                    }else{
                        title.lastElementChild.innerText="+";
                        op.lastElementChild.style.animation="0.5s titleClose forwards"
                    }   
                break;
                case "3":
                    if(title.innerText.includes("+")){ 
                        title.lastElementChild.innerText="-";
                        op.lastElementChild.style.animation="0.5s titleShow forwards";
                    }else{
                        title.lastElementChild.innerText="+";
                        op.lastElementChild.style.animation="0.5s titleClose forwards"
                    }
                break;
            }
        }
    })
}


//Media query
addEventListener("resize",function(){
    if(this.matchMedia("(min-width:700px)").matches){
        for(let li of lis){
            li.removeAttribute("style");
        }
        for(let op of titles){
            op.lastElementChild.removeAttribute("style");
        }
    }
})

//Lang change
let langBtn = document.querySelector(".langBtn");

langBtn.onclick=(e)=>{
     // Actual page
 
    if(fileName=="en.html"){
        location.href="index.html";
    }else{
        location.href="en.html";
    } 

}
 
//Redirecciones a mis redes
document.getElementById("facebook").addEventListener("click",e=>{
    location.href="http://www.facebook.com/profile.php?id=100023293604074";
})
document.getElementById("instagram").addEventListener("click",e=>{
    location.href="http://instagram.com/soymarlongh";
})
document.getElementById("linkedin").addEventListener("click",e=>{
    location.href="http://www.linkedin.com/";
})





