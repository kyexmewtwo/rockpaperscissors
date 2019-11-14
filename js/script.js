$("#shoot").click(function() {
  let idea = $("#input").val();
  $("#userChoice").html(idea);
  let comp = Math.random();
  if (comp > .66) {
    var cpu = "rock";
    $("#computerChoice").html("rock");
  } else if (comp > .33){
    var cpu = "paper";
    $("#computerChoice").html("paper");
  } else {
    var cpu = "scissors";
    $("#computerChoice").html("scissors")
  }
if (idea == 'rock' && cpu == "paper"){
  $("#result").html("Heh. You lose.");
} else if (idea == "rock" && cpu == "scissors"){
  $("#result").html("Oh. You won.");
} else if (idea == "rock" && cpu == "rock"){
  $("#result").html("You and I think alike.");
} else if (idea == "paper" && cpu == "scissors"){
  $("#result").html("Heh. You lose.");
} else if (idea == "paper" && cpu == "rock"){
  $("#result").html("Oh. You won.");
} else if (idea == "paper" && cpu == "paper"){
  $("#result").html("Oh. You won.");
} else if (idea == "scissors" && cpu == "rock"){
  $("#result").html("Heh. You lose.");
} else if (idea == "scissors" && cpu == "paper"){
  $("#result").html("Oh. You won.");
} else if (idea == "scissors" && cpu == "scissors"){
  $("#result").html("Oh. You won.");
}
else{
  $("#result").html("rock, paper, or scissors buddy, nothing else")
  }
});