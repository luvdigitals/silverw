// JavaScript source code
$(function () {
    //$('#mainNav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
$(document).ready(function () {
    $wh = $(window).height();
    $ww = $(window).width();
    if ($ww <= 768) {
        $('#serviceLink').click(function () {
            $(location).attr('href', '/services/');
        })
    } else {
        $('#serviceLink').click(function () {
            $(this).next().fadeIn('fast', 'linear');
            $('#layertop').fadeIn('fast', 'linear');
            return false;
        })

    }
    $('.submenu').mouseleave(function () {

        $('.submenu').fadeOut('fast', 'linear');
        $('#layertop').fadeOut('fast', 'linear');
    })

    $('#hamburger').click(function () {
        $('#mainNav').slideToggle();

    });

    var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
   $('.peopleContainer').click(function () {
        $('.peopleHoverPanel').addClass('CurrentState');

    });
    $('.peopleContainer1').click(function () {
       $('.peopleHoverPanel1').addClass('CurrentState');

    });
	 $('.peopleContainer2').click(function () {
       $('.peopleHoverPanel2').addClass('CurrentState');

    });
	 $('.peopleContainer3').click(function () {
       $('.peopleHoverPanel3').addClass('CurrentState');

    });
    $('.projectContainer').click(function () {
        // alert();
        $('.projectContainer').css({ 'opacity': '0.2' })
        $(this).css({ 'opacity': '1' })
        $('.projectHoverPanel').slideDown('slow');

    });

    /* News and Projects Grid*/

    $('#og-grid li.itemContainer a').on('click', (function () {
        //alert()
        //$('.itemContainer').removeClass('opacity1').addClass('opacity05');
        //$(this).parent().removeClass('opacity05').addClass('opacity1');
		$('#og-grid').css('background','#rgba(250,250,250,0.5)')
        //$(this).css({ 'opacity': '1' })
        //$('.itemContainer span').css({ 'display': 'none' })
        //$(this).find('span').css({ 'display': 'block' });
        //$('.itemContainer').off('click');

    }));
    //$('body').off('click', 'itemContainer');






    $('.btnClose').click(function () {
        $('.peopleHoverPanel, .projectHoverPanel,.peopleHoverPanel1,.peopleHoverPanel2,.peopleHoverPanel3').removeClass('CurrentState');

    });
 $('.btnClose').click(function () {
        $('.newspanelhide').removeClass('CurrentState');

    });



    $('#btnCloseProject').click(function () {
        $('.projectHoverPanel').slideUp('slow');
        $('.projectContainer').css({ 'opacity': '1' })

    });
    $('.servicesList').click(function () {
        //alert();
        //$(location).attr('href', '/services/test-service/');

    });
    $('.controls a').click(function () {
        return false;
        //alert();
        //$(location).attr('href', '/services/aftercare-management/');

    });

    $('.carousel').carousel({
        interval: false,
    });
    $('#Carousel').carousel({
        interval: false,
    });

    $('#myCarousel').on('slid.bs.carousel', checkitem);   

    $('#Carousel').on('slid.bs.carousel', checkitem1);

   

});
$(function () {
    //$('#Container').mixItUp();
});
function checkitem()                        // check function
{
    //alert();
    var $this = $('#myCarousel');
    if ($('#myCarousel .carousel-inner .item:first').hasClass('active')) {
        //
        $this.children('.left.carousel-control').hide();

        $this.children('.right.carousel-control').show();
    } else if ($('#myCarousel .carousel-inner .item:last').hasClass('active')) {

        $this.children('.right.carousel-control').hide();
        $this.children('.left.carousel-control').show();
    } else {
        $this.children('.carousel-control').show();

    }
}

function checkitem1()                        // check function
{
    //alert();
    var $this = $('#Carousel');
    if ($('#Carousel .carousel-inner .item:first').hasClass('active')) {
        //
        $('.right.carousel-control').css('display', 'block');
        $('.left.carousel-control').css('display', 'none');
    } else if ($('#Carousel .carousel-inner .item:last').hasClass('active')) {

        $('.right.carousel-control').css('display', 'none');
        $('.left.carousel-control').css('display', 'block');
    } else {
        $this.children('.carousel-control').css('display', 'block');

    }
}
/* Responsive Images*/
function getWidth() {
    return document.documentElement.clientWidth;
}
function islg() {
    return (getWidth() >= 1200);
}
function ismd() {
    return ((getWidth() >= 992) && (getWidth() <= 1199));
}
function issm() {
    return ((getWidth() >= 768) && (getWidth() <= 991));
}
function isxs() {
    return (getWidth() <= 767);
}

var imgAttr = "";
function responsiveImages() {
    var dataAttr;
    if (islg()) {
        dataAttr = "data-lg";
    }
    else if (ismd()) {
        dataAttr = "data-md";
    }
    else if (issm()) {
        dataAttr = "data-sm";
    }
    else if (isxs()) {
        dataAttr = "data-xs";
    }

    if (imgAttr === dataAttr) {
        return;
    }
    imgAttr = dataAttr;

    $('.responsive').each(function (index) {
        $(this).attr('src', $(this).attr(dataAttr));
    });
}
$(function () {
    responsiveImages();
    $(window).resize(responsiveImages);
});


