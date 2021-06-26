var startButton = document.querySelector(".start");
var codeQ = document.querySelector("h1");
var info = document.querySelector("h3");
var section = document.querySelector("section");
var button = document.querySelectorAll("button");
var Hscorelink = document.querySelector("#Hscore");
var hbutton = document.querySelector(".hbutton");
var cleartargetindex = "";

var isreduce = false;
var isfinish = false;
var isadd = false;
var q1 = "Commonly used data types DO NOT include:"
var a1 =["1. strings","2. booleans","3. alerts","4. numbers"]
var q2 = "The condition in an if/else statement is enclosed within:"
var a2 =["1. quotes","2 .curly brackets","3. parentheses","4. square brackets"]
var q3 = "Arrays in JavaScript can be used to store:"
var a3 =["1. numbers and string","2 .other arrays","3. booleans","4. all of the above"]
var q4 = "A very useful tool used during development debugging for printing content to the debugger is:"
var a4 =["1. Javascript","2. terminal/bash","3. for loops","4. console.log"]

var displayscore = [];

function init() {
    var storedtext = JSON.parse(localStorage.getItem("displayscore"));
    if (storedtext !== null) {
      displayscore = storedtext;
    }
    return;
}

function startquiz() {
    hbutton.disabled = true;
    timerCount = 40;
    Qscore = 0;
    startTimer();
    Question1();   
}

function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        if (isreduce) {
            timerCount = timerCount - 10;
            isreduce = !isreduce   
        }
        if(timerCount < 0){
        timerCount = 0;
        }
        document.getElementById("timer").innerHTML = timerCount;
        if (isfinish && timerCount > 0) {
          clearInterval(timer);
          endquiz();
        }
        if (timerCount === 0) { 
        clearInterval(timer);  
          endquiz();    
        }
    }, 1000);
}

function reducetime(){
    isreduce = true;   
}

function addscore(){
    Qscore = Qscore + 5;
    return;
}

function storescore(){
    var displayinput = document.querySelector("#initial-input");
    displaytext = displayinput.value.toUpperCase() +" - " + Qscore;
    if(displayinput.value == ""){      
    }else{
        displayscore.push(displaytext);
    }
    displayinput.value = "";
    localStorage.setItem("displayscore", JSON.stringify(displayscore)); 
}

function renderlist(){
    var list = document.querySelector("ol");
    list.innerHTML ="";
    for (var i = 0; i < displayscore.length; i++) {
        var dscore = displayscore[i];
        var li = document.createElement("li");
        li.textContent = dscore;
        li.setAttribute("data-index", i);
        li.setAttribute("tabindex","1");
        list.appendChild(li);
    }
}

function scoreclear(){
    var index = cleartarget;
    displayscore.splice(index, 1);
    localStorage.setItem("displayscore", JSON.stringify(displayscore));
    renderlist();

}

function Question1(){
    info.remove();
    startButton.remove();
    section.setAttribute("class","none")
    codeQ.setAttribute("class","normal-font block");
    codeQ.setAttribute("style","margin-bottom: 20px;");
    codeQ.textContent = q1;
    var answerbutton1 = document.createElement("button");
    var answerbutton2 = document.createElement("button");
    var answerbutton3 = document.createElement("button");
    var answerbutton4 = document.createElement("button");
    answerbutton1.textContent = a1[0];
    answerbutton2.textContent = a1[1];
    answerbutton3.textContent = a1[2];// answer
    answerbutton4.textContent = a1[3];
    section.appendChild(answerbutton1);
    section.appendChild(answerbutton2);
    section.appendChild(answerbutton3);
    section.appendChild(answerbutton4);
    answerbutton1.setAttribute("class","b1 block");
    answerbutton1.setAttribute("style","position: relative;");
    answerbutton2.setAttribute("class","b2 block");
    answerbutton2.setAttribute("style","position: relative;");
    answerbutton3.setAttribute("class","b3 block");
    answerbutton3.setAttribute("style","position: relative;");
    answerbutton4.setAttribute("class","b4 block");
    answerbutton4.setAttribute("style","position: relative;");
    document.addEventListener("click",function(event) {
        var answer = event.target.textContent
        if(event.target.tagName == "BUTTON"){
            if(answer.includes(a1[2])){
                addscore();
                Question2();
            }
            if(answer.includes(a1[0]) || answer.includes(a1[1]) || answer.includes(a1[3])){
                reducetime();
                Question2(); 
            }  
        }
    });
}

function Question2(){
    var answerbutton1 = document.querySelector(".b1");
    var answerbutton2 = document.querySelector(".b2");
    var answerbutton3 = document.querySelector(".b3"); 
    var answerbutton4 = document.querySelector(".b4");
    codeQ.textContent = q2;
    answerbutton1.textContent = a2[0];
    answerbutton2.textContent = a2[1];
    answerbutton3.textContent = a2[2];// answer
    answerbutton4.textContent = a2[3];
    document.addEventListener("click",function(event) {
        var answer = event.target.textContent
        if(event.target.tagName == "BUTTON"){
            if(answer.includes(a2[2])){
                addscore();
                Question3();
            }
            if(answer.includes(a2[0]) || answer.includes(a2[1]) || answer.includes(a2[3])){
                reducetime();
                Question3(); 
            }  
        }
    });
}

function Question3(){
    var answerbutton1 = document.querySelector(".b1");
    var answerbutton2 = document.querySelector(".b2");
    var answerbutton3 = document.querySelector(".b3");
    var answerbutton4 = document.querySelector(".b4");
    codeQ.textContent = q3;
    answerbutton1.textContent = a3[0];
    answerbutton2.textContent = a3[1];
    answerbutton3.textContent = a3[2];
    answerbutton4.textContent = a3[3];// answer
    document.addEventListener("click",function(event) {
        var answer = event.target.textContent
        if(event.target.tagName == "BUTTON"){
            if(answer.includes(a3[3])){
                addscore();
                Question4();
            }
            if(answer.includes(a3[0]) || answer.includes(a3[1]) || answer.includes(a3[2])){
                reducetime();
                Question4(); 
            }  
        }
    });
}

function Question4(){
    var answerbutton1 = document.querySelector(".b1");
    var answerbutton2 = document.querySelector(".b2");
    var answerbutton3 = document.querySelector(".b3");
    var answerbutton4 = document.querySelector(".b4");
    codeQ.textContent = q4;
    answerbutton1.textContent = a4[0];
    answerbutton2.textContent = a4[1];
    answerbutton3.textContent = a4[2];
    answerbutton4.textContent = a4[3];// answer
    document.addEventListener("click",function(event) {
        var answer = event.target.textContent
        if(event.target.tagName == "BUTTON"){
            if(answer.includes(a4[3])){
                addscore();
                isfinish = true;
            }
            if(answer.includes(a4[0]) || answer.includes(a4[1]) || answer.includes(a4[2])){
                reducetime();
                isfinish = true; 
            }  
        }
    });
}

function endquiz(){
    document.querySelector(".b1").remove();
    document.querySelector(".b2").remove();
    document.querySelector(".b3").remove();
    document.querySelector(".b4").remove();
    codeQ.textContent = "All done!";
    var showscore = document.createElement('h3');
    showscore.textContent = "Your final score is: " + Qscore;
    var form = document.createElement("form");
    var label = document.createElement("label");
    label.setAttribute("for","initial-input");
    label.textContent = "Your initials: "
    var input = document.createElement("input");
    input.setAttribute("type"," text");
    input.setAttribute("name","initial-input");
    input.setAttribute("id","initial-input")
    var submit = document.createElement("button")
    submit.setAttribute("style","margin-left: 10px; font-size: 10px;");
    submit.textContent = "Submit";
    section.appendChild(showscore); 
    section.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    submit.addEventListener("click", function(){
        storescore();
    });    
}

function renderHscore(event){
    event.preventDefault();
    section.remove();
    section.innerHTML = "";
    var Newsection = document.createElement("section");
    var Newhead = document.createElement("h1");
    Newhead.textContent = "HIGHSCORE";
    var list = document.createElement("ol");
    document.body.children[1].appendChild(Newsection);
    Newsection.appendChild(Newhead);
    Newsection.appendChild(list);
    renderlist();
    var div = document.createElement("div");
    var back = document.createElement("button");
    back.textContent = "Go back"
    var clear = document.createElement("button");
    clear.textContent = "Clear" 
    Newsection.appendChild(div);
    div.appendChild(back);
    div.appendChild(clear);
    div.setAttribute("style","text-align:center;");
    back.setAttribute("style","margin-right:20px;");
    clear.setAttribute("style","margin-left:20px;");
    hbutton.disabled = true;
}

document.addEventListener("click",function(event){
    var htarget = event.target.textContent
    if(event.target.tagName == "BUTTON"){
        if(htarget == "Go back"){
            location.reload();
        }
        if(htarget == "Clear"){
            scoreclear();
        }
    }
    if(htarget != "Clear"){
        cleartarget = "";
    }
    if(event.target.tagName == "LI"){
        cleartarget = event.target.getAttribute("data-index")
    }
});

init();
hbutton.addEventListener("click", renderHscore);
startButton.addEventListener("click", startquiz);
