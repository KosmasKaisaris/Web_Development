

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPatter=[];
var started=false;
var level=0;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
    started=true;

  }


});

$(".btn").click(function(){
  var userChosenColour= $(this).attr("id");
    userClickedPatter.push(userChosenColour);

  playSound(userChosenColour);
  animatePerson(userChosenColour);
  checkAnswer(userClickedPatter.length-1);

});





function nextSequence(){
  userClickedPatter=[];
  level++;

  $("#level-title").text("Level "+ level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomChoseColour=buttonColours[randomNumber];
  gamePattern.push(randomChoseColour);

  $("#" + randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChoseColour);





}

function playSound(name){
  var audio=new Audio("sounds/" +name + ".mp3");
  audio.play();
}

function animatePerson(currentColour){
$("#" + currentColour).addClass("pressed");



setTimeout(function(){
  $("#" + currentColour).removeClass("pressed");
},100);

}


function checkAnswer(currentLevel){

if(userClickedPatter[currentLevel]===gamePattern[currentLevel]){
  console.log("success");

  if(userClickedPatter.length=== gamePattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}else{
  console.log("wrong");
  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);

  $("h1").text("Game over,Press any key to restart")
  startOver();
}
}


function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
