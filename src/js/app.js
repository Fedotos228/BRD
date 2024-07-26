import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const headerSearch = document.querySelector('.header__search')

if (burger && menu) {
    flsFunctions.burger(burger, menu, header)
}
if (header) {
    flsFunctions.fixedHeader(header)
}

if (document.querySelectorAll('[data-dropdown]')) {
    flsFunctions.dropdown()
}

if (headerSearch) {
    const searchButton = headerSearch.querySelector('.header__search-button')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.header__search-button')) {
            headerSearch.classList.add('active')
            headerSearch.querySelector('input').focus()
        }

        if (!e.target.closest('.header__search') && !e.target.closest('.header__search-button')) {
            headerSearch.classList.remove('active')
        }
    })
}




// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })