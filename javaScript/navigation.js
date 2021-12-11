//navigation

$(function () {


  //hover event

  $("ul li a").hover(
    function () {
      $(this).css("color", "var(--grün)");
    },
    function () {
      $(this).css("color", "var(--orange)");
    }
  );
  $(".restaurant").hover(
    function () {
      $(this).css("color", "var(--grün)");
    },
    function () {
      $(this).css("color", "var(--orange)");
    }
  );

  //click event für restaurant

  
  $(".restaurant").click((e) => {
      setTimeout(function () {
        $(".subnav").toggle(1000);
      },);
      
      
  });

  

 //click für burger menü

 $(".burger_menü").click(function() {
  $(this).toggleClass('fa-times')
  $('.nav').toggleClass('active')
  $('.logo').toggleClass('logoac')
});
 


});

