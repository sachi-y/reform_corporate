/*slick*/
$(function(){
    $('.p-slider__box').slick({
        autoplay:true,
        autoplaySpeed:0,
        cssEase:"linear",
        speed:20000,
        slidesToShow:2,
        swipe:false,
        arrows:false,
        pauseOnfocus:false,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick",
            },
        ],
    })
});
$(window).on("resize orientationchange", function () {
    $(".p-slider__box").slick("resize");
});

/*under line*/
$(function(){
    jQuery('p-header__listLink').click(function(){
    //.removeClassで全てのaについているu-underYellowを削除
    jQuery('p-header__listLink').removeClass('c-underYellow');
    //.addClassでクリックされたaにクラスを付与する
    jQuery(this).addClass('c-underYellow');
    return false;
    });
});

/*header fixed*/
$(function() {
    var headFixed = $(".p-headerFix");
	$(window).on('load scroll', function () {
		//現在の位置が700px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 950 && headFixed.hasClass('is-fixed') == false) {
            //headerの高さ分上に設定
            headFixed.css({"top": '-90px',"display":'flex'});
            //クラスfixedを付与
			headFixed.addClass('is-fixed');
			//位置を0に設定し、アニメーションのスピードを指定
			headFixed.animate({"top": 0},600);
		}
		//現在の位置が750px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 750 && headFixed.hasClass('is-fixed') == true){
			headFixed.removeClass('is-fixed');
            headFixed.css({"display": 'none'});
		}
	});
});

/*sp inquiryFix*/
$(function() {
    var bottomFixed = $(".p-inquiryFix");
	$(window).on('load scroll', function () {
		//現在の位置が700px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 950 && $(this).scrollTop() < 1800 && bottomFixed.hasClass('is-fixed') == false) {
            //headerの高さ分上に設定
            bottomFixed.css({"bottom": '-70px',"display":'flex'});
            //クラスfixedを付与
			bottomFixed.addClass('is-fixed');
			//位置を0に設定し、アニメーションのスピードを指定
			bottomFixed.animate({"bottom": '0'},300);
		}
		//現在の位置が750px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 750 && bottomFixed.hasClass('is-fixed') == true){
			bottomFixed.removeClass('is-fixed');
			bottomFixed.animate({"bottom": '-70px'},300);
		}
	});
});

const allHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
const mostBottom = allHeight - window.innerHeight;
window.addEventListener('scroll', ()=> {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= mostBottom) {
          // 最下部に到達したときに実行する処理
        var bottomFixed = $(".p-inquiryFix");
        bottomFixed.removeClass('is-fixed');
        bottomFixed.animate({"bottom": '-70px'},300);
    }
});

/*const allHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );
const mostBottom = allHeight - window.innerHeight;
window.addEventListener('scroll', ()=> {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= mostBottom) {
        // 最下部に到達したときに実行する処理
    }
});*/

$(function() {
    $('.p-menu__btn').click(function() {
        $('.p-menu__btn').toggleClass('is-active');
        $('.p-menu').toggleClass('is-active');
        if($('.p-menu').hasClass('is-active')){
            $('.p-menu__bg').css({opacity:"1", transition:"opacity 0.5s ease", width:"100%"});
        }else{
            $('.p-menu__bg').css({opacity:"0", transition:"opacity 0.5s ease", width:"0%"});
        }
    });
});





/*menu select*/
var button = document.getElementsByClassName('p-menu__item');
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        this.classList.toggle('is-activeMenu');
    });
}

/*sec ttl*/
$(function() {
    $(window).on('load scroll', function() {
        var hSize = window.innerHeight;
        var scroll = $(window).scrollTop();
        $('.c-marker').each(function() {
            if (scroll > $(this).offset().top - hSize +200) {
            $(this).addClass('activeMarker');
            }
        });
        $(".c-ulineCenter").each(function(){
            if (scroll > $(this).offset().top - hSize +200){
                $(this).addClass('activeLine');
            }
        });
        $('.c-sec__ttlFade').not('.activeFade').each(function(){
            if (scroll > $(this).offset().top - hSize +200){
                $(this).addClass("activeFade");
            }
        });
        $('.p-concept__fadein').each(function(){
            if (scroll > $(this).offset().top - hSize +200){
                $(this).addClass('showTextImg');
            }
        });
    });
});

/*how animation*/
$(function(){
    $(window).on('load scroll', function() {
        $(".show").each(function() {
            var winScroll = $(window).scrollTop();
            var winHeight = $(window).height();
            var scrollPos = winScroll + (winHeight * 0.9);
            if($(this).offset().top < scrollPos) {
                $(this).css({opacity: 1, transform: 'translate(0, 0)'});
            }
        });
    });
});

$(function() {
    $(".triggerBg1").hover(function() {
        $(".p-living__changeImage").attr("src","assets/photo/work-bg.PNG");
        $(".head1").addClass("activeHead");
        $(".head2").removeClass("activeHead");
    });
    $(".triggerBg2").hover(function() {
        $(".p-living__changeImage").attr("src","assets/photo/work-bg2.PNG");
        $(".head2").addClass("activeHead");
        $(".head1").removeClass("activeHead");
    });
});

/*btn detail animation jQueryあり*/
$(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
    //ここにスマホ・タブレットの時のjs
    } else {
    //ここにPCの時のjs
    $(".c-btn__detailLink").hover(
        function () {
            // hoverした時の処理(classを付与)
            $(".c-btn__detail").addClass("c-btn__detailJs");
        },
        function () {
            // hoverを外した時の処理(classを外す)
            $(".c-btn__detail").removeClass("c-btn__detailJs");
        });
    };
});

/*$(function(){
$(".c-btn__detailLink").hover(
    function () {
        // hoverした時の処理(classを付与)
        $(".c-btn__detail").addClass("c-btn__detailJs");
    },
    function () {
        // hoverを外した時の処理(classを外す)
        $(".c-btn__detail").removeClass("c-btn__detailJs");
    });
});*/

$(function(){
    var pagetop = $('.u-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
/*slide text
function scrollChk(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height()+50;
    $('.p-concept__scroll').not('.activeText').each(function(){
        var pos = $(this).offset().top;
        if (scroll > pos - windowHeight){
            $(this).addClass("activeText");
        }
    });
}
$(window).scroll(function (){
    scrollChk();
    });
    $('body').on('touchmove', function() {
    scrollChk();
});

/*under line center & sec ttl appeal
$(window).on('scroll',function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    $(".c-sec__lineAnim").each(function(){
        if (scroll > position - windowHeight + 200){
            $(this).addClass('activeLine');
        }
    });
    $('.c-sec__ttlFade').not('.activeFade').each(function(){
        if (scroll > position - windowHeight){
            $(this).addClass("activeFade");
        }
    });
});


/*sec ttl appeal
function scrollChk(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.c-sec__ttlAnim').not('.activeFade').each(function(){
        var pos = $(this).offset().top;
        if (scroll > pos - windowHeight){
            $(this).addClass("activeFade");
        }
    });
}

$(window).scroll(function (){
    scrollChk();
});
$('body').on('touchmove', function() {
    scrollChk();
});
*/