$(function () {
  let img_url;

  //lightbox erstellen

  $("body").append(
    '<div id="lightbox_overlay"><div id="lightbox_inhalt"><div class="icon_nav"><div class="icon_schliessen"></div></div><img class="img"/></div></div>'
  );

  //lightbox öffnen

  $(".bilder img")
    .stop()
    .click(function () {
      img_url = $(this).attr("src");

      $("#lightbox_overlay #lightbox_inhalt img").attr("src", img_url);
      $("#lightbox_overlay").fadeIn(500);
    });

  //lightbox schliessen

  $(".icon_schliessen")
    .stop()
    .click(function () {
      $("#lightbox_overlay").fadeOut(500);
    });
});
