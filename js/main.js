$(document).ready(function(){
  $('.slider-snow').slick({
    arrows:true,
    slidesToShow:3,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    adaptiveHeight:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
  });
  $(document).ready(function(){
    $('.feature-slide').slick({
      arrows:false,
      slidesToShow:4,
      infinite:true,
      autoplay:true,
      pauseOnFocus:true,
      adaptiveHeight:true,
      pauseOnHover:true,
      swipe:true,
      TouchMove:true,
      responsive:[
        {
            arrows:false,
          breakpoint: 768,
          settings:{
              arrows:false,
            slidesToShow:1,
          }
        }, {
            arrows:false,
          breakpoint: 922,
          settings:{
            arrows:false,
            slidesToShow:1
          }
        }, {
            arrows:false,
          breakpoint: 480,
          settings:{
            arrows:false,
            slidesToShow:1
          }
        },{
          breakpoint: 320,
          settings:{
            arrows:false,
            slidesToShow:1
          }
        }
      ]
    });
    });
