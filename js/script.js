$("#shoot").click(function() {
  let idea = $("#input").val();
  $("#userChoice").html(idea);
  let comp = Math.random();
  if (comp > .66) {
    var cpu = "rock";
    $("#computerChoice").html("Rock");
  } else if (comp > .33){
    var cpu = "paper";
    $("#computerChoice").html("Paper");
  } else {
    var cpu = "scissors";
    $("#computerChoice").html("Scissors")
  }
  console.log(cpu); 
});