$(document).ready(function () {
  $(".Part-Two-Yes, .Part-Two-No, .Story-Ending-Yes, .Story-Ending-No").hide();
  
  $(".firstImage").hide().fadeIn(10000);

  $(".choiceButton").hover(
    function () {
      $(this).css("background-color", "#404040"); 
    },
    function () {
      $(this).css("background-color", "#5c5c5c"); 
    }
  );

  $(".choiceButton").click(function () {
    const choice = $(this).data("choice");
    $(".Part-One, .Part-Two-Yes, .Part-Two-No, .Story-Ending-Yes, .Story-Ending-No").hide();
    switch (choice) {
      case "hide":
        $(".Part-Two-Yes").show();
        $(".firstImage").fadeOut(500, function () {
          $(this).attr("src", "https://cdn.vox-cdn.com/thumbor/smnljoDaTf0b4ZVXXclljAJuRTA=/0x0:1024x555/920x613/filters:focal(431x197:593x359):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47652081/kevin_20maca.0.jpg").fadeIn(500);
        });
        break;
      case "fightBack":
        $(".Part-Two-No").show();
        $(".firstImage").fadeOut(500, function () {
          $(this).attr("src", "https://i.insider.com/63938b60a3bebb0018b3e15e?width=800&format=jpeg&auto=webp").fadeIn(500);
        });
        break;
      case "continueHiding":
        $(".Story-Ending-Yes").show();
        break;
      case "escape":
      case "callPolice":
      case "confront":
        $(".Story-Ending-No").show();
        break;
      default:
        console.error("Invalid choice");
    }
  });
});
