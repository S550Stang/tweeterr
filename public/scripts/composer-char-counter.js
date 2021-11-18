$(document).ready(function () {
  // --- our code goes here ---
  console.log("from composer file");
  const count = document.getElementById("tweet-text");

  // when div1 is clicked, run the function
  // count.addEventListener("change", () => {
  //   console.log("You clicked on div 1.");
  // });
  /*
  $("#tweet-text").on("keydown", () => {
    console.log("You clicked on .");
  });
*/
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
    /*
    if (currentLength >= 0) {
      console.log("You have reached the maximum number of characters.");
    } else {
      console.log(maxlength - currentLength + " chars left");
      $(".counter").text(maxlength - currentLength);
    }*/
  });
});
