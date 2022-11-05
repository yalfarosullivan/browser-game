//Create a timer
var counter = 10;

setInterval( function(){
    counter--;

    if(counter >=0){
        id = document.getElementById("count")
        id.innerHTML = counter;
    }

    if (counter === 0){
        id.innerHTML= "TIME'S UP";
    }
}, 1000);
