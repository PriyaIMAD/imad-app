var button = document.getElementById("counter");
var counter = 0;
button.onClick = function(){
    counter = counter + 1;
    var span = document.getElementById("count");
    alert(span.innerHTML);
    span.innerHTML = counter.toString();
}
    