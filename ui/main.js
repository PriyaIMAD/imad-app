console.log('Loaded!');

//change the text

var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//move image

var img = document.getElementById("img");
img.onclick = function(){
    img.style.marginLeft = "100px";
    
};
