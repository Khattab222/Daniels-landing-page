const sections =document.querySelectorAll('section');




$(window).scroll(() => {
    let aboutOffset = $('#about').offset().top


    if ($(window).scrollTop() >= aboutOffset - 200) {
        $('.navbar').css({'backgroundColor': "RGB(33, 37, 41)", 'padding': '20px 0'});
      $('.skills .item1 .skil-progress').animate({'width': '95%'}, 2000);
      $('.skills .item2 .skil-progress').animate({'width': '80%'}, 2000);
      $('.skills .item3 .skil-progress').animate({'width': '90%'}, 2000);
        
    }else{
        $('.navbar').css({'backgroundColor': "transparent", 'padding': '20px 0'});
     
    }

    sections.forEach(item => {
      
        let itemId = item.attributes.id.value;
        if (item.getBoundingClientRect().top >= -400 &&             // if section on view ?
     item.getBoundingClientRect().top <= 150){
        $(".navbar a").removeClass('active')

  $(`.navbar a[href='#${itemId}']`).addClass('active')
     }
    });
  
});


$(document).ready(function () {
    $('.loading .loader').fadeOut(1000,() => {
        $('.loading').fadeOut(1000,() => {
            $('body').css('overflow' , 'auto')
        })
    })
})



// portfolio
let tabs = document.querySelectorAll('.port-buttons div');

tabs.forEach(item => {
    item.addEventListener('click', (e) => {
        let dataShow = e.target.getAttribute('data-show');
      
       if (dataShow == 'all' ) {
        $('.port-buttons div').removeClass('active');
        $(e.target).addClass('active')
         $('.content').addClass('active')
       }else{
        $('.port-buttons div').removeClass('active');
        $(e.target).addClass('active')
        $('.content').removeClass('active');
        $(`.${dataShow}`).addClass('active')
       }

    })
});


// for carousel plugin


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 10,
        loop:true,
        lazyLoad: true,
        autoplay:true,
        autoplayTimeout: 3000,
        center: true,
        autoplayHoverPause: true,
      
  
        
    });
  });

// for wow plugin
new WOW().init();

// for typing plugin
var typed = new Typed('.element', {
    strings: [ 'larry Daniels ', ' web developer',' web Designer '],
    typeSpeed: 200,
    backSpeed: 200,
    showCursor: false,
    loop: true,
   
  });










