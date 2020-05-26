$(document).ready(function(){
	gnb();
	tab();

	/* ====
		gnb
	==== */
	/*
	$('.btn-gnb').click(function(){
		if($('.header').hasClass('gnbOpen')){
			$('.header').removeClass('gnbOpen').find('.gnb').slideUp(200);
		}else{
			$('.header').addClass('gnbOpen').find('.gnb').slideDown(200);
		}
	});
	*/
	$('.btn-gnb').click(function(){
		if($('.header').hasClass('gnbOpen')){
			$('.header').removeClass('gnbOpen');
		}else{
			$('.header').addClass('gnbOpen');
		}
	});

	$(document).on('focus', '.gnb .tabAfter', function(){
		$('.btn-gnb').focus();
	});

	/* 셀렉트박스 */
	$(document).on('change', 'select.styled1', function(){
		var vlu = $(this).val();
		$(this).closest('.selBox').find('.sel-txt').html(vlu);
	});

	/* ====
		버튼
	==== */
	/* 프린트 - 상세페이지 */
	$(document).on('click', '.btnDetailPrint', function(){
		var print = $(this).closest('.wrapper').html();
		$('body').append('<div class="print-area">' + print + '</div>');

		var photo = $('.print-area .photo-slide').find('.photo-box').html();
		$('.print-area .photo-slide').append('<div class="photo-box">' + photo + '</div>');
		$('.print-area .owl-carousel').remove();
		$('.print-area').print();
		$('.print-area').remove();
	});

	/* 프린트 - 슬라이드내이미지 */
	$(document).on('click', '.photo-layer .btn-txt-print', function(){
		var print = $(this).closest('.photo-layer').find('.owl-item.active .img-area').html();
		$('body').append('<div class="print-area">' + print + '</div>');
		$('.print-area').print();
		$('.print-area').remove();
	});

	/* ====
		상단검색영역
	==== */
	$(document).on('click', '.keyword', function(){
		$(this).toggleClass('on');
	});
	$(document).on('click', '.btn-calcel', function(){
		$('.keyword-box .keyword').removeClass('on');
	});

	/* ====
		달력 : datepicker
	==== */
	$('.popup-calendar').remove();
	$('.btn-date').each(function(){
		var data = $(this).attr('data');
		$('body').append('<div class="popup-calendar" data=' + data + '><button class="btn-dimmed-close">닫기</button><div class="calendar"><button class="btn-close">닫기</button><div class="datepicker"></div></div></div>')
	});
	$('.datepicker').each(function(){
		var data = $(this).closest('.popup-calendar').attr('data');
		var filed = $('.btn-date[data=' + data + ']').closest('.date').find('input[type=text]');
		$(this).datepicker({
			altField: filed,
			dateFormat: 'yy-mm-dd', //Input Display Format 변경
			showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
			showMonthAfterYear:true, //년도 먼저 나오고, 뒤에 월 표시
			changeYear: true, //콤보박스에서 년 선택 가능
			changeMonth: true, //콤보박스에서 월 선택 가능
			//yearSuffix: '년', //달력의 년도 부분 뒤에 붙는 텍스트
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'], //달력의 월 부분 텍스트
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 Tooltip 텍스트
			dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 부분 텍스트
			dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], //달력의 요일 부분 Tooltip 텍스트
			onSelect: function(dateText, inst) {
				$(this).closest('.popup-calendar').removeClass('on').fadeOut(200);
			}
		});
	});
	$('.date input[type=text]').val('');

	$(document).on('click', '.btn-date', function(){
		var data = $(this).attr('data');
		$('.popup-calendar[data=' + data + ']').fadeIn(300).addClass('on');
	});

	$(document).on('click', '.btn-dimmed-close, .calendar .btn-close', function(){
		$(this).closest('.popup-calendar').removeClass('on').fadeOut(200);
	});

	/* ====
		탭
	==== */
	$(document).on('mouseenter', '.tab-lst1 .item', function(){
		var lft = $(this).position().left;
		$(this).closest('.tab-lst1').find('.overline').css({'left':lft});
	});

	$(document).on('mouseleave', '.tab-lst1 .item', function(){
		var lft = $(this).closest('.tab-lst1').find('.item.on').position().left;
		$(this).closest('.tab-lst1').find('.overline').css({'left':lft});
	});

	$(document).on('click', '[class^=tab-lst] .item', function(){
		var idx = $(this).index();
		$(this).addClass('on').siblings('.item').removeClass('on');
		$(this).closest('[class^=tab-lst]').removeClass('idx1 idx2 idx3 idx4').addClass('idx' + idx);
		$(this).closest('.tabArea').find('.tab-cont').removeClass('on').hide().eq(idx).fadeIn(200, function(){
			$(this).addClass('on');
		});
	});

	/* ====
		슬라이드
	==== */
	/* 기본 */
	$('.normalSlider .owl-carousel').each(function(){
		var normalOwl = $(this);
		normalOwl.owlCarousel({
			loop:false,
			items: 1,
			margin: 0,
			//autoWidth:true,
			//autoHeight:true,
			nav:true
		});
	});

	/* 썸네일슬라이드 */
	$('.thumb-slide.item3 .owl-carousel').each(function(){
		var thumbOwl = $(this);
		thumbOwl.owlCarousel({
			loop:false,
			items: 2,
			margin: 4,
			nav:true,
			responsive:{
				800: {
					items: 3,
					margin: 20
				}
			}
		});
	});
	$('.thumb-slide.item4 .owl-carousel').each(function(){
		var thumbOwl = $(this);
		thumbOwl.owlCarousel({
			loop:false,
			items: 2,
			margin: 4,
			nav:true,
			responsive:{
				800: {
					items: 4,
					margin: 20
				}
			}
		});
	});
	$('.thumb-slide.item5 .owl-carousel').each(function(){
		var thumbOwl = $(this);
		thumbOwl.owlCarousel({
			loop:false,
			items: 2,
			margin: 4,
			nav:true,
			responsive:{
				800: {
					items: 5,
					margin: 20
				}
			}
		});
	});

	/* 이미지 미리보기팝업 - 포토 */
	$('.photo-box .photo').each(function(){
		var idx1 = $(this).closest('.owl-item').index();
		var idx2 = $(this).closest('.photo-item').index();
		var idx = idx1 + '0' + idx2;
		var img = $(this).html();
		$(this).attr('href', '#' + idx);
		$('.photo-layer .owl-carousel').append('<div class="item" data-hash="' + idx + '">' + img + '</div>');
	});

	$('.photo-layer .owl-carousel').each(function(){
		var photoOwl = $(this);
		photoOwl.owlCarousel({
			center: true,
			items: 1,
			loop: false,
			margin: 0,
			URLhashListener:true,
			nav:true
		});

		$(this).closest('.photo-layer').find('.btn-area').append('<div class="page"><span class="idx"></span> / <span class="all"></span></div>');
		photoPage();

		// 콜백
		photoOwl.on('changed.owl.carousel', function(e) {
			photoPage();
		});
	});

	// 페이지넘버
	function photoPage(){
		$('.photo-layer .owl-carousel').each(function(){
			var len = $(this).find('.item').length;
			var idx = $(this).find('.owl-dots .owl-dot.active').index();
			$(this).closest('.photo-layer').find('.page .all').html(len);
			$(this).closest('.photo-layer').find('.page .idx').html(idx + 1);
		});
	}

	/* 키워드 선택 */
	$('.keyword-item .owl-carousel').each(function(){
		var keyOwl = $(this);
		keyOwl.owlCarousel({
			autoWidth:true,
			loop:false,
			//items: 1,
			margin: 2,
			nav:true
		});
	});

	/* ====
		Content Library
	==== */
	/* 상세 - 포토 */
	photo();

	$('.tabArea .tab-cont').hide();
	$('.tabArea .tab-cont.on').show();

	/* 상세 - 팝업 */
	$(document).on('click', '.photo-box .photo', function(){
		$('html').css({'overflow':'hidden'});
		$('.photo-popup').delay(300).fadeIn(300);
	});

	$(document).on('click', '.photo-popup .btn-close', function(){
		$('.photo-popup').fadeOut(200, function(){
			$('html').removeAttr('style');
		});
	});

	/* ====
		Issue Celebrity
	==== */
	/* 리스트 박스 높이 */
	$('.seleb-lst').each(function(){
		var $box = $(this).find('.txt-area.max');
		var boxArray = $box.map(function(){
			return $(this).outerHeight();
		});
		var moreHei = Math.max.apply(Math, boxArray);
		$box.css('height', moreHei);
	});
	$('.seleb-box').each(function(){
		var hei = $(this).closest('.seleb-lst').outerHeight();
		$(this).css({'height':hei});
	});

	/* 아코디언리스트 */
	$('.acc-lst1').each(function(){
		$(this).find('.acc-item .acc-layer').hide();
		$(this).find('.acc-item.on .acc-layer').show();
		$(this).css({'opacity':'1'});
	});
	$(document).on('click', '.btn-acc', function(){
		var $item = $(this).closest('.acc-item');
		var top = $item.offset().top;
		if($item.hasClass('on')){
			$item.removeClass('on');
			$item.find('.acc-layer').hide();
		}else{
			$item.addClass('on');
			$item.find('.acc-layer').slideDown(300, function(){
				$('html, body').animate({scrollTop:top - 120}, 200);
			});
		}
	});

	/* ================================================================
		모바일 :: 800px
	================================================================ */
	$('.btn-srch-open').click(function(){
		if($(this).closest('.header').hasClass('srchOn')){
			$(this).closest('.header').removeClass('srchOn');
		}else{
			$(this).closest('.header').addClass('srchOn');
		}
	});
});

$(window).load(function(){
	selBox();

	resize();
	$(window).scroll();

	photoPop();

	$('.photo-popup').hide().css({'opacity':'1'});
});

$(window).scroll(function(){
	/* GNB 스크롤 X */
	var wTop = $(window).scrollTop();
	var wLft = $(window).scrollLeft();
	$('.head-inner, .gnb-inner').css({'margin-left':-wLft});

	/* ====
		Content Library
	==== */
	/* 상세 - 모션 탭 */
	var winH = $(window).height();
	var docH = $(document).height();
	$('.motion-tab').each(function(){
		var tabT = $('.motion-tab').offset().top;
		if(winH == docH){
			$('.motion-tab').addClass('on');
		}else{
			if(wTop > winH - tabT){
				$('.motion-tab').addClass('on');
			}else{
				$('.motion-tab').removeClass('on');
			}
		}
	});
});


/* ====
	접근성
==== */
function gnb(){
	$('.gnb').each(function(){
		$(this).append('<div class="tabIdx tabAfter" tabindex="0"></div>');
	});
}


/* ====
	탭
==== */
function tab(){
	$('.tab-lst1').each(function(){
		var len = $(this).find('.item').length;
		var wid = 100 / len + '%';
		$(this).find('.item').css({'width':wid});

		$(this).find('.overline').remove();
		$(this).find('.tab-inner').append('<div class="overline mHide"></div>');

		var lft = $(this).find('.item.on').position().left;
		$(this).find('.overline').css({'left':lft, 'width':wid});
	});

	$('.tab-lst2 .tab-inner, .tab-lst3 .tab-inner').each(function(){
		var lft = $(this).find('.item.on').offset().left;
		$(this).closest('[class^=tab-lst]').scrollLeft(lft);
	});
}

/*
	웹/모바일 분기처리
*/
function resize(){
	var winW = $(window).width();
	if(winW > 800){/* 웹 */

	}else{/* 모바일 */
		$(document).on('click', '.thumb1', function(){
			$('.thumb1').removeClass('on');
			$(this).addClass('on');
		});
	}
}

/* 셀렉트박스디자인 */
function selBox(){
	$('select.styled1').each(function(){
		var vlu = $(this).val();
		if(!$(this).closest('span').hasClass('selBox')){
			$(this).wrap('<span class="selBox"></span>');
			$(this).closest('.selBox').append('<span class="sel-txt">' + vlu +'</span>');
		}
	});
}

/* ====
	Content Library
==== */
/* 상세 - 포토 */
function photo(){
	$('.photo-box .photo-item .photo .img-area').each(function(){
		var boxW = $(this).closest('.photo').outerWidth();
		var boxH = $(this).closest('.photo').outerHeight();
		var wid = $(this).outerWidth();
		var hei = $(this).outerHeight();
		if(wid > hei){
			$(this).css({'height':boxH}).find('img').css({'height':boxH});
		}else{
			$(this).css({'width':boxW}).find('img').css({'width':boxW});
		}
		$(this).closest('.photo-box').css({'opacity':'1'});
	});
}

function photoPop(){
	$('.photo-popup .photo-layer .owl-carousel .item img').each(function(){
		var wid = $(this).outerWidth();
		var hei = $(this).outerHeight();
		if(wid > hei){
			$(this).css({'width':'100%', 'height':'auto'});
		}else{
			$(this).css({'width':'auto', 'height':'100%'});
		}
	});
}
