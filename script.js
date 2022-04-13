




// msg-box script 
$(document).ready(function () {
    $('.add-to-cart-btn').click(function () {
        var _cartValue = $('#cart-value').html();
        if (_cartValue == 0) {
            $('.msg').show()
            $('.alert-msg').hide()
        } else if (_cartValue > 0) {
            $('.msg').hide()
        }
    })
})



// add-to-cart-script
$(document).ready(function () {
    i = 0;
    let _cartValue = $('#cart-value').html(0)
    if (_cartValue.html() == 0) {
        i = 0;
        $('.cart-plus-btn').click(function () {
            $('.alert-msg').hide()
            $('.msg').hide()
            $(_cartValue).html(++i)
        })
    }
    else (_cartValue.html() > 0)
    $('.cart-minus-btn').click(function () {
        $(_cartValue).html(--i)
        if (_cartValue.html() <= 0) {
            _cartValue.html(0)
            i = 0;
            $('.alert-msg').show()
            $('.msg').hide()
        }
    })
})




// cart script
$(document).ready(function(){
    $('.cart-section').hide()
    $('#cart').click(function(){
        $('.cart-section').toggle()
    })
})

$(document).ready(function(){
    $('.cart-items').hide()
    $('.add-to-cart-btn').click(function(){
    if( i==0){
        $('.cart-items').hide()
        $('.empty-heading').show()
    }else if(i>0){
        $('.cart-items').show()
        $('.empty-heading').hide()
        $('.quantity').html(i)
        $('.amount').html(i*125.00)
    }
    })
})


$(document).ready(function(){
    $('.cart-section-delete-icon').click(function(){
        $('#cart-value').html(0)
        $('.cart-items').hide()
        $('.empty-heading').show()
        $('.notification').hide()
    })
})



$(document).ready(function(){
    $('.notification').hide()
    $('.add-to-cart-btn').click(function(){
        if(i>0){
            $('.notification').show() 
        }else if(i<=0){
            $('.notification').hide()
        }
    })
})



// image-script 

$(document).ready(function(){
    $('.hero-thumbnails-img').click(function(){
        $('#hero-main-img').attr('src' , this.src)
    })
    $('.overlay-hero-thumbnails-img').click(function(){
        $('.overlay-hero-main-img').attr('src' , this.src)
    })

})



// hamburger-script 

$(document).ready(function(){
    $('#open').click(function(){
        $('.hamburger').show('slow')
    })
    $('#close').click(function(){
        $('.hamburger').hide('slow')
    })
})




$(document).ready(function(){
    $(window).scroll(function(){
        $('.cart-section').hide()
    })
})





// overlay-script 
$(document).ready(function(){
    $('.overlay').hide()
    $('#hero-main-img').click(function(){
        $('.overlay').show()
    })

    $('#overlay-close').click(function(){
        $('.overlay').hide()
    })
})





// slider
$(document).ready(function(){
    var currentSlide = 1;
    var position = 0;
    var slideCount = $('.overlay-main-hero-img-container').children().length;

    // right-indicator 
    $('.right-indicator').click(function(){
        if(currentSlide<slideCount){
            position = position -425
            $('.overlay-hero-main-img').css({'transform' : 'translate(' + position +'px)','transition': '1s'})
            currentSlide++
            console.log(currentSlide)
        }
    })  

//  left-indicator
$('.left-indicator').click(function(){
    if(currentSlide>1){
        position = position + 425
        $('.overlay-hero-main-img').css({'transform' : 'translate(' + position +'px)','transition': '1s'})
        currentSlide--
    }else{
        currentSlide =1
    }
})
})



// slider 1025px 

$(document).ready(function(){
    var currentSlide = 1;
    var position = 0;
    var slideCount = $('.banner-main-hero-img-container').children().length;

    // right-indicator 
    $('.hero-right-indicator').click(function(){
        if(currentSlide<slideCount){
            position = position -100
            $('.banner-hero-main-img').css({'transform' : 'translate(' + position +'%)','transition': '1s'})
            currentSlide++
            console.log(currentSlide)
        }
    })  

//  left-indicator
$('.hero-left-indicator').click(function(){
    if(currentSlide>1){
        position = position + 100
        $('.banner-hero-main-img').css({'transform' : 'translate(' + position +'%)','transition': '1s'})
        currentSlide--
    }else{
        currentSlide =1
    }
})
})
