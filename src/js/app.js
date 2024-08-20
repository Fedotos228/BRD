import gsap from 'gsap'
import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()
flsFunctions.sliders()

const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav--mobile')
const headerSearch = document.querySelector('.header__search')
const linkItem = document.querySelectorAll('[data-icon]')
const heroCards = document.querySelectorAll('.hero-cards__item')

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
	const headerSearchButton = document.querySelector('.header__search-button')
	document.addEventListener('click', e => {
		if (e.target.closest('.header__search-button')) {
			headerSearchButton.setAttribute('type', 'submit')
			headerSearch.classList.add('active')
			headerSearch.querySelector('input').focus()
		}

		if (
			!e.target.closest('.header__search') &&
			!e.target.closest('.header__search-button')
		) {
			headerSearch.classList.remove('active')
			headerSearchButton.setAttribute('type', 'button')

		}
	})
}

new Swiper('.slider-hero__body', {
	effect: 'fade',
	// autoplay: {
	//     delay: 3000,
	//     disableOnInteraction: false,
	// },
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

function createIcon(icon, type, paths) {
	icon.classList.add(`icon-${type}`)
	for (let i = 0; i < paths; i++) {
		let path = document.createElement('span')
		path.classList.add(`path${i + 1}`)
		icon.appendChild(path)
	}
}

if (linkItem) {
	linkItem.forEach(item => {
		const icon = item.querySelector('i')
		const link = item.getAttribute('href')
		const extension = link.split('.').pop()

		switch (extension) {
			case 'pdf':
				return createIcon(icon, 'pdf', 9)
			case 'doc':
			case 'docx':
				return createIcon(icon, 'docx', 7)
			case 'xlsx':
			case 'xlx':
				return createIcon(icon, 'xlsx', 7)
			default:
				icon.classList.add('icon-link')
		}
	})
}

if (heroCards.length > 0) {
	heroCards.forEach(card => {
		card.addEventListener('mouseover', () => {
			gsap.to(card, {
				duration: 0.3,
				backgroundImage:
					'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url("../img/uzor.png") ',
			})
		})

		card.addEventListener('mouseout', () => {
			gsap.to(card, {
				duration: 0.3,
				backgroundImage:
					'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 1) 100%), url("../img/uzor.png") ',
			})
		})
	})
}

const modal = document.querySelector('.modal')

if (modal) {
	const modalClose = modal.querySelector('.modal__close')
	const modalButton = document.querySelector('#modal-button')

	modalButton.addEventListener('click', () => {
		modal.showModal()
	})

	modalClose.addEventListener('click', () => {
		modal.close()
	})
}

const counters = document.querySelectorAll('.statistics-item span')
const statistics = document.querySelector('.statistics')
const speed = 1500

if (statistics) {
	window.addEventListener('scroll', () => {
		const statisticPos = statistics.offsetTop - 200
		const scrollPos = window.scrollY

		if (scrollPos >= statisticPos - 300) {
			counters.forEach(counter => {
				const animate = () => {
					const value = +counter.getAttribute('akhi')
					const data = +counter.innerText

					const time = value / speed
					if (data < value) {
						counter.innerText = Math.ceil(data + time)
						setTimeout(animate, 1)
					} else {
						counter.innerText = value
					}
				}
				animate()
			})
		}
	})
}

const backButton = document.querySelector('#back-button')

function goBackHistory() {
	window.history.back()
}

if (backButton) {
	backButton.addEventListener('click', goBackHistory)
}

const accordionItems = document.querySelectorAll('.accordion-item')

if (accordionItems) {
	accordionItems.forEach(item => {
		const expander = item.querySelector('.accordion-header')
		expander.addEventListener('click', () => {
			item.dataset.expanded =
				item.dataset.expanded === 'true' ? 'false' : 'true'
		})
	})
}

const copyright = document.querySelector('.copyright')

if (copyright) {
	const currentYear = new Date().getFullYear()

	let textContent = copyright.textContent

	let contentArray = textContent.split(" ")

	contentArray = contentArray.map(word => {
		return word.includes("{year}.") ? `${currentYear}.` : word
	})

	let newContent = contentArray.join(" ")

	copyright.textContent = newContent
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
