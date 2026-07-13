// ============================
// INTRO
// ============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("intro").style.display="none";

    },3500);

});




// ============================
// PASSWORD
// ============================

document.getElementById("unlockBtn").onclick=function(){


let code=document.getElementById("password").value;


if(code==="1507"){


document.getElementById("lockScreen").style.display="none";


document.getElementById("website").style.display="block";


createParticles();

typeTitle();

updateDays();



}

else{


document.getElementById("wrong").innerHTML=
"wrong passcode ❤️";


}



};







// ============================
// TITLE TYPEWRITER
// ============================


let title=
"happy anniversary, amal ❤️";


let subtitle=
"365 days of memories, smiles, and moments i'll always keep close.";


let titlePos=0;

let subtitlePos=0;




function typeTitle(){


if(titlePos<title.length){


document.getElementById("title").innerHTML+=
title[titlePos];


titlePos++;


setTimeout(typeTitle,100);



}

else{


typeSubtitle();


}



}



function typeSubtitle(){


if(subtitlePos<subtitle.length){


document.getElementById("subtitle").innerHTML+=
subtitle[subtitlePos];


subtitlePos++;


setTimeout(typeSubtitle,40);


}



}







// ============================
// DAYS COUNTER
// ============================


function updateDays(){



let start=new Date("2025-07-15");


let today=new Date();



let difference=today-start;



let days=Math.floor(

difference/(1000*60*60*24)

);



if(days<0){

days=0;

}



document.getElementById("days").innerHTML=days;



}









// ============================
// PARTICLES
// ============================


function createParticles(){


let box=document.getElementById("particles");



for(let i=0;i<120;i++){


let p=document.createElement("div");


p.className="particle";


p.style.left=Math.random()*100+"vw";


p.style.top=Math.random()*100+"vh";


p.style.animationDelay=
Math.random()*5+"s";



box.appendChild(p);



}


}







// ============================
// HEARTS
// ============================


document.addEventListener("mousemove",(e)=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=e.clientX+"px";


heart.style.top=e.clientY+"px";



document.getElementById("hearts")
.appendChild(heart);



setTimeout(()=>{


heart.remove();


},2000);



});








// ============================
// LETTERS
// ============================


let letters=[


`Dear Amal,

Until I found you, I never knew someone could become such an important part of my life.

Thank you for every smile, every conversation, and every memory that became special.

You will always be a beautiful chapter in my story.`,


`365 days are more than just a number.

They are the laughs, the talks, the little moments, and the memories that made this journey meaningful.

Every moment had its own place in my heart.`,


`No matter where life takes us,

I will always be grateful that our paths crossed.

Thank you for being part of my story.

Happy Anniversary ❤️`

];



let done=[false,false,false];



window.addEventListener("scroll",()=>{


document.querySelectorAll(".letter")
.forEach((box,index)=>{


let top=
box.getBoundingClientRect().top;



if(top<window.innerHeight-100 && !done[index]){


done[index]=true;


box.classList.add("show");


writeLetter(index);


}


});


});





function writeLetter(number){


let text=letters[number];


let i=0;


let element=document.getElementById(
"letter"+(number+1)
);



function typing(){


if(i<text.length){


element.innerHTML+=text[i];


i++;


setTimeout(typing,35);



}



}



typing();



}








// ============================
// QUOTE
// ============================


let quote=
"Some people become memories. Some memories become forever ❤️";


let q=0;



setTimeout(()=>{


function writeQuote(){


if(q<quote.length){


document.getElementById("quote").innerHTML+=
quote[q];


q++;


setTimeout(writeQuote,60);


}



}



writeQuote();


},5000);









// ============================
// FINAL MESSAGE
// ============================


document.getElementById("finalButton")
.onclick=function(){


document.getElementById("final")
.style.display="block";


explodeHearts();


typeFinal();


};




let final=
"Until I found you, I found a part of myself.\n\nHappy Anniversary, Amal ❤️";


let finalPos=0;



function typeFinal(){


if(finalPos<final.length){


let letter=final[finalPos];



if(letter==="\n"){


document.getElementById("finalText")
.innerHTML+="<br>";


}

else{


document.getElementById("finalText")
.innerHTML+=letter;


}



finalPos++;


setTimeout(typeFinal,80);


}



}







function explodeHearts(){


for(let i=0;i<150;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left="50vw";


heart.style.top="50vh";


heart.style.fontSize=
Math.random()*30+10+"px";


heart.style.transform=
`translate(
${Math.random()*800-400}px,
${Math.random()*800-400}px
)`;


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},3000);



}



}
