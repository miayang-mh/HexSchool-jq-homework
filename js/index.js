
$(document).ready(function () {
    //  點擊展開效果
    $('.menu-product').click(function (e) {
        e.preventDefault();
        $('.menu-product-open').slideToggle();
    });

    //H1底圖輪播
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters 可選參數
        direction: 'horizontal',//方向,預設就horizontal可不設定
        loop: true,//循環:是的
        speed: 1000,
        autoplay: {
            delay: 1000,
        },//自動撥放
        effect: 'fade',//切換效果,fade漸淡

        // If we need pagination  如果需要分頁
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // lightbox 效果
    lightbox.option({
        'resizeDuration': 1000,
        'positionFromTop': 150,
    });

    $('.top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({

        })

    });

    //滾置最上效果
    $('.top a').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000); // 1000=1秒
    });
    //html,body→animate動化→scroll滾top最上0的位置



});
