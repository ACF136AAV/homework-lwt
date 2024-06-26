import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

import { initSwiper } from './swiper';

import { getApi } from './api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const containerSwiper = document.querySelector('.swiper_js');
const list = document.querySelector('.swiper_reviews');
const placeholderText = document.querySelector('.placeholder_text');


const swiperParam = {
  navigation: {
    nextEl: '.end',
    prevEl: '.start',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  mousewheel: {
    sensitivity: 1,
  },
};

async function addCardsOnPage() {
  try {
    const data = await getApi();
    list.insertAdjacentHTML('beforeend', createMarkup(data));
    initSwiper(containerSwiper, swiperParam);
    
  } catch (error) {
    placeholderText.classList.replace('visually-hidden', 'title_not_found');
    iziToast.show({
      message: 'Reviews Not found',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      position: 'topRight',
      timeout: 2000,
    });
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) => `
      <ul class="swiper-slide reviews_cards">
      <li class="card">
      <img class="card_img" src="${avatar_url}" alt="photo">
      <h3 class="card_title">${author}</h3>
      <p class="card_text">${review}</p> 
    </li>
    </ul>
    `
    )
    .join('');
}

addCardsOnPage();
