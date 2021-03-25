
  $(".moon").on("click", function(){
    if ($(this).hasClass("moon")) {
      $(".theme").attr("href", "css/blank.css")
    }
    
    else if ($(this).hasClass("dark")){
      $("#theme").attr("href", "index.css")
    }
  });