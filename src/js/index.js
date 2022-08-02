import Swiper, { Pagination } from "swiper"
import 'swiper/css'

import '../scss/modal.css'
import '../scss/style.scss'
import '../scss/box.scss'

const slider = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 24,
})

document.addEventListener('load', e => {
	console.log('Page loaded success')
})