//simple animation/function//
function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',scrollAppear)
//simple animation//

//ajax//

$(document).ready(function(){
    $("#ajaxbtn").click(function(){
        $("#test").load("ajax.txt");
    });
});

//ajax//

//function//
function display(text)
{
    alert("Welcome " + text);
}

display("to my site, where I pay homage to one of the greatest to ever play the game.")
//function//