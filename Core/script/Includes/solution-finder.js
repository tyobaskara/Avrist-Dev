 
 function show(elm) {
 	elm.slideDown();
 	elm.addClass("active");
 } 
 function hide(elm) {
 	elm.slideUp();
 	elm.removeClass("active");
 }

 $(function(){

 	$(".solution-form-slide").on("beforeChange", function(event, slick, currentSlide, nextSlide){
 		var slide = ( nextSlide + 1 );
 		var _img  = $("#step-"+slide).data("image");
 		$(".solution-finder .left-img").fadeOut(function(){
 			$(this).find("img").attr("src",_img);
 			$(this).fadeIn();
 		})
 	});

 	$(".solution-form-slide").slick({
 		dots: true,
 		infinite: false,
 		adaptiveHeight: true,
 		appendDots: $(".step-navigate"),
 		customPaging : function(slider, i) {
	        //var thumb = $(slider.$slides[i]).data('thumb');
	        return '<a><span>'+ ( i+1 ) +'</span></a>';
	    },
 	});

 	$(".solution-next").click(function(){
 		$('.solution-form-slide').slick('slickNext');
 	});

 	$("input[name=invest]").change(function(){
 		var _list = $(this).data('list');
 		if($("input[name=invest]:checked").val()=="ya") {
 			show($("#"+ _list));
 		} else {
 			hide($("#"+ _list +".active"));
 		}
 	});

 	$("input[name=health-insurance]").change(function(){
 		var _list = $(this).data('list');
 		if($("input[name=health-insurance]:checked").val()=="ya") {
 			show($("#"+ _list));
 		} else {
 			hide($("#"+ _list +".active"));
 		}
 	});

 });