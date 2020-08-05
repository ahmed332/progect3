$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.nav-list').slideToggle();
    });


    $(window).scroll(function(){
        var scro =$(this).scrollTop();
        if(scro>=100){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');

        }

        if(scro >= 1200){
            $('.timer').countTo();


        }
    });

   



$('.buttons button ').click(function(){
  
    $(this).addClass('active-btn').siblings().removeClass('active-btn');
    if ($(this).attr('id') == 'all'){
        $('. portfolio.images>div img ').fadOut();
        
    }
    else{
        $('.images > div img').fadOut();
        $('.images').contents().filter('.'+ $(this).attr('id')).fadeIn();

    }
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



// choose
$(' .c-left li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    var p = $(this).data('target');
    $('.content > div').hide();
    $('.content').contents().filter('#'+ p).fadeIn()

})




// pop video

$(".pop").magnificPopup({type:'iframe'});



$('.slick').slick({
    prevArrow:false
});



});