var numberOfDrum=document.querySelectorAll(".drum").length;

//adding mouse events
for (var i = 0; i<numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
//adding keyboard events
document.addEventListener("keydown",function(e){
  makeSound(e.key);
  buttonAnimation(e.key);

});


function makeSound(key){
     switch (key) {
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
          break;
        case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
          break;
        case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
          break;
        case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
          break;
        case "j":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
          break;
        case "k":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
          break;
        case "l":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();

          break;
        default:console.log(key);

  }
}
function buttonAnimation(key){
var activeButton=document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");},100);
}
