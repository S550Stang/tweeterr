$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    var maxlength = 140;
    var currentLength = $(this).val().length;
    if (currentLength <= maxlength) {
      $(".counter").css("color", "black");
      console.log("inside the negative");
    } else {
      $(".counter").css("color", "red");
    }
    $(".counter").text(maxlength - currentLength);
  });
});
