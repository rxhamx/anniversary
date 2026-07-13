const correctCode = "1507";
let entered = "";

const dots = document.querySelectorAll("#dots span");

function updateDots(){

    dots.forEach((dot,index)=>{

        dot.classList.toggle("active",index<entered.length);

    });

}

function press(num){

    if(entered.length>=4) return;

    entered += num;

    updateDots();

    if(entered===correctCode){

        setTimeout(unlock,500);

    }

}

function erase(){

    entered=entered.slice(0,-1);

    updateDots();

}

function unlock(){

    document.getElementById("lockScreen").classList.add("hidden");

    document.getElementById("intro").classList.remove("hidden");

    typeWriter();

}

const message = `One year.

One story.

Many memories.

Many lessons.

Yet somehow...

We're still here.

Happy Anniversary ❤️`;

let i=0;

function typeWriter(){

    if(i<message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}
document.getElementById("continueBtn").onclick=function(){

    document.getElementById("intro").classList.add("hidden");

    document.getElementById("story").classList.remove("hidden");

};

document.getElementById("storyNext").onclick=function(){

document.getElementById("story").classList.add("hidden");

document.getElementById("letter").classList.remove("hidden");

startLetter();

};
const letter = `Dear Amal,

Happy Anniversary ❤️

It's hard to believe it's already been one year.

Thank you for every laugh,
every conversation,
every memory we created together.

We weren't perfect.

We both made mistakes.

But every chapter taught us something.

I don't want us to repeat the past.

I want us to build something healthier.

More understanding.

More trust.

More smiles.

Thank you for being part of my story.

Happy Anniversary.

— Ursham`;

let letterIndex = 0;

function startLetter(){

document.getElementById("letterText").innerHTML="";

letterIndex=0;

writeLetter();

}

function writeLetter(){

if(letterIndex<letter.length){

document.getElementById("letterText").innerHTML+=letter.charAt(letterIndex);

letterIndex++;

setTimeout(writeLetter,32);

}else{

document.getElementById("finishBtn").style.display="inline-block";

}

}

document.getElementById("finishBtn").onclick=function(){

alert("Final page coming next ❤️");

};
