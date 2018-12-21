$(document).ready(function(){

	var $mnu = $('.page-header__bottom');



	$mnu.waypoint(function(){
		$mnu.toggleClass('page-header__bottom--fixed');
		$('.page-header').toggleClass('layout--fixed');
	}, { offset: '-55px'
	});

	$mnu.waypoint(function(){
		$mnu.toggleClass('page-header__bottom--margin');
	}, { offset: '-110px'
	});

	$(document).on('click', '.burger', function(event) {
		event.preventDefault();
		$(this).toggleClass('burger--change');
		$('.page-header__bottom').toggleClass('page-header__bottom--active');
		$('body').toggleClass('js-noscroll');
		$('.page-header__drop').removeClass('page-header__drop--active');
	});



	$(document).on('click', '.js-scrollTop', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('.page-header').offset().top
		}, 500);
	});

    $(document).on('click', '.dropdown__wrap', function(event) {
        event.preventDefault();
        $(this).toggleClass('dropdown__wrap--open');
    });

    $(document).on('click', '.dropdown__wrap--addres', function(event) {
        event.preventDefault();
        $(this).toggleClass('dropdown__wrap--open2');
    });

	$(document).on('click', '.filter__mobile', function(event) {
		event.preventDefault();
		$('.filter__mobile').toggleClass('filter__mobile--active');
		$('.filter__controls').toggleClass('filter__controls--active');
		$('.large-menu__box').removeClass('large-menu__box--active');
		$('.large-menu__drop').removeClass('large-menu__drop--active');
		$('.field-text__input--city').focus();
	});


	$(document).on('click', '.large-menu__toggler', function(event) {
        event.preventDefault();
        $('.large-menu__drop').toggleClass('large-menu__drop--active');
        $('.large-menu__box').toggleClass('large-menu__box--active');
        $('.filter__controls').removeClass('filter__controls--active');
        $('.filter__mobile').removeClass('filter__mobile--active');
        $('.js-clinic--active').removeClass('js-clinic--active');
        $('.clinic-menu').removeClass('clinic-menu--active');
        $('.js-spec--active').removeClass('js-spec--active');
        $('.spec-menu').removeClass('spec-menu--active');
    });

    $(document).on('click', '.js-field-text', function(event) {
        event.preventDefault();
        $(this).toggleClass('field-text__opened');
    });

    $(document).on('click', '.user', function() {
        $('.user').removeClass('user__active');
        $(this).toggleClass('user__active');
    });



	$(document).on('click', 'body', function(e) {
		var box = $('.large-menu__box');
		var drop = $('.large-menu__drop');
		var controls = $('.filter__controls');
		var mobile = $('.filter__mobile');
        var field = $('.field-text');
        var toggler = $('.field-text__large-menu-toggler');
        var spec = $('.spec-menu');
        var spec2 = $('.js-spec');
        var clinic = $('.clinic-menu');
        var clinic2 = $('.js-clinic');
        var clear = $('.employees-filter__clear');
        var city = $('.field-text__input--city');

		if (!controls.is(e.target) && !city.is(e.target) && !mobile.is(e.target) && !clear.is(e.target) && clear.has(e.target).length === 0 && !box.is(e.target) && spec.has(e.target).length === 0 && clinic.has(e.target).length === 0 && !spec.is(e.target) && !spec2.is(e.target) && !clinic2.is(e.target) && !clinic.is(e.target) && !toggler.is(e.target) && !drop.is(e.target) && !field.is(e.target)) {
			controls.removeClass('filter__controls--active');
			mobile.removeClass('filter__mobile--active');
			box.removeClass('large-menu__box--active');
			drop.removeClass('large-menu__drop--active');
            field.removeClass('field-text__opened');
            spec.removeClass('spec-menu--active');
            clinic.removeClass('clinic-menu--active');
            spec2.removeClass('js-spec--active');
            clinic2.removeClass('js-clinic--active');
		}
	});


	$(document).on('click', '.top-mob__tel', function(event) {
		event.preventDefault();
		$('.page-header__drop').toggleClass('page-header__drop--active');
		$('.burger').removeClass('burger--change');
		$('.page-header__bottom').removeClass('page-header__bottom--active');
		$('body').removeClass('js-noscroll');
	});




	$(document).ready(function(){
		$('.slider__body').slick({
			autoplay: false,
			dots: true,
			prevArrow: '<div class="slick-nav slick-nav--left"><div type="button" class="slick-previous"></div></div>',
			nextArrow: '<div class="slick-nav slick-nav--right"><div type="button" class="slick-nextt"></div></div>',
			speed: 1000
		});

        $('.status-employee__slider').slick({
            autoplay: false,
            dots: false,
            slidesToShow: 2,
            prevArrow: '<button class="control-prev control-prev--rounded slick-arrow"></button>',
            nextArrow: '<button class="control-next control-prev--rounded slick-arrow"></button>',
            speed: 1000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
                ]
        });

        $('.schedule__body').slick({
            autoplay: false,
            dots: false,
            infinite: false,
            edgeFriction: 0,
            slidesToShow: 7,
            slidesToScroll: 2,
            prevArrow: '<div class="slick-nav slick-nav--left"><div type="button" class="slick-previous"></div></div>',
            nextArrow: '<div class="slick-nav slick-nav--right"><div type="button" class="slick-nextt"></div></div>',
            speed: 1000,
            responsive: [
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 6
                    }
                },
				{
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 5
                    }
                },
				{
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });


        $('.history-slider__years').slick({
            asNavFor: '.history-slider__body',
            autoplay: false,
            dots: false,
            infinite: false,
            edgeFriction: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '1px',
            arrows: false,
            focusOnSelect: true,
            speed: 500
        });

        $('.history-slider__body').slick({
            asNavFor: '.history-slider__years',
            autoplay: false,
            dots: false,
            infinite: false,
            edgeFriction: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            fade: true,
            arrows: false,
            centerMode: true
        });


	});



	$('.search__input').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
			.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});


    $(document).on('click', '.address__item', clickTabAll);
        function clickTabAll() {

        	var current = $(this).data('tab-nav');

        	$('.address__item').removeClass('address__item--active');
        	$(this).addClass('address__item--active');

        	$('.connection, .work-time, .preview__inner').hide();
            $('[data-tab-item='  + current +  ']').show();
        };


    $(document).on('click', '.filter__button', clickFilterBtn);
    function clickFilterBtn() {

    	$('.filter__button').removeClass('filter__button--active');
    	$(this).addClass('filter__button--active');

    	var tab = $(this).data('tab');

    	$('.news__cell, .location__img').hide();
    	$('[data-label=' + tab + ']').show();
    	if ($(this).hasClass('filter__button--all')) {
    		$('.news__cell').show();
		}
	};

    $(document).on('click', '.feedback__button', feedBack);
    function feedBack() {
        $('.add__form').slideToggle();
    }

    $(document).on('click', '.team__item', clickTeamItem);
    function clickTeamItem() {
    	var user = $(this).data('name');
    	$('.large-menu__drop').text(user);
    	$('.steps__link--doctor').text(user);
        $('.field-text__large-menu-toggler').val(user);
	}

    $(document).on('click', '.filter__button', clickUser);
    function clickUser() {
        var user = $(this).data('name');
        $('.js-tabs').removeClass('js-tabs--active');
        $('.js-tabs').eq($(this).index()).addClass('js-tabs--active');
        $('.filter__mobile').text(user);
    }


    $(document).ready(function () {
        var num = $('.review-item').length;
		$('.tabs .filter__button').attr('data-count', num);
    });


    $(document).on('click', '.js-shedule', clickShedule);
    function clickShedule() {
        var $wrap = $(this).closest('.schedule__body ');
        var $status = $wrap.find('.schedule__status');



        $wrap.find('.js-shedule').toggleClass('schedule__text--active');
        $status.toggleClass('schedule__status--active');
    }

    $(document).on('click', '.pagination__number', clickPaginationBtn);
    function clickPaginationBtn() {
        $('.pagination__number').removeClass('pagination__number--active');
        $(this).addClass('pagination__number--active');
    };

    $('.preview__wrapper, .сertificates__grid').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
		gallery: {
        	enabled: true
		}
        // other options
    });

    $(document).ready(function () {
        if ($(".slick-initialized")) {
            $('.schedule').removeClass('js-load');
        }

    });

    $(document).on('click', '.feedback__btn', clickFeedBack);
    function clickFeedBack() {
        var name = $('.js-name').val();
        var email = $('.js-email').val();
        var review = $('.js-review').val();

        if ( name == '' || email == '' || review == '' ) {
            $('.js-name, .js-email, .js-review').addClass('js-error');
            $('.field-text__error').addClass('field-text__error--active');
        }
    };

    $(document).on('click', '.js-spec', clickSpecialization);
    function clickSpecialization() {
        $(this).toggleClass('js-spec--active');
        $('.spec-menu').toggleClass('spec-menu--active');
        $('.js-clinic--active').removeClass('js-clinic--active');
        $('.clinic-menu').removeClass('clinic-menu--active');
        $('.large-menu__box').removeClass('large-menu__box--active');
        $('.large-menu__drop').removeClass('large-menu__drop--active');
    };

    $(document).on('click', '.js-clinic', clickClinic);
    function clickClinic() {
        $(this).toggleClass('js-clinic--active');
        $('.clinic-menu').toggleClass('clinic-menu--active');
        $('.js-spec--active').removeClass('js-spec--active');
        $('.spec-menu').removeClass('spec-menu--active');
        $('.large-menu__box').removeClass('large-menu__box--active');
        $('.large-menu__drop').removeClass('large-menu__drop--active');
    };

    $(document).on('click', '.employees-filter__btn', clickEmployeeBtn);
    function clickEmployeeBtn() {
        $('.js-spec--active').removeClass('js-spec--active');
        $('.spec-menu').removeClass('spec-menu--active');
        $('.js-clinic--active').removeClass('js-clinic--active');
        $('.clinic-menu').removeClass('clinic-menu--active');
    };

    $(document).on('click', '.employees-filter__inner .js-checkbox', clickCheckBox);
    function clickCheckBox() {
        $(this).toggleClass('js-checkbox--active');

        var wrap = $(this).closest('.employees-filter__inner');
        var $checkbox = wrap.find('.js-checkbox--active');
        var current = wrap.find('.js-current');
        var label = wrap.data('label');


        var str = '<span class="employees-filter__clear"><i class="employees-filter__clear-img"></i></span>';
        var name = $checkbox.data('name') + str;

        if ( $checkbox.length == 1 ) {
            current.html(name);
        } else if ( $checkbox.length >= 2  ) {
            current.html(label + ': ' + $checkbox.length + str);
        } else {
            current.html(label + str);
        };

        if ( wrap.find('.js-checkbox--active').length ) {
            wrap.find(".employees-filter__clear").addClass('employees-filter__clear--active');
        } else {
            wrap.find(".employees-filter__clear").removeClass('employees-filter__clear--active');
        }

    };


    $(document).on('click', '.employees-filter__inner .employees-filter__clear--active', clickClear);
    function clickClear() {
        var $wrap = $(this).closest('.employees-filter__inner');
        var $item = $wrap.find('.js-checkbox');
        var label = $wrap.data('label');

        $item.removeClass('js-checkbox--active');
        $wrap.find('.employees-filter__drop').text(label);

    };



    $(document).on('click', '.clinic', clickClinicTab);
    function clickClinicTab() {
        event.preventDefault();
        $('.clinic').removeClass('clinic--active');
        $(this).addClass('clinic--active');

        var target = $(this).data('tab');

        $('.order-main__wrap').removeClass('order-main__wrap--active');
        $('[data-name=' + target +']').addClass('order-main__wrap--active');
    };

    $(document).on('click', '.form__add', clickAddPet);
    function clickAddPet() {
        event.preventDefault();
        var block = $('.form__line-wrap:first-child').clone();
        $('.form__add').before(block);
        $('.form__remove').show();
    };

    $(document).on('click', '.form__remove', clickRemovePet);
    function clickRemovePet() {
        event.preventDefault();
        $('.form__line-wrap:last-of-type').remove();
        if ($('.form__line-wrap').length == 1) {
            $('.form__remove').hide();
        }
    };


    $(document).ready(function() {
        $('.js-mask').mask("+375 (99) 999-99-99");

    });


    $(document).on('keyup', '.js-keyup', keyUpFilter);
    function keyUpFilter() {
        var value = $(this).val().toUpperCase();

        $('.filter__button').each(
            function () {
                if ($(this).text().toUpperCase().search(value) > -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        );

    };


    var containerEl = document.querySelector('.js-filter');
    var mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
        });
    }






});
