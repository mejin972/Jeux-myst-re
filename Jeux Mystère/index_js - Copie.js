let body = document.querySelector("body");
let box = document.querySelector("fieldset");
let showSoluce = document.querySelector("#Show_solution");

/*BUTTON*/
let startGame = document.querySelector("#newGame");
let buttProposer = document.querySelector("#Propose");
let buttSoluce = document.querySelector("#solution");

/*CHOIX NOMBRE COMPUTER*/
let nombreOrdi;
let listeNbrOrdi = [];
let choiceComputer;

/*INPUT*/
let inputProposition = document.querySelector("#proposition");
let inputRepose = document.querySelector("#reponses");
let inputNbrTry = document.querySelector("#NbrEssaie");
let inputMessage = document.querySelector("#message");
let listeInputText = document.querySelectorAll("input[type = text]");
console.log(listeInputText);

/*PROPOSE ANSWER*/
let nbr = 0;
inputRepose.value = inputProposition.value ;

/* COUNTER*/
let count = 20;
let time;
let countIsOn = 20;
let minuterie = document.querySelector("#counter");

/*ICON*/
let badFace = document.querySelector("#rotate");
let goodFace = document.querySelector("#rotate_good");


/*EVENT*/
startGame.onclick = () =>{
    nbr = 0;
    badFace.style.opacity = "0%";
    init();  
}


/*FUNCTION*/

function disableBtn() {
    console.log(startGame.disabled);
    startGame.setAttribute("disabled","false");
    buttProposer.setAttribute("disabled","true");
    buttSoluce.setAttribute("disabled","true");


    if (startGame.disabled = false) {
        buttProposer.disabled = true;
        buttSoluce.disabled = true;
    }else{
       if (startGame.disabled = true) {
        buttProposer.disabled = false;
        buttSoluce.disabled = false;
       }
       if (nbr < 7 && inputProposition.value == choiceComputer) {
        startGame.disabled = false;
       }
       if (count == 0) {
        startGame.disabled = false;
       }
    }
}

function init() {
disableBtn();
console.log("je click sur new game");
for (let index = 0; index < listeInputText.length; index++) {
        const element = listeInputText[index];
        element.value = ' ';
}
clearTimeout(time);
inputProposition.removeAttribute("readonly");
count = countIsOn;
timeCount();
nbrOrdi();
choice();
box.style.backgroundColor = "";
goodFace.style.opacity = "0%";
badFace.style.opacity = "0%";
}

function choice() {
    choiceComputer = listeNbrOrdi[Math.floor(Math.random() * listeNbrOrdi.length)];
    console.log(choiceComputer + "choix");
}

function nbrOrdi() {
    for (let index = 0; index < 101 - 1; index++) {
        listeNbrOrdi.push(index);
        /*console.log(index);*/
    }
};
console.log(listeNbrOrdi);

buttProposer.onclick = () => {

    if (nbr < 7) {
        console.log("je click propo");
        nbr++;
        inputNbrTry.value = nbr;
        console.log(nbr);
        inputRepose.value += inputProposition.value + "-";
        checkSize();
        if (nbr < 7 && inputProposition.value == choiceComputer)  {
            box.style.backgroundColor = "green";
            goodFace.style.opacity = "100%";
            minuterie.innerHTML = "You win!!!!!!!";
            stopTimeCount();
            disableBtn();
            return;
        }
        if (nbr === 7) {
            stopTimeCount();
             return;
        } 
    }
}

console.log(box);

buttSoluce.onclick = () =>{
    show();
    stopTimeCount();
}

function show() {
    console.log("je click button soluce")
    showSoluce.textContent = "Le choix de l'ordinateur était le numéro :" + choiceComputer;
    console.log (showSoluce.textContent);
}

function checkSize() {
    if (choiceComputer > inputProposition.value ) {
        inputMessage.value = "Plus grand !";
    }else{
        inputMessage.value = "Plus petit !";
    }
}

function timeCount() {
    minuterie.innerHTML = count;
    count = count - 1 ;
    time = setTimeout(timeCount,1000);
    console.log(count);
   /* if (count > 0) {
        
        for (let index = 0; index < color.length; index++) {
            minuterie.style.color = `${color[index]}` ;
            console.log(color[index]);
        }
    }
    */
    if (count == 0) {
        disableBtn();
        stopTimeCount();
        console.log("time finit");
        startGame.onclick = () =>{
            console.log("je click sur new game");
            count = countIsOn;
            timeCount();
            nbrOrdi();
            choice();
            showSoluce.textContent = "";
            box.style.backgroundColor = "";
        }
    }
}

function stopTimeCount() {
    clearTimeout(time);
    if (count == 0) {
        minuterie.innerHTML = "Temps écouler";
        box.style.backgroundColor = "red";
        show();
        badFace.style.opacity = "100%";
    }else{
        if (nbr > 7) {
            box.style.backgroundColor = "red";
            show();
            badFace.style.opacity = "100%";
        }
    }
    inputProposition.setAttribute("readonly", "true");
    minuterie.style.color = "black";
}



