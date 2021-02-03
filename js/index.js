
$(document).ready(function(){
var images = ["./img/img.png","./img/1.png","./img/2.png"];
    var interval = window.setInterval(rotateSlides, 7000)
    function rotateSlides(){
        var firstSlide = $('#show').find('div:first')
        var width = firstSlide.width()
            firstSlide.animate({marginLeft: -width}, 1500, function(){
            var lastSlide = $('#show').find('div:last')
                lastSlide.after(firstSlide);
                firstSlide.css({marginLeft: 0})
          })
    }
    $('.carousel-arrow-left').click(previousSlide)
    $('.carousel-arrow-right').click(nextSlide)
    function nextSlide(){
        window.clearInterval(interval);
        var currentSlide = $('#show').find('div:first');
        var width = currentSlide.width();
        currentSlide.animate({marginLeft: -width}, 1500, function(){
          var lastSlide = $('#show').find('div:last')
          lastSlide.after(currentSlide);
          currentSlide.css({marginLeft: 0})
          interval = window.setInterval(rotateSlides, 7000);
        });
      }
    function previousSlide(){
        window.clearInterval(interval);
        var currentSlide = $('#show').find('div:first');
        var width = currentSlide.width();
        var previousSlide = $('#show').find('div:last')
        previousSlide.css({marginLeft: -width})
        currentSlide.before(previousSlide);
        previousSlide.animate({marginLeft: 0}, 1500, function(){
          interval = window.setInterval(rotateSlides, 7000);
        });
    }
    $('.carousel-arrow-left').css({'background-color': 'transparent'})
    $('.carousel-arrow-right').css({'background-color': 'transparent'})
    $('#show').append(
        `<div id="carousel">
            <img class="main-img" src=`+images[0] +` alt="" active>
        </div>
        <div id="carousel">
            <img class="main-img" src=`+images[1] +` alt="">
        </div>
        <div id="carousel">
            <img class="main-img" src=`+images[2] +` alt="">
        </div>
        
        `
    )
    $('#show').css({'overflow': 'hidden'})


var shopImg = ['./img/board.png','./img/board1.png','./img/board2.png']

    $('.shop-content').append(
        `
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[0]+` alt="">
            <div class="item-block">
                <span class="little-title">Funboards</span>
                <span class="title mt-2">Chilli Rare Bird</span>
                <div class="price-block">
                    <span class="price">$890</span>
                    <span class="buy">BUY</span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[1]+` alt="">
            <div class="item-block">
                <span class="little-title">Surfboards</span>
                <span class="title mt-2">Emery NEM XF</span>
            <div class="price-block">
                    <span class="price">$950</span>
                    <span class="buy">BUY</span>
            </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[2]+` alt="">
            <div class="item-block">
                <span class="little-title">Funboards</span>
                <span class="title mt-2">Agency GROM</span>
                <div class="price-block">
                    <span class="price">$670</span>
                    <span class="buy">BUY</span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[0]+` alt="">
            <div class="item-block">
                <span class="little-title">Funboards</span>
                <span class="title mt-2">Chilli Rare Bird</span>
                <div class="price-block">
                    <span class="price">$890</span>
                    <span class="buy">BUY</span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[1]+` alt="">
            <div class="item-block">
                <span class="little-title">Surfboards</span>
                <span class="title mt-2">Emery NEM XF</span>
            <div class="price-block">
                    <span class="price">$950</span>
                    <span class="buy">BUY</span>
            </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-color">
            <img class="board" src=`+shopImg[2]+` alt="">
            <div class="item-block">
                <span class="little-title">Funboards</span>
                <span class="title mt-2">Agency GROM</span>
                <div class="price-block">
                    <span class="price">$670</span>
                    <span class="buy">BUY</span>
                </div>
            </div>
        </div>
    </div>
    `
    )
    var shopInterval = window.setInterval(shopRotateSlides, 3000)
    function shopRotateSlides(){
        var shopFirstSlide = $('.shop-content').find('.col-md-4:first')
        var shopWidth = shopFirstSlide.width('33.3333333333%')
            shopFirstSlide.animate({marginLeft: -shopWidth}, 1500, function(){
            var shopLastSlide = $('.shop-content').find('.col-md-4:last')
                shopLastSlide.after(shopFirstSlide);
                shopFirstSlide.css({marginLeft: 0})
          })
    }
    function shopNextSlide(){
        window.clearInterval(shopInterval);
        var shopCurrentSlide = $('.shop-content').find('.col-md-4:first');
        var shopWidth = shopCurrentSlide.width('33.3333333333%');
        shopCurrentSlide.animate({marginLeft: -shopWidth}, 1500, function(){
          var shopWidth = $('.shop-content').find('.col-md-4:last')
          shopWidth.after(shopCurrentSlide);
          shopCurrentSlide.css({marginLeft: 0})
          shopInterval = window.setInterval(shopRotateSlides, 3000);
        });
      }
    function shopPreviousSlide(){
        window.clearInterval(shopInterval);
        var shopCurrentSlide = $('.shop-content').find('.col-md-4:first');
        var shopWidth = shopCurrentSlide.width('33.3333333333%');
        var shopPreviousSlide = $('.shop-content').find('.col-md-4:last')
        shopPreviousSlide.css({marginLeft: -shopWidth})
        shopCurrentSlide.before(shopPreviousSlide);
        shopPreviousSlide.animate({marginLeft: 0}, 1500, function(){
            shopInterval = window.setInterval(shopRotateSlides, 3000);
        });
    }
    $('.shop-arrow-left').click(shopNextSlide)
    $('.shop-arrow-right').click(shopPreviousSlide)
})