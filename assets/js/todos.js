// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
  // //if li is grey
  // if($(this).css("color") === "rgb(128, 128, 128)"){
  //   //turn black
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // }
  // //else
  // else {
  //   $(this).css({
  //     //turn grey
  //     color: "grey",
  //     textDecoration: "line-through"
  //   });
  // }
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li> <span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});
