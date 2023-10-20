"use strict";

const btn = document.querySelectorAll(".btn");
const btn_punto = document.querySelector(".btn-punto");
const btn_numero = document.querySelectorAll(".btn_numero");
const textArea=document.querySelector(".textArea");
const ac=document.querySelector(".btn-ac");
const borrar=document.querySelector(".btn-borrar");
const division=document.querySelector(".btn-division");
const multiplicacion=document.querySelector(".btn-multiplicacion");
const suma=document.querySelector(".btn-suma");
const resta=document.querySelector(".btn-resta");
const igual=document.querySelector(".btn-igual");
const btn_color=document.querySelector(".btn-color");
const calculadora=document.querySelector(".div-container");

let oscuro = false;
let numeros =[0,1,2,3,4,5,6,7,8,9];

const modoClaro=()=>{
	btn_color.style.backgroundColor="#666";
	btn_color.addEventListener("mouseenter",()=>{
		btn_color.style.boxShadow="0 0 5px #000";
	})
	btn_color.addEventListener("mouseleave",()=>{
		btn_color.style.boxShadow="none";
	})
	document.body.style.backgroundColor="#fff";
	calculadora.style.backgroundColor="#eee";
	calculadora.style.boxShadow="0 0 10px 5px #bbb";
	textArea.style.backgroundColor="#000";
	textArea.style.backgroundColor="#fff";
	for(let btn of btn_numero){
		btn.style.backgroundColor="#fff";
		btn.style.color="#000";
		btn.style.border="none";
	}
	btn_punto.style.backgroundColor="#fff";
	btn_punto.style.color="#000";
	textArea.classList.remove("color");

	oscuro = false;
}
const modoOscuro=()=>{
	btn_color.style.backgroundColor="#eee";
	btn_color.addEventListener("mouseenter",()=>{
		btn_color.style.boxShadow="0 0 5px #aaa";
	})
	btn_color.addEventListener("mouseleave",()=>{
		btn_color.style.boxShadow="none";
	})
	document.body.style.backgroundColor="#000";
	calculadora.style.backgroundColor="#333";
	calculadora.style.boxShadow="0 0 10px 5px #222";
	textArea.style.backgroundColor="#444";
	for(let btn of btn_numero){
		btn.style.backgroundColor="#444";
		btn.style.color="#fff";
		btn.style.border="none";
	}
	btn_punto.style.backgroundColor="#444";
	btn_punto.style.color="#fff";
	textArea.classList.add("color");

	oscuro = true;
}
const revisarPunto=valor=>{
	let num=false;

	if(valor.includes(".")){
		let puntoIndex=valor.lastIndexOf(".");

		for(let i=1;valor[i]!=undefined;i++){
			let cont=0;

			for(let numero of numeros){
				if(valor[puntoIndex+i]==numero){
					cont++;
					break;
				}
			}
			if(cont==0&&valor[puntoIndex+i]!=undefined){
				punto=false;
			}
		}
	}else{
		punto=false;
	}
}

for(let botones of btn){
	botones.addEventListener("mouseenter",()=>{
		if(oscuro){
			botones.style.boxShadow="0 0 5px #aaa";
		}else{
			botones.style.boxShadow="0 0 5px #aaa";
		}
	})
	botones.addEventListener("mouseleave",()=>{
		botones.style.boxShadow="none";
	})
}

for(let button of btn_numero){
	const valor=button.textContent;

	button.addEventListener("click",e=>{
		textArea.value+=valor;
	})
}
ac.addEventListener("click",e=>{
	textArea.value="";
})

borrar.addEventListener("click",e=>{
	textArea.value=textArea.value.substring(0,textArea.value.length-1);
})

division.addEventListener("click",e=>{
    if(!textArea.value.endsWith("/")&&
    	!textArea.value.endsWith(".")&&
		textArea.value!=""){
		if(!textArea.value.endsWith("x")&&
		!textArea.value.endsWith(".")&&
		!textArea.value.endsWith("-")&&
		!textArea.value.endsWith("+")){
			textArea.value+="/";
		}else if(textArea.value.endsWith("+")){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="/";
		}else if(textArea.value.endsWith("/")){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="/";
		}else if(textArea.value[textArea.value.length-2]!="x"&&
				textArea.value[textArea.value.length-2]!="/"){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="/";
		}else if(!textArea.value.endsWith(".")){
			textArea.value=textArea.value.substring(0,textArea.value.length-2);
			textArea.value+="/";
		}
	}
})

multiplicacion.addEventListener("click",e=>{
    if(!textArea.value.endsWith("x")&&
    	!textArea.value.endsWith(".")&&
		textArea.value!=""){
		if(!textArea.value.endsWith("/")&&
		!textArea.value.endsWith(".")&&
		!textArea.value.endsWith("-")&&
		!textArea.value.endsWith("+")){
			textArea.value+="x";
		}else if(textArea.value.endsWith("+")){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="x";
		}else if(textArea.value.endsWith("/")){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="x";
		}else if(textArea.value[textArea.value.length-2]!="x"&&
				textArea.value[textArea.value.length-2]!="/"){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="x";
		}else if(!textArea.value.endsWith(".")	){
			textArea.value=textArea.value.substring(0,textArea.value.length-2);
			textArea.value+="x";
		}
	}
})

suma.addEventListener("click",e=>{
	if(!textArea.value.endsWith("+")&&!textArea.value.endsWith(".")&&
		textArea.value!=""){
		if(!textArea.value.endsWith("-")&&
		!textArea.value.endsWith(".")&&
		!textArea.value.endsWith("x")&&
		!textArea.value.endsWith("/")){
			textArea.value+="+";
		}else if(textArea.value.endsWith("x")||textArea.value.endsWith("/")){
			textArea.value=textArea.value.substring(0,textArea.value.length-1);
			textArea.value+="+";
		}else if(!textArea.value.endsWith(".")){
			let band=false;
			for(let numero of numeros){
				if(textArea.value[textArea.value.length-2]==numero){
					textArea.value=textArea.value.substring(0,textArea.value.length-1);
					textArea.value+="+";
					band=true;
				}
			}
			if(!band){
				textArea.value=textArea.value.substring(0,textArea.value.length-2);
				textArea.value+="+";
			}
		}
	}
})

resta.addEventListener("click",e=>{
	if(textArea.value==""){
		textArea.value+="-";
	}
	else if(!textArea.value.endsWith("+")&&
			!textArea.value.endsWith("-")&&
	textArea.value[textArea.value.length-2]!="x"&&
	textArea.value[textArea.value.length-2]!="/"&&
	!textArea.value.endsWith(".")&&
	textArea.value[textArea.value.length-2]!=undefined){
		textArea.value+="-";
	}else if(!textArea.value.endsWith("-")&&!textArea.value.endsWith(".")&&!textArea.value.endsWith("+")){
		textArea.value+="-";
	}else if(!textArea.value.endsWith(".")){
		textArea.value=textArea.value.substring(0,textArea.value.length-1);
		textArea.value+="-";
	}
})

let negativo=false;

igual.addEventListener("click",e=>{
	let valor=textArea.value;
	let x=true;
	do{
		if(valor.includes("x")){
			valor=valor.substring(0,valor.indexOf("x"))+"*"+valor.substring(valor.indexOf("x")+1,valor.length);
		}else x=false;
	}while(x);
	if(eval(valor).length>5)valor=valor.toFixed("2");
	textArea.value=eval(valor);
})

let punto=false;

btn_punto.addEventListener("click",e=>{
	revisarPunto(textArea.value);

	if(textArea.value!=""){
		for(let numero of numeros){
			if(textArea.value[textArea.value.length-1]==numero){
				if(!punto){
					textArea.value+=".";
					punto=true;
				}
			}
		}
	}
})

btn_color.addEventListener("click",e=>{
	if(!oscuro)modoOscuro();
	else modoClaro();
})