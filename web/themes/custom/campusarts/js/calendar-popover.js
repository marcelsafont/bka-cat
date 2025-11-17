(function ($) {
  'use strict';
  Drupal.behaviors.custom_calendar = {
    attach: function(context, settings) {

      $(document).on('click', '.calendar-popover .close-pop a', function(e){
        $('.calendar-popover').popover('hide');
      });

      // $('html').on('mouseup', function (e) {
      //   if (!$(e.target).closest('.popover').length) {
      //       $('.popover').each(function () {
      //           $(this).closest('div.popover').popover('hide');
      //       });
      //   }
      // });

    }
  }

  /* $("document").ready(function() {
    setTimeout(function() {
        $("page__item arrow").trigger('click');
        alert("Done");
    },10);
  }); */
}(jQuery));
