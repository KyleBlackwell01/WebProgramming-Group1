const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const myList = document.getElementById("myList");
var Upgrade = document.getElementById("Upgrade");
var Up1 = document.getElementById("Up1");
var Up2 = document.getElementById("Up2");
var Up3 = document.getElementById("Up3");
var Up4 = document.getElementById("Up4");
var audio = new Audio('Wassap.mp3');
var hAudio = new Audio('hhh.mp3');


counter.value = 0,
    counter.innerHTML = "Bits: " + counter.value;


Up1.onclick = upgrade1;
Up2.onclick = upgrade2;
Up3.onclick = upgrade3;
Up4.onclick = upgrade4;

var AUDIO_CLIPS = 42;



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


var Clickbaits = {
    title: "Clickbaits",
    total: 0,
    Upgrade: function() {
        return counter.value = counter.value + 1,
            counter.innerHTML = "Bits: " + counter.value;
    },

};
var NOTASCAM = {
    title: "Not a Scam!",
    total: 0,
    Upgrade: function() {
        return counter.value = counter.value + 2,
            counter.innerHTML = "Bits: " + counter.value;
    }
}

var MMM = {
    title: "mmh mmh NO NO NOH",
    total: 0,
    Upgrade: function() {
        return counter.value = counter.value + 100,
            counter.innerHTML = "Bits: " + counter.value;
    }
}

var Carlos = {
    title: "CarlosUltimatos!",
    total: 0,
    Upgrade: function() {
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

function upgrade1() {
    if (counter.value >= 15) {
        Clickbaits.total = Clickbaits.total + 1;
        counter.value = counter.value - 15;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(Clickbaits.Upgrade, 10000)
    } else {
        Clickbaits.total = Clickbaits.total;
    }
}

function upgrade2() {
    if (counter.value >= 100) {
        NOTASCAM.total = NOTASCAM.total + 1;
        counter.value = counter.value - 100;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(NOTASCAM.Upgrade, 1000);
    } else {
        NOTASCAM.total = NOTASCAM.total;
    }
}

function upgrade3() {
    if (counter.value >= 1000) {
        MMM.total = MMM.total + 1;
        counter.value = counter.value - 100;
        counter.innerHTML = "Bits: " + counter.value;
        setInterval(MMM.Upgrade, 1000);
    } else {
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

function upgrade4() {
    if (counter.value >= 10000) {
        Carlos.total = Carlos.total + 1;
        setTimeout(function() {
            clearInterval(Clickbaits.Upgrade, NOTASCAM.Upgrade, MMM.Upgrade);
        }, 100);
        Clickbaits.total = 0;
        NOTASCAM.total = 0;
        MMM.total = 0;
        counter.value = 0;
        counter.innerHTML = "You win, enjoy!";
        hAudio.play();
        setTimeout(function() {
            window.open('https://www.youtube.com/watch?v=lCcwn6bGUtU', );
        }, 2000);

    } else {
        Carlos.total = Carlos.total;
    }
}
console.log(test);



// var newListItemButton = document.createElement("button");