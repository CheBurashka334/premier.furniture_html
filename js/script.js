$(document).ready(function(){
	
	$('#svg-placeholder').html(svg);
	
	$(window).scroll(function(){
		if($(window).scrollTop() < 50) {
			$('.header').addClass('start');
		} else {
			$('.header').removeClass('start');
		}
	});
	
	
	// menu
	$('.btn-menu').click(function(){
		$('.page-aside-dark-bg, .page-aside').addClass('open');
	});
	$('.btn-close-menu,.page-aside-dark-bg').click(function(){
		$('.page-aside-dark-bg, .page-aside').removeClass('open');
	});	
	
	// search
	$('.search-btn').click(function(){
		$(this).toggleClass('active').siblings('.search-field-box').toggleClass('active');
	});
	
	// modal
	$('.btn-modal').click(function(){
		var modal = $(this).attr('data-modal');
		$('#'+modal).css('top', $(window).scrollTop() + 150);
		$('.modal-dark-bg, #'+modal).addClass('open');
	});
	$('.btn-close-modal, .modal-dark-bg').click(function(e){
		e.preventDefault();
		$('.modal-dark-bg, .modal').removeClass('open');
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
	
	// collapsible 
	$('.collapsible').collapsible();
	
	if($(window).outerWidth() < 992){
		$('select.mobile-synh').change(function(){
			var radio = $('.select-synh[data-select="'+$(this).attr('id')+'"]');
			radio.find('input[type="radio"]').not('[value="'+$(this).val()+'"]').prop('checked', false);
			radio.find('input[type="radio"][value="'+$(this).val()+'"]').prop('checked', true);
			radio.find('input[type="radio"]:checked').parent('.dropdown-item').click();
		});
	}
	$('.select-synh input[type="radio"]').change(function(){
		var select = $(this).parents('.select-synh').attr('data-select');
		if(($(window).outerWidth() > 992) || (!$('#'+select).hasClass('mobile-synh'))){
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
		box.find('.dropdown-value > .item-text').html(value.attr('data-value-text'));
		e.stopPropagation();
		box.removeClass('open');
	});
	
	// jcarousel
	// http://sorgalla.com/jcarousel/docs/
	$('.carousel').jcarousel({
		list: '.carousel-inner'
	});
	$('.carousel-nav')
		.jcarouselPagination({
			item: function(page){
				return '<li class="nav-item"><a class="nav-link" href="#'+page+'"></a></li>';
			}
		})
		.on('jcarouselpagination:active', 'li', function(){ // - вот эта херня не работает почему-то
			$(this).children('a').addClass('active');
		})
		.on('jcarouselpagination:inactive', 'li', function(){ // - и эта (а должна!)
			$(this).children('a').removeClass('active');
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
	
	
	
	// anchor-link
	$('.anchor-link').click(function(e){
		var el = $(this).attr('href');
		var scrollto = $(el).offset();
		$('html,body').animate({scrollTop: scrollto.top - 100},700);
		return false;
		//e.preventDefault;
	});
	
	// yandex.map
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/tasks/quick-start-docpage/
	/*ymaps.ready(init);
	var sMap, sPlacemark, aMap;
	
	function init(){
		sMap = new ymaps.Map("cont-map",{
			center: [57.16565145867384,65.54499550000001], // Тюмень
			zoom: 12,
			controls: ['smallMapDefaultSet','routeEditor','trafficControl']
		});
		sPlacemark = new ymaps.Placemark(sMap.getCenter(),{},{
			iconLayout: 'default#image',
			iconImageHref: 'images/svg/pin56.svg',
			iconImageSize: [35,53],
		});
		sMap.behaviors.disable('scrollZoom');
		sMap.geoObjects.add(sPlacemark);
		
		aMap = new ymaps.Map("about-map",{
			center: [57.16565145867384,65.54499550000001], // Тюмень
			zoom: 11,
			controls: ['smallMapDefaultSet','routeEditor','trafficControl']
		});
		var aMapCoords = [
			[57.15689047935417,65.45087498346709],	// Черепанова 29
			[57.15370227137238,65.56400849999996],	// 50 лет Октября, 8/1
			[57.194878271190895,65.5943265],		// Ветеранов Труда, 47
			[57.13485277148095,65.60593249999998],	// Пермякова, 1а
			[57.13079877143909,65.54357149999998],	// Молодежная, 72
			[57.13420827141365,65.4935445],			// Московский тракт, 120/1
		]
		var projectsCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: 'images/svg/pin56.svg',
			iconImageSize: [35,53],
		});
		for (var i=0;i<aMapCoords.length;i++){
			projectsCollection.add(new ymaps.Placemark(aMapCoords[i]));
		}
		aMap.behaviors.disable('scrollZoom');
		aMap.geoObjects.add(projectsCollection);
	}*/
	
	$('.toggle-content-box').each(function(){
		if($(this).attr('data-state')){
			var state = $(this).attr('data-state');
		} else {
			var state = 'less';
		}
		if($(this).attr('data-show')){
			var num = $(this).attr('data-show');
		} else {
			var num = 5;
		}
		toggleContent($(this), 'init', state, num);
	});
	$('.show-buttons .show-more').click(function(){
		toggleContent($(this).parents('.toggle-content-box'), 'toggle', 'more', $(this).parents('.toggle-content-box').attr('data-show'));
		$(this).hide().siblings().show();
	});
	$('.show-buttons .show-less').click(function(){
		toggleContent($(this).parents('.toggle-content-box'), 'toggle', 'less', $(this).parents('.toggle-content-box').attr('data-show'));
		$(this).hide().siblings().show();
	});
	
	// tabs
	//$('.tabs').tabs();
	// init
	$('.tabs').each(function(){
		var actID = $(this).find('.tab-header-item.active .tab-link').attr('href');
		$(this).children('.tab-content').find(actID).addClass('open');
		if($('.workarea .tab-hide-box').length > 0){
			$('.tab-hide-box[data-hide-id='+actID+']').hide();
		}
	});
	// action
	$('.tab-link').click(function(){
		var actID = $(this).attr('href');
		var tabs = $(actID).parents('.tabs');
		if($(this).parent().hasClass('tab-header-item')){
			$(this).parent('.tab-header-item').addClass('active').siblings().removeClass('active');
		} else {
			$('.tab-header-item [href='+actID+']').parent('.tab-header-item').addClass('active').siblings().removeClass('active');
		}
		tabs.children('.tab-content').find(actID).addClass('open').siblings().removeClass('open');
		if($('.workarea .tab-hide-box').length > 0){
			$('.tab-hide-box[data-hide-id!='+actID+']').show();
			$('.tab-hide-box[data-hide-id='+actID+']').hide();
		}
		$(actID).trigger("tabshow");
		return false;
	});
	
	
	// show/hide block
	$('.btn-toggle-block').click(function(){
		if($(this).attr('data-toggle-class')){
			var $class = $(this).attr('data-toggle-class');
		} else {
			var $class = 'hide';
		}
		if($(this).attr('data-hide-block')){
			$($(this).attr('data-hide-block')).addClass($class);
		}
		if ($(this).attr('data-show-block')) {
			$($(this).attr('data-show-block')).removeClass($class);
		} 
		if ($(this).attr('data-block')){
			$($(this).attr('data-block')).toggleClass($class);
		}
		if($(this).is('a')){
			return false;
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
	var pos = $(window).scrollTop();
	if(fix == 'fix'){
		$('.page').css({'position': 'fixed', 'top': - pos+'px'});
	} else {
		console.log(pos);
		$(window).scrollTop(pos);
		//console.log($(window).scrollTop());
		$('.page').css({'position': 'relative', 'top': 0});
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
