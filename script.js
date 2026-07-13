// --------------------
// LOADING SCREEN
// --------------------

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("lockScreen").style.display = "flex";
    }, 2500);
});

// --------------------
// PASSCODE
// --------------------

const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const wrong = document.getElementById("wrong");

unlockBtn.onclick = unlock;

password.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        unlock();
    }
});

function unlock(){

    if(password.value==="1507"){

        document.getElementById("lockScreen").style.display="none";

        document.getElementById("website").style.display="block";

        document.getElementById("website").classList.add("fadeIn");

        heroType();

    }else{

        wrong.innerText="Wrong passcode.";

        password.value="";

    }

}

// --------------------
// HERO TYPEWRITER
// --------------------

const heroText="happy anniversary.";

const heroSubtitle="one year. countless memories. a story i'll always cherish.";

let heroIndex=0;

function heroType(){

    if(heroIndex<heroText.length){

        document.getElementById("heroTitle").innerHTML+=heroText.charAt(heroIndex);

        heroIndex++;

        setTimeout(heroType,90);

    }else{

        subtitleType();

    }

}

let subIndex=0;

function subtitleType(){

    if(subIndex<heroSubtitle.length){

        document.getElementById("heroSubtitle").innerHTML+=heroSubtitle.charAt(subIndex);

        subIndex++;

        setTimeout(subtitleType,30);

    }

}

// --------------------
// LETTER
// --------------------

const letter=`Dear Amal,

Until I found you,
I never knew someone could become such an important part of my life.

Thank you for every smile,
every conversation,
every memory,
and every lesson.

Whether life keeps us together or takes us on different paths,
I'll always be grateful that our paths crossed.

No matter where life takes us,
I'll always be grateful our paths crossed.

Happy Anniversary.

— subzero.
`;

let letterIndex=0;

document.getElementById("begin").onclick=function(){

    document.querySelector(".letterSection").scrollIntoView({
        behavior:"smooth"
    });

    if(letterIndex===0){
        typeLetter();
    }

};

function typeLetter(){

    if(letterIndex<letter.length){

        document.getElementById("letterText").innerHTML+=letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,28);

    }

}

// --------------------
// QUOTE
// --------------------

const quote="Some people stay forever. Some become memories. Either way, they leave a part of themselves with us.";

let quoteIndex=0;

window.addEventListener("scroll",()=>{

    const quoteSection=document.querySelector(".quote");

    const top=quoteSection.getBoundingClientRect().top;

    if(top<window.innerHeight-120){

        if(quoteIndex===0){

            quoteWriter();

        }

    }

});

function quoteWriter(){

    if(quoteIndex<quote.length){

        document.getElementById("quoteText").innerHTML+=quote.charAt(quoteIndex);

        quoteIndex++;

        setTimeout(quoteWriter,35);

    }

}

// --------------------
// FLOATING HEARTS
// --------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    heart.style.fontSize=(12+Math.random()*18)+"px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// --------------------
// SECRET ENDING
// --------------------

document.getElementById("secretButton").onclick=function(){

    document.getElementById("ending").style.display="block";

    document.getElementById("ending").classList.add("fadeIn");

    endingType();

};

const endingMessage=`No matter what happens in the future,
I'll always appreciate what we had.

Thank you for being part of one of the most unforgettable chapters of my life.

Happy Anniversary, Amal.

❤`;

let endingIndex=0;

function endingType(){

    if(endingIndex<endingMessage.length){

        document.getElementById("endingText").innerHTML+=endingMessage.charAt(endingIndex);

        endingIndex++;

        setTimeout(endingType,35);

    }

}

// --------------------
// MUSIC
// --------------------

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="❚❚";

    }else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="♫";

    }

};
