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
    search.parentElement.classList.toggle('open');
    document.querySelector('.search-box').value = '';
    [...item].forEach(i => i.style.display = '');
};
search.addEventListener('click', expand);


let input, filter, category, i;
input = document.querySelector('.search-box');

input.addEventListener('keyup', function () {
    filter = input.value.toUpperCase();

    for (i = 0; i < item.length; i++){
        category = item[i].querySelector('.item__category').getElementsByTagName('a')[0];
        if(category.innerHTML.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = '';
        }else{
            item[i].style.display = 'none';
        }
    }
});