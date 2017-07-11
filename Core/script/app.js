(function($){

	if ($('.avrist-data-nav').length > 0) { 
		$('.date-picker').datepicker({
		});
	}

	if ($('#greyTheme').length > 0) { 
		$('#site-container').addClass('greyTheme');
		$('#site-header').addClass('greyTheme');
		$('body').addClass('greyBody');
	}

	if ($('#backButtonShow').length > 0) { 
		$('.avrist-header-back').removeClass('hidden');
	}

	if ($('#greenTheme').length > 0) { 
		$('#site-container').addClass('greenTheme');
		$('#site-header').addClass('greenTheme');
		$('body').addClass('greenBody');
	}
	

	if ($('#header-2-show').length > 0) { 
		$('#header-2-menu').removeClass('hidden');
		$('.mobile-header-2').removeClass('hidden');
	}

	if ($('.avrist-header-1').length > 0) {
		window.onresize = function (a) {
			headerHeight()
		}

		function headerHeight() {
			var headerHeight = $('.avrist-header-1').height();
			$('#site-container').css('padding-top', headerHeight);
		}

		headerHeight()
	}
	

	if ($('.avrist-header-1').length > 0) {
	  	$(".avrist-header-1 .mid-ul > li").on("shown.bs.dropdown", function(){
	  		$('body').addClass('menu-opened'); 
		}); 
	  	$(".avrist-header-1 .mid-ul > li").on("hidden.bs.dropdown", function(){
	  		$('body').removeClass('menu-opened'); 
		});
	}

	if ($('#myNavbar').length > 0) {
	 	$('#myNavbar').on('hidden.bs.collapse', function () {
		  $('.nav-icon2.navbar-toggle').parent().removeClass('open');
		  $('.nav-icon2.navbar-toggle').parents('.avrist-header-1').removeClass('burger-open');
		});
	 	$('#myNavbar').on('shown.bs.collapse', function () {
		  $('.nav-icon2.navbar-toggle').parent().addClass('open');
		  $('.nav-icon2.navbar-toggle').parents('.avrist-header-1').addClass('burger-open');
		});
	 }

	 if ($('#section-header-only').length > 0) {
		$('.avrist-header-1 .ul-par > li.mid').addClass('perSection');
	}

	if ($('.avrist-banner-2').length > 0) {
		$('.avrist-banner-2 .banner-2-tabs > li > a').click(function(){
			var mtarget = $(this).attr('mobile-target');
			console.log(mtarget);
			$('.mobile-tab-circle .fade').removeClass('active');
			$('.mobile-tab-circle ' + mtarget ).addClass('active');
		});
	}
	
	function bannerCountSlider() {
		$('.banner-3-slider').not('.slick-initialized').slick({
          dots: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  fade: true,
		  cssEase: 'linear',
		  prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		  nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});
	}

	if ($('#tentangSelect').length > 0) {
		$('#tentangSelect').change(function() {
			var tabID = $(this).val();
			$('.banner-1-tabs a[href="'+ tabID +'"]').tab('show');
		});

		$('.slider-trigger a[data-toggle="tab"]').on('shown.bs.tab', function () {
	  		var tabID = $(this).attr('href');
			$('.bannerCount .count').removeClass('hidden').addClass('hidden');
			$('.bannerCount .count[tab-slider="'+ tabID +'"]').removeClass('hidden');
			$('.banner-3-slider').slick('unslick');
			bannerCountSlider()
		})
	}

	if($('.bannerCount').length > 0) {
		bannerCountSlider()
	}

	if($('.abt-1-slider').length > 0) {
		$('.abt-1-slider').not('.slick-initialized').slick({
          dots: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  variableWidth: true,
		  arrows: false,
		  responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 1,
		  			variableWidth: false
			      }
			    }
	    	]
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});
	}

	if($('.abt-2-slider').length > 0) {
		$('.abt-2-slider').not('.slick-initialized').slick({
          dots: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: false,
		  variableWidth: false,
		  arrows: true,
		  responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 1
			      }
			    }
	    	]
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});

		if ($(window).width() < 1023) {
			var curIndex = $('.abt-2-slider').slick('slickCurrentSlide') + 1;
			var totalIndex = $('.abt-2-slider .abts-box').length;
		}
		else {
			var curIndex = $('.abt-2-slider').slick('slickCurrentSlide') + 3;
			var totalIndex = $('.abt-2-slider .abts-box').length;
		}

		$('.avrist-slider-4 .pagination .left span').text(curIndex);
		$('.avrist-slider-4 .pagination .right span').text(totalIndex);

		$('.abt-2-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			if ($(window).width() < 1023) {
				var curIndex = $('.abt-2-slider').slick('slickCurrentSlide') + 1;
				var totalIndex = $('.abt-2-slider .abts-box').length;
			}
			else {
				var curIndex = $('.abt-2-slider').slick('slickCurrentSlide') + 3;
				var totalIndex = $('.abt-2-slider .abts-box').length;
			}
			console.log(curIndex);
			console.log(totalIndex);

			$('.avrist-slider-4 .pagination .left span').text(curIndex);
			$('.avrist-slider-4 .pagination .right span').text(totalIndex);
			if(curIndex > totalIndex) {
				$('.avrist-slider-4 .pagination .left span').text(totalIndex);
			}
		});
	}

	if($('.asb-slider').length > 0) {
		$('.asb-slider').not('.slick-initialized').slick({
          dots: false,
          arrows: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false,
		  autoplay: true,
		  autoplaySpeed: 2000
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});
	}

	//visi misi slider
	if($('.asb-slider-2').length > 0 || $('.asb-slider-3').length > 0){
		
		//VISI SLIDER
		$('.asb-slider-2').not('.slick-initialized').slick({
          dots: false,
          arrows: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false,
		  autoplay: true,
		  autoplaySpeed: 2000
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});

		//MISI SLIDER
		$('.asb-slider-3').not('.slick-initialized').slick({
          dots: false,
          arrows: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false,
		  autoplay: true,
		  autoplaySpeed: 2000
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});

		//VISI
		var curIndex1 = $('.asb-slider-2').slick('slickCurrentSlide');
		var totalIndex1 = $('.asb-slider-2 .index').length;

		if(totalIndex1 == 1) {
			$('.asb-slider-2').parents('.asb-par').find('.pagination').hide();
		}
		else {
			$('.asb-slider-3').parents('.asb-par').addClass('margin-on');
		}


		$('.asb-slider-2').parents('.asb-par').find('.pagination .left span').text(curIndex1 + 1);
		$('.asb-slider-2').parents('.asb-par').find('.pagination .right span').text(totalIndex1);

		$('.asb-slider-2').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var curIndex1 = $('.asb-slider-2').slick('slickCurrentSlide');
			var totalIndex1 = $('.asb-slider-2 .index').length;
			console.log(curIndex1);
			console.log(totalIndex1);

			$('.asb-slider-2').parents('.asb-par').find('.pagination .left span').text(curIndex1 + 1);
			$('.asb-slider-2').parents('.asb-par').find('.pagination .right span').text(totalIndex1);
			if(curIndex > totalIndex) {
				$('.asb-slider-2').parents('.asb-par').find('.pagination .left span').text(totalIndex1);
			}
		});

		//MISI
		var curIndex2 = $('.asb-slider-3').slick('slickCurrentSlide');
		var totalIndex2 = $('.asb-slider-3 .index').length;

		if(totalIndex2 == 1) {
			$('.asb-slider-3').parents('.asb-par').find('.pagination').hide();
		}

		$('.asb-slider-3').parents('.asb-par').find('.pagination .left span').text(curIndex2 + 1);
		$('.asb-slider-3').parents('.asb-par').find('.pagination .right span').text(totalIndex2);
		
		$('.asb-slider-3').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var curIndex2 = $('.asb-slider-3').slick('slickCurrentSlide');
			var totalIndex2 = $('.asb-slider-3 .index').length;
			console.log(curIndex2);
			console.log(totalIndex2);

			$('.asb-slider-3').parents('.asb-par').find('.pagination .left span').text(curIndex2 + 1);
			$('.asb-slider-3').parents('.asb-par').find('.pagination .right span').text(totalIndex2);
			if(curIndex > totalIndex) {
				$('.asb-slider-3').parents('.asb-par').find('.pagination .left span').text(totalIndex2);
			}
		});

	}

	if($('.planSlider').length > 0) {
		$('.planSlider').not('.slick-initialized').slick({
          dots: false,
          arrows: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});
	}
	
	//INVEST PLAN//
	if($('.planSlider').length > 0) {

		$('#planInvest').change(function(){
			var tabID = $(this).val();
			console.log(tabID);
			$('.invest-plan .sliderWrapper .planSlider').removeClass('hidden').addClass('hidden');
			$('.invest-plan .sliderWrapper ' + tabID ).removeClass('hidden');
			$('.planSlider').slick('unslick');

			$('.planSlider').not('.slick-initialized').slick({
	          dots: false,
	          arrows: true,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: false
			  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
	  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
			});
		});

	}
	//INVEST PLAN//

	//avrist slider2
	if($('.av-sl2-slider').length > 0) {
		$('.av-sl2-slider').not('.slick-initialized').slick({
          dots: true,
          arrows: true,
		  slidesToScroll: 1,
		  infinite: false,
		  variableWidth: true,
		  cssEase: 'linear'
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});
	}
	//avrist slider2//

	//FAQ COLLAPSE
	if($('.avrist-faq-1').length > 0) {

		$('.avrist-faq-1 .panel-collapse').on('shown.bs.collapse', function () {
		  var href = $(this).attr('id');

		  $('.panel-heading .panel-title > a[href="#'+ href +'"]').parent().addClass('opened');
		})
		$('.avrist-faq-1 .panel-collapse').on('hidden.bs.collapse', function () {
		  var href = $(this).attr('id');
		  $('.panel-heading .panel-title > a[href="#'+ href +'"]').parent().removeClass('opened');
		})

	}


	if($('#mbhd-2').length > 0) {
		$('#mbhd-2').on('shown.bs.collapse', function () {
		  $('.avrist-header-1 .mobile-header-2').addClass('mbhd-opened');
		})
		$('#mbhd-2').on('hidden.bs.collapse', function () {
		  $('.avrist-header-1 .mobile-header-2').removeClass('mbhd-opened');
		})
	}

	//DESKTOP MOBILE BACKGROUND
	if($('.hasBackground').length > 0) {

		$(window).on('resize', function(){

      		$('.hasBackground').each(function() {
				var desktop = $(this).attr('data-bg');
				var mobile = $(this).attr('data-bg-mobile');
				var $this = $(this);


				if ($(window).width() < 1023) {
					if(mobile == '' || mobile == undefined) {
						$this.css('background', 'url(' + desktop + ')');
					}
					else {
						$this.css('background', 'url(' + mobile + ')');
					}
				}
				else {
					$this.css('background', 'url(' + desktop + ')');
				}
			});

		});

		$('.hasBackground').each(function() {
			var desktop = $(this).attr('data-bg');
			var mobile = $(this).attr('data-bg-mobile');
			var $this = $(this);


			if ($(window).width() < 1023) {
				if(mobile == '' || mobile == undefined) {
					$this.css('background', 'url(' + desktop + ')');
				}
				else {
					$this.css('background', 'url(' + mobile + ')');
				}
			}
			else {
				$this.css('background', 'url(' + desktop + ')');
			}
		});	

	}

	//years slider
	if($('.ay1-slider').length > 0) {
		$('.ay1-slider').not('.slick-initialized').slick({
          dots: false,
          arrows: false,
		  slidesToScroll: 1,
		  infinite: false,
		  variableWidth: true,
		  cssEase: 'linear',
		  focusOnSelect: true
		  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
		});

		$('.ay1-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		  var data = $(this).find('.slick-current.slick-active p').attr('data-onchange');
		  //console.log(data);

		  $('.ay1-slider-content .content').removeClass('hidden').addClass('hidden');
		  $('.ay1-slider-content ' + data).removeClass('hidden');
		});
	}

	//NEWS CONTENT HEIGHT
	if($('.news-contents').length > 0) {

		window.onresize = function (a) {
			newsHeight()
		}

		function newsHeight() {
			if ($(window).width() > 1023) {
				$('.cont-box.image').each(function(){
					var height = $(this).height();
					$(this).parent().find('.cont-box.text').css('height', height);
				});
			}
		}

		setTimeout(function(){
			newsHeight()
		}, 50);
		
	}

	//SEARCH HEADER
	if($('#search-trigger').length > 0) {
		
	 	$('#search-trigger').on('hidden.bs.collapse', function () {
	 		$('.avrist-header-back').show();
		});
	 	$('#search-trigger').on('shown.bs.collapse', function () {
	 		$('.avrist-header-back').hide();
		});
		$('#site-container').click(function(){
			$('#search-trigger').collapse('hide');
		});
		
	}


	//SEARCH HIGHLIGHT
	if($('.search-mark-result').length > 0) {
		var src_str = $(".search-resulted .title").html();
		var term = $('#afterSearch').val();
		term = term.replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*");
		var pattern = new RegExp("("+term+")", "gi");

		src_str = src_str.replace(pattern, "<mark>$1</mark>");
		src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"$1</mark>$2<mark>$4");

		$(".search-resulted .title").html(src_str);
	}
	
	//LAPORAN SLIDER
	if($('.laporan-slider').length > 0) {
		function laporanSlider() {
			if ($(window).width() < 1023) {
				$('.laporan-slider').not('.slick-initialized').slick({
		          dots: false,
		          arrows: false,
				  slidesToScroll: 1,
				  infinite: false,
				  variableWidth: true,
				  cssEase: 'linear',
				  focusOnSelect: true
				  // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/slider-arrow-left.png'>",
		  		//   nextArrow: "<img class='a-right control-c next slick-next' src='./assets/images/slider-arrow-right.png'>"
				});
			}
			else {
					$('.laporan-slider.slick-initialized').slick('unslick');
			}
		}

		window.onresize = function (a) {
			laporanSlider();
		}


		laporanSlider();
	}

	//BACK TO TOP BUTTON
	if($('.back-to-top').length > 0){
		$('.back-to-top').click(function(){
			$('html, body').animate({scrollTop:$('#site-header').position().top}, 'slow');
		});
	}

	//SCROLL TO NEXT SECTION
	if($('.scroll-down').length > 0){
		$('.scroll-down').click(function(){
			$('html, body').animate({scrollTop:$('.mobile-tab-circle').parents('section').next().position().top - 75}, 'slow');
		});
	}


	//DEON - BANDINGKAN PRODUK
	$('.avrist-compare-select').change(function(){
		var _elm = $(this).data('target');
		if($(this).val() != ""){
			$(_elm).addClass('active');
			// if(isMobile()){
			// 	$('.avrist-compare-row.slick-initialized').slick('unslick');
			// 	$('.avrist-compare-row').slick({
			// 		variableWidth: true
			// 	});
			// }
			
		}
	});

	function isMobile() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};


})(jQuery);