var myNav = document.getElementById("myNav"),
    menu = document.getElementById("menu"),
    close = document.getElementById("close"), 
    Japan = document.getElementById("Japan"),
    Italy = document.getElementById("Italy"),
    Australia = document.getElementById("Australia"),
    Korea = document.getElementById("Korea"),
    Mexico = document.getElementById("Mexico"),
    display = document.getElementById("display");

menu.addEventListener("click", function(){
    myNav.style.right = 15+"px";
    menu.style.opacity = 0;
});

close.addEventListener("click", function(){
    myNav.style.right = -150+"px";
    menu.style.opacity = 1;
});

Japan.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1>Welcome to Japan</h1><br>Japan is well-known for its culture and renowned sightseeing locations, <br>such as Mount Fuji and Shibuya Crossing.<br><br>With foods such as fresh sushi and delicious ramen, <br>you will be sure to love your time spend on this island in East Asia.<br><br><b>Explore below for more great travel tips while in Japan!</b>"
    newDiv.appendChild(div2);
    
    var newButton = document.createElement("button");
    newButton.className = "myButton";
    newButton.innerHTML = "<a class='send' href='japan.html'>Visit Japan</a>";
    newDiv.appendChild(newButton);
    
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

Italy.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1>Welcome to Italy</h1><br>Italy is well-known for its cuisine and beautiful architecture, <br>such as Venice and the Leaning Tower of Pisa.<br><br>Make sure to enjoy some authentic pasta and fresh wine <br>for an unforgettable experience in the Mediterranean.<br><br><b>Explore below for more great travel tips while in Italy!</b>"
    newDiv.appendChild(div2);
    
    var newButton = document.createElement("button");
    newButton.className = "myButton";
    newButton.innerHTML = "<a class='send' href='italy.html'>Visit Italy</a>";
    newDiv.appendChild(newButton);
    
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

Australia.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1>Welcome to Australia</h1><br>Australia is well-known for its warm weather and beautiful scenery, <br>such as Uluru National Park and Sydney Harbour.<br><br>With beaches around every corner and fresh seafood waiting for you, <br>your trip will be one hard to beat.<br><br><b>Explore below for more great travel tips while in Australia!</b>"
    newDiv.appendChild(div2);
    
    var newButton = document.createElement("button");
    newButton.className = "myButton";
    newButton.innerHTML = "<a class='send' href='australia.html'>Visit Australia</a>";
    newDiv.appendChild(newButton);
    
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

Korea.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1>Welcome to Korea</h1><br>Korea is well-known for its historic culture and beautiful cities, <br>such as Seoul and Busan.<br><br>With foods such as Bulgogi and Bibimbap, <br>you won't be able to wait for your next trip back.<br><br><b>Explore below for more great travel tips while in Korea!</b>"
    newDiv.appendChild(div2);
    
    var newButton = document.createElement("button");
    newButton.className = "myButton";
    newButton.innerHTML = "<a class='send' href='southkorea.html'>Visit Korea</a>";
    newDiv.appendChild(newButton);
    
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

Mexico.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.className = "Info";
    display.appendChild(newDiv);
    
    var div2 = document.createElement("div");
    div2.className = "myText";
    div2.innerHTML = "<h1>Welcome to Mexico</h1><br>Mexico is well-known for its relaxing beaches, nightlife, and popular historic sights <br>such as Chichen Itza and Tulum.<br><br>With foods such as delicious tacos and hot empanadas, <br>you will never want to leave this tropical paradise.<br><br><b>Explore below for more great travel tips while in Mexico!</b>"
    newDiv.appendChild(div2);
    
    var newButton = document.createElement("button");
    newButton.className = "myButton";
    newButton.innerHTML = "<a class='send' href='mexico.html'>Visit Mexico</a>";
    newDiv.appendChild(newButton);
    
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















