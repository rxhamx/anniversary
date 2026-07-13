// ============================
// INTRO + PASSCODE
// ============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("intro").style.display="none";

    },3200);

});



const unlock=document.getElementById("unlockBtn");
const pass=document.getElementById("password");
const wrong=document.getElementById("wrong");


unlock.onclick=function(){

    if(pass.value==="1507"){

        document.getElementById("lockScreen").style.display="none";

        document.getElementById("website").style.display="block";


        createStars();

        startHero();

        updateDays();

        startMusic();


    }else{

        wrong.innerHTML="wrong date.";

    }

};




// ============================
// HERO TYPEWRITER
// ============================


let hero="happy anniversary.";
let sub="one year of memories, moments, and a story i'll always remember.";

let h=0;
let s=0;


function startHero(){

    typeHero();

}



function typeHero(){

    if(h<hero.length){

        document.getElementById("heroTitle").innerHTML+=hero[h];

        h++;

        setTimeout(typeHero,100);

    }else{

        typeSub();

    }

}



function typeSub(){

    if(s<sub.length){

        document.getElementById("heroSubtitle").innerHTML+=sub[s];

        s++;

        setTimeout(typeSub,35);

    }

}






// ============================
// STARS
// ============================


function createStars(){

let area=document.getElementById("stars");


for(let i=0;i<160;i++){

    let star=document.createElement("div");

    star.className="star";


    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";


    star.style.animationDelay=Math.random()*5+"s";


    area.appendChild(star);

}


}







// ============================
// DAYS COUNTER
// ============================


function updateDays(){


let start=new Date();

start.setMonth(6);
start.setDate(15);


let today=new Date();


let difference=today-start;


let days=Math.floor(
difference/(1000*60*60*24)
);



document.getElementById("days").innerHTML=days;



}







// ============================
// MOUSE HEARTS
// ============================


document.addEventListener("mousemove",(e)=>{


let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";


heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},2000);


});








// ============================
// LETTER ANIMATION
// ============================


let letters=[

`Dear Amal,

Sometimes the smallest moments become the biggest memories.

Thank you for every laugh, every conversation, and every moment that made life feel special.`,



`A year can be measured in days,
but memories cannot be measured.

Every chapter became something I will always remember.`,



`No matter where life takes us,
I'll always be grateful our paths crossed.

Thank you for being part of my story.`


];



let positions=[0,0,0];


let ids=[
"letter1",
"letter2",
"letter3"
];



window.addEventListener("scroll",()=>{


document.querySelectorAll(".letter").forEach((box,index)=>{


let location=box.getBoundingClientRect().top;


if(location < window.innerHeight-100 && positions[index]===0){

writeLetter(index);

}


});


});





function writeLetter(number){


let text=letters[number];


let i=0;


function typing(){


if(i<text.length){


document.getElementById(ids[number]).innerHTML+=text[i];

i++;


setTimeout(typing,35);


}


}


positions[number]=1;

typing();


}









// ============================
// IMAGE VIEWER
// ============================


let images=document.querySelectorAll(".memory");


images.forEach(img=>{


img.onclick=function(){


document.getElementById("viewer").style.display="flex";


document.getElementById("viewerImg").src=this.src;


};


});



document.getElementById("viewer").onclick=function(){

this.style.display="none";

};








// ============================
// QUOTE
// ============================


let quote=
"Some people become memories. Some memories become forever.";


let q=0;


function quoteWrite(){


if(q<quote.length){


document.getElementById("quote").innerHTML+=quote[q];

q++;

setTimeout(quoteWrite,50);


}


}


setTimeout(quoteWrite,4000);







// ============================
// MUSIC
// ============================


function startMusic(){


let music=document.getElementById("music");


music.play().catch(()=>{

console.log("browser blocked autoplay");

});


}



let musicButton=document.getElementById("musicBtn");


let playing=false;


musicButton.onclick=function(){


let music=document.getElementById("music");


if(!playing){

music.play();

this.innerHTML="❚❚";

playing=true;


}else{


music.pause();

this.innerHTML="♫";

playing=false;


}


};







// ============================
// FINAL ENDING
// ============================


document.getElementById("secretButton").onclick=function(){


document.getElementById("finalScreen").style.display="block";


document.body.style.transition="2s";


heartExplosion();


finalTyping();


};



let finalText=
"Until I found you, I found a part of myself.\n\nHappy Anniversary, Amal.";



let finalIndex=0;



function finalTyping(){


if(finalIndex<finalText.length){


document.getElementById("finalMessage").innerHTML+=
finalText[finalIndex]==="\n"
?"<br>"
:finalText[finalIndex];


finalIndex++;


setTimeout(finalTyping,80);


}


}




function heartExplosion(){


for(let i=0;i<200;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤";


heart.style.left="50vw";

heart.style.top="50vh";


heart.style.fontSize=
Math.random()*30+10+"px";


heart.style.color="white";


heart.style.transform=
`translate(${Math.random()*800-400}px,
${Math.random()*800-400}px)`;


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},3000);


}


}
