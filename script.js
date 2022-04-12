




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
$(document).ready(function(e){
    $('.hero-thumbnail-img-box').eq(0).click(function(){
        $('.main-hero-img-container').html( '<img src="./ecommerce-product-page-main/images/image-product-1.jpg" alt="hero-img" id="hero-main-img">')
    })
    $('.hero-thumbnail-img-box').eq(1).click(function(){
        $('.main-hero-img-container').html( '<img src="./ecommerce-product-page-main/images/image-product-2.jpg" alt="hero-img" id="hero-main-img">')
    })
    $('.hero-thumbnail-img-box').eq(2).click(function(){
        $('.main-hero-img-container').html( '<img src="./ecommerce-product-page-main/images/image-product-3.jpg" alt="hero-img" id="hero-main-img">')
    })
    $('.hero-thumbnail-img-box').eq(3).click(function(){
        $('.main-hero-img-container').html( '<img src="./ecommerce-product-page-main/images/image-product-4.jpg" alt="hero-img" id="hero-main-img">')
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