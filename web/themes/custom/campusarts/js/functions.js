(function ($, Drupal) {
    Drupal.behaviors.sliderHome = {
      attach: function attach(context) {
        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
          });
        $('.nav--lang-nav').clone().appendTo('.nav .nav--main-nav nav > ul').removeClass('nav--lang-nav').addClass('selectric-mobile').addClass('d-lg-none');
        $('.nav--lang-nav select, .selectric-mobile select').selectric();
        
      }
    }
    Drupal.behaviors.mobileButton = {
      attach: function attach(context) {
        $(".mobile-button").click(function () {
          $(this).toggleClass("open");
          $(".nav--main-nav  ul:not(.contextual-links):not(.dropdown)").toggleClass(
            "show"
          );
        });
        $("li.dd > a").once().hover(function (e) {
          //e.preventDefault();
          $(this).parent().toggleClass("open");
          $(this).parent().find('ul').toggleClass("show");
        });
      }
    }

    Drupal.behaviors.calendarPopover = {
      attach: function attach(context) {
       
        $(document).ready(function(){
          $('.calendar-popover-launcher').popover({
              trigger: 'manual',
              html: true,
              container: 'body',
          }).click(function(e) {
              $(this).popover('show');
              e.stopPropagation();
          }).click(function(e) {
            e.preventDefault();
          })
      
          $(document).click(function(e) {
              if ($(e.target).is('.calendar-popover-launcher')) return;
              $('.calendar-popover-launcher').popover('hide');
          });
        });
      }
    }
   
  })(jQuery, Drupal);