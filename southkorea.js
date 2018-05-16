var menu = document.getElementById("menu"),
    close = document.getElementById("close");

menu.addEventListener("click", function(){
    myNav.style.right = 15+"px";
    menu.style.opacity = 0;
});

close.addEventListener("click", function(){
    myNav.style.right = -150+"px";
    menu.style.opacity = 1;
});

function myFunction() {
    var x = document.getElementById("disappear");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



// Get the modal
var modal1 = document.getElementById('1');

// Get the button that opens the modal
var btn1 = document.getElementById("worldMap");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}




// Get the modal
var modal2 = document.getElementById('2');

// Get the button that opens the modal
var btn2 = document.getElementById("flag");

// Get the <span> element that closes the modal
var span2 = document.getElementById("close2");

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




// Get the modal
var modal3 = document.getElementById('3');

// Get the button that opens the modal
var btn3 = document.getElementById("tower");

// Get the <span> element that closes the modal
var span3 = document.getElementById("close3");

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}



// Get the modal
var modal4 = document.getElementById('4');

// Get the button that opens the modal
var btn4 = document.getElementById("building1");

// Get the <span> element that closes the modal
var span4 = document.getElementById("close4");

// When the user clicks the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}




// Get the modal
var modal5 = document.getElementById('5');

// Get the button that opens the modal
var btn5 = document.getElementById("building2");

// Get the <span> element that closes the modal
var span5 = document.getElementById("close5");

// When the user clicks the button, open the modal 
btn5.onclick = function() {
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal5.style.display = "none";
    }
}
