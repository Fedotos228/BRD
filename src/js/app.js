import gsap from 'gsap'
import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()
flsFunctions.sliders()

const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const headerSearch = document.querySelector('.header__search')
const linkItem = document.querySelectorAll('.links-item')

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

new Swiper('.slider-hero__body', {
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    touchRatio: 0,
    simulateTouch: false,
    loop: true,
    preloadImages: false,
    lazy: true,
    navigation: {
        nextEl: '.hero-slider-arrow__next',
        prevEl: '.hero-slider-arrow__prev',
    },
    on: {
        lazyImageReady: function () {
            ibg()
        },
    },
})

function createIcon(icon, type, iterations) {
    icon.classList.add(`icon-${type}`)
    for (let i = 1; i < iterations; i++) {
        let path = document.createElement('span')
        path.classList.add(`path${i}`)
        icon.appendChild(path)
    }
}

if (linkItem) {
    linkItem.forEach(item => {
        const icon = item.querySelector('i')
        const link = item.getAttribute('href')
        const extention = link.split('.').pop()

        switch (extention) {
            case 'pdf':
                createIcon(icon, 'pdf', 9)
                break
            case 'docx':
                createIcon(icon, 'docx', 7)
                break
            case 'xlsx':
                createIcon(icon, 'xlsx', 7)
                break
            default:
                icon.classList.add('icon-link')
        }
    })
}


const heroCards = document.querySelectorAll('.hero-cards__item')

if (heroCards.length > 0) {
    heroCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            gsap.to(card, {
                duration: 0.3,
                backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url("../img/uzor.png") ',
            })
        })

        card.addEventListener('mouseout', () => {
            gsap.to(card, {
                duration: 0.3,
                backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 1) 100%), url("../img/uzor.png") ',
            })
        })
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

