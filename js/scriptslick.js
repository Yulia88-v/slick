$(document).ready(function(){
  $('.slider').slick({
  	arrows:true,
  	slidesToShow:3,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed:1000,
    infinite:false,
    autoplay:true,
   autoplaySpeed:1500,
   asNavFor:".sliderbig",

  });
  $('.sliderbig').slick({
    arrows:false,
    fade:true,
    asNavFor:".slider",
    responsive:[
    {
    	breakpoint:420,
    	settings:{
    		slidesToShow:2,
    		 slidesToScroll: 1,
    		arrows:true,
    		fade:false,
    		variableWidth:true,
    		appendArrows: $('.content'),
    		 infinite:false,
    		 speed:1000,
    		 autoplaySpeed:1500,
    	}
    },{
        breakpoint:380,
      settings:{
        slidesToShow:2,
         slidesToScroll: 1,
        arrows:true,
        fade:false,
        variableWidth:true,
        appendArrows: $('.content'),
         infinite:false,
         speed:1000,
         autoplaySpeed:1500,
      }
    },
      ]
  });
  $(".sliderbig").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });
});

