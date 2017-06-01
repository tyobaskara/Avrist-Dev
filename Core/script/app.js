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
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: false,
		  variableWidth: true,
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
	          dots: true,
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

		newsHeight()
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

})(jQuery);