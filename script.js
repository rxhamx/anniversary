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


const password=document.getElementById("password");
const unlock=document.getElementById("unlockBtn");
const wrong=document.getElementById("wrong");


unlock.onclick=function(){


if(password.value==="1507"){


document.getElementById("lockScreen").style.display="none";

document.getElementById("website").style.display="block";


createStars();

startHero();

updateDays();


}else{


wrong.innerHTML="wrong passcode.";


password.value="";


}


};





// ============================
// HERO TYPEWRITER
// ============================


const title="happy anniversary.";

const subtitle=
"one year of memories, moments, and a story i'll always remember.";


let titleIndex=0;
let subtitleIndex=0;



function startHero(){

typeTitle();

}



function typeTitle(){


if(titleIndex<title.length){


document.getElementById("heroTitle").innerHTML+=
title[titleIndex];


titleIndex++;


setTimeout(typeTitle,100);


}else{


typeSubtitle();


}


}




function typeSubtitle(){


if(subtitleIndex<subtitle.length){


document.getElementById("heroSubtitle").innerHTML+=
subtitle[subtitleIndex];


subtitleIndex++;


setTimeout(typeSubtitle,35);


}


}






// ============================
// STARS
// ============================


function createStars(){


const stars=document.getElementById("stars");


for(let i=0;i<150;i++){


let star=document.createElement("div");


star.className="star";


star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


star.style.animationDelay=
Math.random()*5+"s";


stars.appendChild(star);


}


}






// ============================
// DAYS SINCE 15 JULY
// ============================


function updateDays(){


let start=new Date();


start.setMonth(6);
start.setDate(15);



let now=new Date();


let difference=now-start;



let days=Math.floor(
difference/(1000*60*60*24)
);



document.getElementById("days").innerHTML=days;


}








// ============================
// FLOATING HEARTS
// ============================


document.addEventListener("mousemove",(e)=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤";


heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";



document.getElementById("hearts").appendChild(heart);



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

Thank you for every smile, every conversation, and every memory that became special.`,


`A year is not just a number.

It is every laugh, every moment, every lesson, and every memory that became part of our story.

Some moments stay with us forever.`,


`No matter where life takes us,

I'll always be grateful our paths crossed.

Thank you for being a beautiful chapter of my life.

Happy Anniversary, Amal.`


];



let written=[false,false,false];



window.addEventListener("scroll",()=>{


document.querySelectorAll(".letter").forEach((box,index)=>{


let position=
box.getBoundingClientRect().top;



if(position < window.innerHeight-120 && !written[index]){


written[index]=true;

box.classList.add("show");


writeLetter(index);


}



});


});





function writeLetter(number){


let text=letters[number];

let index=0;


let target=document.getElementById(
"letter"+(number+1)
);



function typing(){


if(index<text.length){


target.innerHTML+=text[index];


index++;


setTimeout(typing,35);


}


}


typing();


}







// ============================
// QUOTE
// ============================


let quote=
"Some people become memories. Some memories become forever.";


let quoteIndex=0;



setTimeout(()=>{


function writeQuote(){


if(quoteIndex<quote.length){


document.getElementById("quote").innerHTML+=
quote[quoteIndex];


quoteIndex++;


setTimeout(writeQuote,50);


}


}


writeQuote();


},4000);








// ============================
// FINAL ENDING
// ============================


document.getElementById("secretButton").onclick=function(){


document.getElementById("finalScreen").style.display="block";


heartExplosion();


finalTyping();


};





const finalMessage=
"Until I found you, I found a part of myself.\n\nHappy Anniversary, Amal.";


let finalIndex=0;



function finalTyping(){


if(finalIndex<finalMessage.length){


let char=finalMessage[finalIndex];


if(char==="\n"){

document.getElementById("finalMessage").innerHTML+="<br>";

}else{

document.getElementById("finalMessage").innerHTML+=char;

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
