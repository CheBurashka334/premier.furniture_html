$(document).ready(function(){
	
	$('#svg-placeholder').html(svg);
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < 50) && ($('.page').offset().top > 0)) {
			$('.header').addClass('start');
		} else {
			$('.header').removeClass('start');
		}
		
		if($(window).scrollTop() > ($('.company-box-item').eq(0).offset().top - $(window).height()) + 100) {
			$('.company-box-item').eq(0).addClass('scrolled');
		}
		if($(window).scrollTop() > ($('.company-box-item').eq(1).offset().top - $(window).height()) + 100) {
			$('.company-box-item').eq(1).addClass('scrolled');
		}
		if($(window).scrollTop() > ($('.company-box-item').eq(2).offset().top - $(window).height()) + 100) {
			$('.company-box-item').eq(2).addClass('scrolled');
		}
		if($(window).scrollTop() > ($('.company-box-item').eq(3).offset().top - $(window).height()) + 100) {
			$('.company-box-item').eq(3).addClass('scrolled');
		}
		$('.top-animation').each(function(){
			if($(window).scrollTop() > ($(this).offset().top - $(window).height()) + 100) {
				$(this).addClass('scrolled');
			}
		});
	});
	
	
	// mobile-menu
	$('.btn-menu').click(function(){
		$('.page-aside-dark-bg').fadeIn(500);
		$('.page-aside').addClass('open');
	});
	$('.btn-close-menu,.page-aside-dark-bg').click(function(){
		$('.page-aside-dark-bg').fadeOut(500);
		$('.page-aside').removeClass('open');
	});	
	// anchor-link-menu
	$('.js-anchor-link').click(function(e){
		var el = $(this).attr('href');
		var scrollto = $(el).offset();
		if($(this).parents().hasClass('page-aside')){
			$('.page-aside-dark-bg').fadeOut(500);
			$('.page-aside-dark-bg, .page-aside').removeClass('open');
		}
		$('html,body').animate({scrollTop: scrollto.top - $('.header').outerHeight() + 1},700);
	});
	
	
	// modal
	$('.btn-modal').click(function(){
		var modal = $(this).attr('data-modal');
		position('fix');
		$('.modal-dark-bg, #'+modal).fadeIn(500).addClass('open');
	});
	$('.modal').click(function(e){
		e.stopPropagation();
	});
	$('.btn-close-modal, .modal-dark-bg').click(function(e){
		e.preventDefault();
		var modal = $(this).parents('.modal');
		position();
		$('.modal-dark-bg, .modal').fadeOut(500).removeClass('open');
	});
	
	
	if($('html').hasClass('bx-touch')){
		$('select.touch-synh').change(function(){
			var radio = $('.select-synh[data-select="'+$(this).attr('id')+'"]');
			radio.find('input[type="radio"]').not('[value="'+$(this).val()+'"]').prop('checked', false);
			radio.find('input[type="radio"][value="'+$(this).val()+'"]').prop('checked', true);
			radio.find('input[type="radio"]:checked').parent('.dropdown-item').click();
		});
	}
	$('.select-synh input[type="radio"]').change(function(){
		var select = $(this).parents('.select-synh').attr('data-select');
		if(($(window).outerWidth() > 992) || (!$('#'+select).hasClass('touch-synh'))){
			$('#'+select).val($(this).val());
			$('#'+select).change();
		}
	});
	// dropdown init
	$('.dropdown-box').each(function(){
		var value = $(this).find('.dropdown-item[data-active="active"]').find('[data-value-text]');
		$(this).find('.dropdown-value > .item-text').html(value.attr('data-value-text'));
	});
	// dropdown open
	$('.dropdown-box').click(function(e){
		$('.dropdown-box').not($(this)).removeClass('open');
		$(this).toggleClass('open');
		e.stopPropagation();
	});
	$('.page').click(function(){
		$('.dropdown-box').removeClass('open');
	});
	// dropdown change
	$('.dropdown-box .dropdown-item').click(function(e){
		var value = $(this).find('[data-value-text]');
		var box = $(this).parents('.dropdown-box');
		$(this).attr('data-active', 'active').siblings().removeAttr('data-active');
		box.addClass('selected').find('.dropdown-value > .item-text').html(value.attr('data-value-text'));
		e.stopPropagation();
		box.removeClass('open');
	});
	
	// jcarousel
	// http://sorgalla.com/jcarousel/docs/
	$('.carousel')
		.on('jcarousel:createend jcarousel:reloadend', function(e, carousel){
			$(this).find('.indicator .total').text(carousel.items().length);
		})
		.on('jcarousel:targetin', '.carousel-item', function(e, carousel){
			$(this).parents('.carousel').find('.indicator .current').text($(this).index() + 1);
		})
		.jcarousel({
			list: '.carousel-inner',
			transitions: Modernizr.csstransforms ? {
				transforms: Modernizr.csstransforms,
				transforms3d: Modernizr.csstransforms3d,
				easing: 'ease'
			} : false
		});
	$('.carousel-controlls .prev')
		.on('jcarouselcontrol:active', function(){
			$(this).addClass('active');
		})
		.on('jcarouselcontrol:inactive', function(){
			$(this).removeClass('active');
		})
		.jcarouselControl({target: '-=1'});
	$('.carousel-controlls .next')
		.on('jcarouselcontrol:active', function(){
			$(this).addClass('active');
		})
		.on('jcarouselcontrol:inactive', function(){
			$(this).removeClass('active');
		})
		.jcarouselControl({target: '+=1'});
	
	// project
	$('.js-project').click(function(){
		// где-то тут должна быть загрузка фотографий проекта,
		// добавление их <div class="carousel-item col s12 m12 l12"><img/></div>
		// в .carousel-inner
		// презагрузка карусели  $(this).parents('.carousel').jcarousel('reload');
		$(this).parents('.project-item').siblings('.project-item').removeClass('active');
		$(this).parents('.project-item').addClass('active');
	});
	$('.project-item').click(function(e){
		e.stopPropagation();
	});
	$('.layout').click(function(){
		$('.project-item').removeClass('active');
	});
	
	
	// placeholder
	// init
	$('.inputtext, input:not([type="submit"]),textarea').each(function(){
		if($(this).val().length > 0){
			$(this).addClass('dirty');
		} else {
			$(this).removeClass('dirty');
		}
	});
	// action
	$('.inputtext, input:not([type="submit"]),textarea').keyup(function(){
		$(this).change();
	});
	$('.inputtext, input:not([type="submit"]),textarea').change(function(){
		if($(this).val().length > 0){
			$(this).addClass('dirty');
		} else {
			$(this).removeClass('dirty');
		}
	});
	// forms
	$('[required]').change(function(){
		validateRequired($(this));
	});
	$('input[type="email"]').change(function(){
		validateEmail($(this));
	});
	$('input[type="tel"]').change(function(){
		validateTel($(this));
	});
	$('input[type="file"]').change(function(){
		if($(this).val().length > 0){
			var isValid = validateFile($(this));
			$(this).siblings('.inputfile-value').find('.item-text').text($(this)[0].files[0].name);
			$(this).siblings('.inputfile-value').addClass('shown');
		} else {
			$(this).parents('.inputfile').removeClass('invalid-file');
			$(this).siblings('.inputfile-value .item-text').text('');
			$(this).siblings('.inputfile-value').removeClass('shown');
		}
	});
	$('.inputfile .btn-delete').click(function(){
		$(this).parents('.inputfile').find('input[type="file"]').val('');
		$(this).parents('.inputfile').removeClass('invalid-file');
		$(this).parents('.inputfile').find('input[type="file"]').change();
		return false;
	});
	$('form').submit(function(){
		$(this).find('[required]').each(function(){
			validateRequired($(this));
		});
		if($(this).find('.invalid-required, .invalid-pattern, .invalid-file').length > 0){
			$('.modal').removeClass('open');
			$('.modal#error-form').css('top',$(window).scrollTop() + 150);
			$('.modal-dark-bg, .modal#error-form').addClass('open');
			return false;
		} else {
			$('.modal').removeClass('open');
			$('.modal#success-form').css('top',$(window).scrollTop() + 150);
			$('.modal-dark-bg, .modal#success-form').addClass('open');
			return false;
		}
	});

});

function position(fix) {
	if(fix == 'fix'){
		var pos = $(window).scrollTop();
		$('.page').css({'position': 'fixed', 'top': - pos+'px'});
	} else {
		var pos = parseInt($('.page').css('top'), 10);
		$('.page').css({'position': 'relative', 'top': 0});
		$(window).scrollTop(-pos);
	}
}
function toggleContent(el,action,state,num){
	// default
	if(!action){
		action = 'init';
	}
	if(!state){
		state = 'less';
	}
	if(!num){
		num = 5;
	}
	var lessHeight = el.children('.show-buttons').outerHeight();
	el.children('*:lt('+num+')').each(function(){
		lessHeight = lessHeight + $(this).outerHeight() + parseFloat($(this).css('margin-bottom'),10);
	});
	var moreHeight = el.children('.show-buttons').outerHeight();
	el.children('[class!="show-buttons"]').each(function(){
		moreHeight = moreHeight + $(this).outerHeight() + parseFloat($(this).css('margin-bottom'),10);
	});
	if(action == 'init'){
		if(state == 'less'){
			el.css('height', lessHeight);
		} else if (state == 'more') {
			el.css('height', moreHeight);
		}
	} else if (action == 'toggle'){
		if(state == 'less'){
			el.animate({'height': lessHeight},300).attr('data-state', 'more');
		} else if (state == 'more') {
			el.animate({'height': moreHeight},300).attr('data-state', 'less');;
		}
	}
}
// validation functions
function validateEmail(el){
	var pattern = /.+@.+\..+/i;
	if(pattern.test(el.val())){
		el.removeClass('invalid-pattern');
	} else {
		el.addClass('invalid-pattern');
	}
}
function validateTel(el){
	var pattern = /\d{10,11}/;
	if(pattern.test(el.val())){
		el.removeClass('invalid-pattern');
	} else {
		el.addClass('invalid-pattern');
	}
}
function validateFile(el){
	var typePattern = /ppt|pptx|doc|docx|xls|xlsx|txt|pdf|png|jpg/i;
	if((el[0].files[0].size > 10485760) || !(typePattern.test(el[0].files[0].name.split('.').pop()))) {
		el.parents('.inputfile').addClass('invalid-file');
		return false;
	} else {
		el.parents('.inputfile').removeClass('invalid-file');
		return true;
	}
}
function validateRequired(el){
	if((el.val().length == 0) || ((el.attr('type') == 'checkbox') && (el.prop('checked') == false))){
		el.addClass('invalid-required');
	} else {
		el.removeClass('invalid-required');
	}
}
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1&nbsp;");
	}
	return val;
}
function animateNumber(el,value,start,separate){
	el.animate({num: value}, {
		duration: 1500,
		easing: 'swing',
		step: function(num){
			if(separate == true){
				$(this).html(commaSeparateNumber(Math.round(num))+' ');
			} else {
				$(this).text(Math.round(num)+' ');
			}
		}
	});
}
