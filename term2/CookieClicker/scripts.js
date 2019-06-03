const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const myList = document.getElementById("myList");
var testUpgrade = document.getElementById("testUpgrade");
var testT = document.getElementById("test");
var testA = document.getElementById("test2");
var testB = document.getElementById("test3");
var testC = document.getElementById("test4");
var audio = new Audio('Wassap.mp3');
var hAudio = new Audio('hhh.mp3');


counter.value = 0,
counter.innerHTML = "Bits: " + counter.value;


testT.onclick = test;
testA.onclick = test2;
testB.onclick = test3;
testC.onclick = test4;
// clicker.onclick = mySounds;

var AUDIO_CLIPS = 42;


// function mySounds() {
//     var x = Math.floor((Math.random() * 2) + 1);
//       var sound = new Audio();
//     switch (x) {
//         case 1:
//             sound.src = "hhh.mp3";
//             break;
//         case 2:
//             sound.src = "Wassap.mp3";
//             sound.currentTime = 4;
//             break;
//         case 3:
//             sound.src = "";
//             break;
//         case 4:
//             sound.src = "";
//             break;
//         case 5:
//             sound.src = "";
//             break;
//         case 6:
//             sound.src = "";
//             break;
//         case 7:
//             sound.src = "";
//             break;
//         case 8:
//             sound.src = "";
//             break;
//         case 9:
//             sound.src = "";
//             break;
//         case 10:
//             sound.src = "";
//             break;
//     }
//       sound.play();
// }



clicker.addEventListener("click", function() {
    event.preventDefault();

    const ogAudio = document.getElementById("Audio");
    // audio.currentTime = 4;
    // audio.play();

    var myAudio = new Audio();
    myAudio.src = './carlosvault/' + (Math.floor(Math.random() * AUDIO_CLIPS) + 1) + ".mp3";
    myAudio.play();

    // newAudio.play();

    console.log();
    counter.value = counter.value + 1,
    counter.innerHTML = "Bits: " + counter.value;

});


// function Clickbaits(){
//     counter.innerHTML = "Total: " + counter.value;
//     counter.value = counter.value + 1;
//     console.log(Clickbaits);
// };

// setTimeout(function(){
//     clearInterval(timerId);
// }, 5000);


var Clickbaits = {
    title: "Clickbaits",
    total: 0,
    Upgrade: function(){
        return counter.value = counter.value + 1,
        counter.innerHTML = "Bits: " + counter.value;
    },

};
var NOTASCAM = {
    title: "Not a Scam!",
    total: 0 ,
    Upgrade: function(){
        return counter.value = counter.value + 2,
        counter.innerHTML = "Bits: " + counter.value;
    }
}

var MMM = {
    title: "mmh mmh NO NO NOH",
    total: 0,
    Upgrade: function(){
        return counter.value = counter.value + 100,
        counter.innerHTML = "Bits: " + counter.value;
    }
}

var Carlos = {
    title: "CarlosUltimatos!",
    total: 0,
    Upgrade: function(){
        return counter.value = counter.value + 1400;
    }
}


Clickbaits.Upgrade;
var Upgrades = [
    Clickbaits,
    NOTASCAM,
    MMM,
    Carlos
];

console.log(Clickbaits);

function test(){
    if(counter.value >= 15)
    {
        Clickbaits.total = Clickbaits.total + 1;
        counter.value = counter.value - 15;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(Clickbaits.Upgrade, 10000)
    }
    else
    {
        Clickbaits.total = Clickbaits.total;
    }
}

function test2(){
    if(counter.value >= 100)
    {
        NOTASCAM.total = NOTASCAM.total + 1;
        counter.value = counter.value - 100;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(NOTASCAM.Upgrade, 1000);
    }
    else
    {
        NOTASCAM.total = NOTASCAM.total;
    }
}

function test3(){
    if(counter.value >= 1000)
    {
        MMM.total = MMM.total + 1;
        counter.value = counter.value - 100;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(MMM.Upgrade, 1000);
    }
    else
    {
        MMM.total = MMM.total;
    }
}

// function test4(){
//     if(counter.value >= 10000)
//     {
//         Carlos.total = Carlos.total + 1;
//         counter.value = counter.value - 10000;
//         counter.innerHTML = "Bits: " + counter.value;
//         setInterval(Carlos.Upgrade, 1000);
        
//     }
//     else
//     {
//         Carlos.total = Carlos.total;
//     }
// }

function test4(){
    if(counter.value >= 10000)
    {
        Carlos.total = Carlos.total + 1;
        setTimeout(function(){
            clearInterval(Clickbaits.Upgrade, NOTASCAM.Upgrade, MMM.Upgrade);
        }, 100);
        counter.value = counter.value - 10000;
        counter.innerHTML = "You win, enjoy!";
        hAudio.play();
        setTimeout(function()
            {
                window.open('https://www.youtube.com/watch?v=lCcwn6bGUtU', );
            }, 2000);
        
    }
    else
    {
        Carlos.total = Carlos.total;
    }
}
console.log(test);



var newListItemButton = document.createElement("button");



