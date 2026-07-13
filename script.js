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

    alert("Page 2 coming next ❤️");

};
