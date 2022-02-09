//parallax js
$(document).ready(function(){
    var $window = $(window);
      $('section[data-type="background"]').each(function(){
          var $section = $(this); // assigning the object
      
          $(window).scroll(function() {
              var yPos = -($window.scrollTop() / $section.data('speed')); 
              
              // Put together our final background position
              var coords = '50% '+ yPos + 'px';
  
              // Move the background
              $section.css({ backgroundPosition: coords });
          }); 
      });    
  });
  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 0) {
          $(".navbar").addClass("navbar-scroll");
          $('.navbar .logo').removeClass("d-inline-block");
          $('.navbar .logo').addClass("d-none");
          $('.navbar .logo-light').removeClass("d-none");
          $('.navbar .logo-light').addClass("d-inline-block");
          }
            else{
            $(".navbar").removeClass("navbar-scroll");
            $('.navbar .logo').removeClass("d-none");
            $('.navbar .logo').addClass("d-inline-block");
            $('.navbar .logo-light').removeClass("d-inline-block");
            $('.navbar .logo-light').addClass("d-none");
        }
    })
  })
  