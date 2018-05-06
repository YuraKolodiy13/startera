$(function () {
    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

let item = document.querySelectorAll('.item');

[...item].forEach(item => {
    let percentValue = Math.round(+item.querySelector('.item__in').innerHTML / +item.querySelector('.item__need').innerHTML * 100) + '%';
    // console.log(percentValue);
    item.querySelector('.item__percent').innerHTML = percentValue;
    item.querySelector('.item__bar').style.width = percentValue;
});

let burger = document.querySelector('.navMain__btn');
let navList = document.querySelector('.navMain ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});



let search = document.querySelector('.search-button');

let expand = () =>{
    search.parentElement.classList.toggle('open')
    // let input = document.querySelector('.input');
    // search.classList.toggle('close');
    // input.classList.toggle('square');
    // if(search.classList.contains('close')){
    //     input.focus();
    // }else {
    //     input.blur();
    // }

};
search.addEventListener('click', expand);
// function expand() {
//     $(".search").toggleClass("close");
//     $(".input").toggleClass("square");
//     if ($('.search').hasClass('close')) {
//         $('input').focus();
//     } else {
//         $('input').blur();
//     }
// }
// $('button').on('click', expand);