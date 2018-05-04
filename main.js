$(function () {
    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 8
    });
});

let item = document.querySelectorAll('.item');

[...item].forEach(item => {
    let percentValue = Math.round(+item.querySelector('.item__in').innerHTML / +item.querySelector('.item__need').innerHTML * 100) + '%';
    // console.log(percentValue);
    item.querySelector('.item__percent').innerHTML = percentValue;
    item.querySelector('.item__bar').style.width = percentValue;
});

