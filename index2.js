

var myNav = document.getElementById("myNav"),
    menu = document.getElementById("menu"),
    close = document.getElementById("close"), 
    learn = document.getElementById("learn"),
    myHeading = document.getElementById("myHeading"),
    mountain = document.getElementById("mountain"),
    gate = document.getElementById("gate"),
    flag = document.getElementById("flag"),
    map = document.getElementById("map"),
    lFlower = document.getElementById("lFlower"),
    rFlower = document.getElementById("rFlower");

menu.addEventListener("click", function(){
    myNav.style.right = 15+"px";
    menu.style.opacity = 0;
});

close.addEventListener("click", function(){
    myNav.style.right = -150+"px";
    menu.style.opacity = 1;
});

learn.addEventListener("click", function(){
    learn.style.display = "none";
    myHeading.style.display = "none";
});

mountain.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Mount Fuji</h1><br><img src='imgs/fuji.jpg' id='pic'/><br><div class='innerText'>Mount Fuji, located on Honshu Island, is the highest mountain in Japan at 3,776.24m and 2nd-highest peak of an island in Asia.<br><br>Mount Fuji lies about 100 kilometres south-west of Tokyo, and can be seen from there on a clear day.<br><br> Its exceptionally symmetrical cone, which is snow-capped for about 5 months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});

gate.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Torii</h1><br><img src='imgs/torii.jpg' id='pic'/><br><div class='innerText'>A torii is a traditional Japanese gate most commonly found at the entrance of or within a Shinto shrine.<br><br> It symbolically marks the transition from the mundane to sacred. The presence of a torii at the entrance is usually the simplest way to identify Shinto shrines.<br><br> A small torii icon can be found on road maps and represents the shrines.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});

lFlower.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Hanami</h1><br><img src='imgs/hanami.jpg' id='pic'/><br><div class='innerText'>Hanami is the Japanese tradition of enjoying the quick beauty of cherry (sakura) or plum (ume) tree flowers.<br><br> From the end of March to early May, cherry trees bloom all over Japan, and around the first of February on the island of Okinawa.<br><br> In modern-day Japan, Hanami mostly consists of having an outdoor party beneath the sakura during daytime or at night.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});

rFlower.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Hanami</h1><br><img src='imgs/hanami.jpg' id='pic'/><br><div class='innerText'>Hanami is the Japanese tradition of enjoying the quick beauty of cherry (sakura) or plum (ume) tree flowers.<br><br> From the end of March to early May, cherry trees bloom all over Japan, and around the first of February on the island of Okinawa.<br><br> In modern-day Japan, Hanami mostly consists of having an outdoor party beneath the sakura during daytime or at night.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});

flag.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Shibuya Crossing</h1><br><img src='imgs/shibuya.jpg' id='pic'/><br><div class='innerText'>Shibuya is famous for its scramble crossing. It is located in front of the Shibuya Station Hachiko exit.<br><br>It stops vehicles in all directions to allow pedestrians to cross the intersection. The nearby statue of Hachiko, a dog, is a common meeting place and almost always crowded.<br><br>Three large TV screens mounted on nearby buildings overlook the crossing, as well as many advertising signs.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});

map.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1 class='myTitle'>Sushi</h1><br><img src='imgs/sushi.jpg' id='pic'/><br><div class='innerText'>Sushi is a Japanese dish of specially prepared vinegared rice combined with: <br><ul><li>raw seafood</li><li>calamari</li><li>eel</li><li>imitation crab meat</li><li>or some are vegetarian</li></ul> Sushi is often served with pickled ginger, wasabi, and soy sauce. Daikon radish is popular as a garnish.</div>"
    newDiv.appendChild(div2);
    
    var newX = document.createElement("div");
    newX.className = "closeInfo";
    newX.id = "closeInfo";
    newX.innerHTML = "&#x2716;";
    newDiv.appendChild(newX);
    
    var closeInfo = document.getElementById("closeInfo");
    closeInfo.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
    });
});



function myFunction() {
    var x = document.getElementById("disappear");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}