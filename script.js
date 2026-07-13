// ============================
// INTRO
// ============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("intro").style.display="none";

    },3500);

});




// ============================
// PASSWORD 1507
// ============================


const unlockBtn=document.getElementById("unlockBtn");


unlockBtn.onclick=function(){


let password=document.getElementById("password").value;


if(password==="1507"){


document.getElementById("lockScreen").style.display="none";

document.getElementById("website").style.display="block";


createParticles();

startTitle();

updateDays();


}

else{


document.getElementById("wrong").innerHTML=
"wrong passcode ❤️";


}


};







// ============================
// TYPEWRITER HERO
// ============================


let titleText="happy anniversary, amal ❤️";


let subtitleText=
"365 days of memories, smiles, and moments i'll always remember.";



let titleIndex=0;

let subtitleIndex=0;



function startTitle(){

writeTitle();

}



function writeTitle(){


if(titleIndex<titleText.length){


document.getElementById("title").innerHTML+=
titleText[titleIndex];


titleIndex++;


setTimeout(writeTitle,100);


}

else{


writeSubtitle();


}


}



function writeSubtitle(){


if(subtitleIndex<subtitleText.length){


document.getElementById("subtitle").innerHTML+=
subtitleText[subtitleIndex];


subtitleIndex++;


setTimeout(writeSubtitle,40);


}


}









// ============================
// 365 DAYS COUNTER
// ============================


function updateDays(){



let startDate=new Date("2025-07-15");

let today=new Date();



let difference=today-startDate;



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


let area=document.getElementById("particles");



for(let i=0;i<100;i++){


let particle=document.createElement("div");


particle.className="particle";


particle.style.left=Math.random()*100+"vw";


particle.style.top=Math.random()*100+"vh";


particle.style.animationDelay=
Math.random()*5+"s";



area.appendChild(particle);


}


}









// ============================
// HEARTS FOLLOW MOUSE
// ============================


document.addEventListener("mousemove",(e)=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤";


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


const letters=[


`Dear Amal,

Until I found you, I never knew someone could become such an important part of my life.

Thank you for every smile, every conversation, and every beautiful memory we created together.`,


`365 days are not just numbers.

They are moments, laughs, conversations, and memories that became a part of my heart.

Every chapter had something special.`,


`No matter where life takes us,

I will always be grateful our paths crossed.

Thank you for being a beautiful chapter of my story.

Happy Anniversary ❤️`

];




let completed=[false,false,false];



window.addEventListener("scroll",()=>{


document.querySelectorAll(".letter").forEach((box,index)=>{


let position=
box.getBoundingClientRect().top;



if(position < window.innerHeight-100 &&
completed[index]===false){


completed[index]=true;


box.classList.add("show");


typeLetter(index);


}


});


});






function typeLetter(number){


let text=letters[number];

let i=0;


let target=
document.getElementById(
"letter"+(number+1)
);



function typing(){


if(i<text.length){


target.innerHTML+=text[i];


i++;


setTimeout(typing,35);


}


}


typing();


}









// ============================
// QUOTE
// ============================


let quoteText=
"Some people become memories. Some memories become forever ❤️";


let quoteIndex=0;



setTimeout(()=>{


function quoteTyping(){


if(quoteIndex<quoteText.length){


document.getElementById("quote").innerHTML+=
quoteText[quoteIndex];


quoteIndex++;


setTimeout(quoteTyping,60);


}


}


quoteTyping();


},5000);









// ============================
// FINAL ENDING
// ============================


document.getElementById("finalButton")
.onclick=function(){


document.getElementById("final")
.style.display="block";



heartExplosion();



finalTyping();



};




let finalMessage=
"Until I found you, I found a part of myself.\n\nHappy Anniversary, Amal ❤️";



let finalIndex=0;



function finalTyping(){


if(finalIndex<finalMessage.length){


let char=finalMessage[finalIndex];



if(char==="\n"){

document.getElementById("finalText")
.innerHTML+="<br>";

}

else{

document.getElementById("finalText")
.innerHTML+=char;

}



finalIndex++;


setTimeout(finalTyping,80);


}


}





function heartExplosion(){



for(let i=0;i<150;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤";


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
