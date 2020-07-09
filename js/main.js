$(function () {



    try {
        $('.featured__slider-inner').slick({
            prevArrow: $('.featured__left'),
            nextArrow: $('.featured__right'),
            appendArrows: $('.featured__slider-btn')
        });
    }
    catch{ }

    $('.featured__footer-stars').rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true
    });

    try {
        $('.followers__category-box').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.followers__left'),
            nextArrow: $('.followers__right'),
            appendArrows: $('.followers__top-btn'),
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    catch{ }


    $('.product__footer-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.product__info-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.aside__item-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });




    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.products__top-position').on('click', function () {
        $('.product__item').addClass('list');
        $('.products__top-position').addClass('active');
        $('.products__top-filter').removeClass('active');
    });
    $('.products__top-filter').on('click', function () {
        $('.product__item').removeClass('list');
        $('.products__top-filter').addClass('active');
        $('.products__top-position').removeClass('active');
    });
    $('.messege__item').on('click', function () {
        $(event.target).parent().addClass('active');
    });

    $('.header__burger').on('click', function () {
        $('.header__nav').slideToggle();
    });


    $('.burger__menu').on('click', function () {
        $(".header__drop-down").toggle()

    });



    $('.user__slide').on('click', function () {
        $('.header__proffil').toggleClass('active');
        $('.header__circles').toggleClass('active');
        $('.header__logo').toggleClass('active');

    });

    $(document).ready(function () {
        var button = $('#button-up');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                button.fadeIn();
            } else {
                button.fadeOut();
            }
        });
        button.on('click', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    $('.product-one__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.aside__item-singl').on('click', function () {
        $('.aside__item-singl').addClass('active');
        $('.aside__item-multi').removeClass('active');
    });
    $('.aside__item-multi').on('click', function () {
        $('.aside__item-multi').addClass('active');
        $('.aside__item-singl').removeClass('active');
    });
    $('.login__remember').on('click', function () {
        $('.login__remember-on').toggleClass('active');
    });

    $('input, select').styler();

    $('.blog__popular').on('click', function () {
        $('.blog__content-popular').addClass('active');
        $('.blog__content-latest').removeClass('active');
    });
    $('.blog__latest').on('click', function () {
        $('.blog__content-latest').addClass('active');
        $('.blog__content-popular').removeClass('active');
    });


    try {
        var mixer = mixitup('.products__inner-content');
    }
    catch{ }

    try {
        var mixer = mixitup('.release__category-box');
    }
    catch{ }
});