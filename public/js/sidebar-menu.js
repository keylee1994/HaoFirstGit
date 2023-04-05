

// function initMenu() {
//    $('#menu ul').hide();
//    $('#menu ul').children('.current').parent().show();
//    //$('#menu ul:first').show();
//    $('#menu li a').click(
//       function() {
//          var checkElement = $(this).next();
//          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//             return false;
//          }
//          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//             $('#menu ul:visible').slideUp('normal');
//             checkElement.slideDown('normal');
//             return false;
//          }
//       }
//    );
// }
// $(document).ready(function() {
//    initMenu();
// });



(function($) {
  //  handleClick = () => {
  //   $('#sidebar').toggleClass('active');
  // }
   "use strict";

   var fullHeight = function() {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
         $('.js-fullheight').css('height', $(window).height());
      });

   };
   fullHeight();



})(jQuery);

   