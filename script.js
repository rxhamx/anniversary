let code = "";

const correct = "1507";

const display = document.getElementById("display");

function press(value){

    if(value==="❤") return;

    if(code.length>=4) return;

    code+=value;

    display.innerHTML="● ".repeat(code.length);

    if(code===correct){

        setTimeout(unlock,400);

    }

}

function backspace(){

    code=code.slice(0,-1);

    display.innerHTML="● ".repeat(code.length);

}

function unlock(){

    document.getElementById("login").style.display="none";

    document.getElementById("main").style.display="block";

    typeWriter();

}

const text=`One year.

One story.

Many memories.

Many lessons.

Yet somehow...

We're still here.

Happy Anniversary ❤️`;

let i=0;

function typeWriter(){

    if(i<text.length){

        document.getElementById("typewriter").innerHTML+=text.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

document.getElementById("nextBtn").onclick=()=>{

    alert("More surprises coming soon ❤️");

};
