var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bt=this.innerHTML;
        makeSound(bt);
        makeanimation(bt);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeanimation(event.key);
});
function makeSound(key){
    switch(key)
    {
        case "w":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        default:console.log(key);
    }
}
function makeanimation(ani)
{
    document.querySelector("."+ani).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ani).classList.remove("pressed");
    },100);
}