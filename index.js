

// DETECTING BUTTON PRESSED 
var numberOfButton = document.querySelectorAll(".drums").length;

for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".drums")[i].addEventListener("click", handleClick);   //addEventListener is used to trigger the function specified

    function handleClick() {
       
        var buttonPressed=this.innerHTML;
        keyPressed(buttonPressed);
        buttonAnimation(buttonPressed);
    }

}

// DETECTING KEYBOARD PRESSED 

document.addEventListener("keypress",function (event) {                                 //event will  detect the button pressed
    keyPressed(event.key);
    buttonAnimation(event.key);

});

function keyPressed(key){

    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:console.log(buttonPressed);
            break;
    }
    
}


function buttonAnimation(currentKey) {

    var activeButton=document.querySelector("." + currentKey);             //.currentKey   currentKey= w a s d j k l

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

    //setTimeout is used to regain the button to original ie tio make shadow effect and remove

}









