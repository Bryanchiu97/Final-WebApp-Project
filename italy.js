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