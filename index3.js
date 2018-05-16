var myNav = document.getElementById("myNav"),
    menu = document.getElementById("menu"),
    close = document.getElementById("close"),
    submitQuiz = document.getElementById("submitQuiz"),
    score = 0,
    display = document.getElementById("display");

menu.addEventListener("click", function(){
    myNav.style.right = 15+"px";
    menu.style.opacity = 0;
});

close.addEventListener("click", function(){
    myNav.style.right = -150+"px";
    menu.style.opacity = 1;
});

function showScore(x) {
    var ndiv = document.createElement("div");
    ndiv.className = "scoreDiv";
    display.appendChild(ndiv);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    ndiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        ndiv.parentNode.removeChild(ndiv);
    });
    
    var ndiv2 = document.createElement("div");
    ndiv2.className = "scoreText";
    ndiv2.innerHTML = "Your score is:<br/>"+score+"/5";
    ndiv.appendChild(ndiv2);
}

submitQuiz.addEventListener("click", function(){
    score = 0;
    if (document.getElementById("a2").checked){
        score++;
    } 
    
    if (document.getElementById("a7").checked){
        score++;
    }
    
    if (document.getElementById("a12").checked){
        score++;
    }
    
    if (document.getElementById("a13").checked){
        score++;
    }
    
    if (document.getElementById("a18").checked){
        score++;
    }
    
    showScore(score);
});