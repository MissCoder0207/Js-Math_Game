let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let operation = document.getElementById("operation");
let timer = document.getElementById("timer");
let result = document.getElementById("result");
let restart = document.getElementById("restart");
let pos = document.getElementById("pos");

let correctAns;
let counter = 0;
let score = 0;

function decrementTimer(){
    timer.innerText = (parseInt(timer.innerText) - 1).toString()
    if (parseInt(timer.innerText) === 0){
        result.innerText ="You scored " + score + " out of " + counter + " tries";
        clearInterval(interval)
        pos.style.display = "block";
    }
}

let interval = setInterval(decrementTimer,1000);

function restartt(){
    timer.innerText = "10";
    interval = setInterval(decrementTimer,1000);
    headerNumber();
    pos.style.display = "none";
    counter = 0;
    score = 0;
}

function headerNumber(){
    clearInterval(interval1);
    let random1 = Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
    n1.innerText = random1.toString();
    n2.innerText = random2.toString();

    let helper = Math.floor(Math.random() * 3);
    switch (helper){
        case 0:
            operation.innerText = "*";
            correctAns = random1 * random2;
        break;
        case 1:
            operation.innerText = "-";
            correctAns = random1 - random2;
            break;
        default:
            operation.innerText = "+";
            correctAns = random1 + random2;
            break;
    }

    bodyNumber();

}

function bodyNumber(){
    let helper = Math.floor(Math.random() * 4);
    switch (helper){
        case 0:
            a.innerText = correctAns.toString();
            b.innerText = (correctAns+1).toString();
            c.innerText = (correctAns+2).toString();
            d.innerText = (correctAns-1).toString();
            break;
        case 1:
            a.innerText = (correctAns+5).toString();
            b.innerText = (correctAns).toString();
            c.innerText = (correctAns-3).toString();
            d.innerText = (correctAns-1).toString();
            break;
        case 2:
            a.innerText = (correctAns+2).toString();
            b.innerText = (correctAns+3).toString();
            c.innerText = (correctAns).toString();
            d.innerText = (correctAns-4).toString();
            break;
        case 3:
            a.innerText = (correctAns-3).toString();
            b.innerText = (correctAns+1).toString();
            c.innerText = (correctAns+3).toString();
            d.innerText = (correctAns).toString();
            break;
    }
}

let interval1 = setInterval(headerNumber,1);

function checkAnswer(id){
    if (id === "a" && a.innerText === correctAns.toString())
        score ++;

    else if (id === "b" && b.innerText === correctAns.toString())
        score ++;

    else if (id === "c" && c.innerText === correctAns.toString())
        score ++;

    else if (id === "d" && d.innerText === correctAns.toString())
        score ++;

    counter++;

    headerNumber();
}


