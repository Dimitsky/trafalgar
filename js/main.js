// 

document.documentElement.classList.add( 'js' );

// burger

let burger = document.querySelector( '.burger' );
let menu = document.querySelector( '.nav-header__list' );

function closeMenu(e) {
  if ( e.target.closest( '.nav-header__list' ) ) return;

  burger.setAttribute( 'aria-expanded', 'false' );
  menu.classList.remove( 'active' );
  window.removeEventListener( 'click', closeMenu );
}

burger.addEventListener( 'click', e => {
  let expanded = burger.getAttribute( 'aria-expanded' ) === 'true';

  if ( expanded ) {
    burger.setAttribute( 'aria-expanded', 'false' );
    menu.classList.remove( 'active' );
  } else {
    burger.setAttribute( 'aria-expanded', 'true' );
    menu.classList.add( 'active' );
    window.addEventListener( 'click', closeMenu );
    e.stopPropagation();
  }
} );

// swiper

const swiper = new Swiper('.reviews__swiper', {
  speed: 400,
  spaceBetween: 100,
  slideClass: 'swiper-reviews__slide',
  slideActiveClass: 'swiper-reviews__slide--active',
  slidePrevClass: 'swiper-reviews__slide--prev',
  slideNextClass: 'swiper-reviews__slide--next',
  slidesPerView: 1,
  // slidesPerGroup: 1,
  pagination: {
    el: '.swiper-reviews__pagination',
    type: 'bullets',
    bulletClass: 'swiper-reviews__bullet',
    bulletActiveClass: 'swiper-reviews__bullet--active',
  },
  navigation: {
    prevEl: '.swiper-reviews__btn--prev',
    nextEl: '.swiper-reviews__btn--next',
    disabledClass: 'swiper-reviews__btn--disabled',
  }
});

// view all articles

let viewAll = document.querySelector( '#view-all' );

viewAll.addEventListener( 'click', e => {
  let hiddenArticles = document.querySelectorAll( '.articles__item.hidden' );

  hiddenArticles.forEach( article => {
    article.classList.remove( 'hidden' );
  } );
  viewAll.style.display = 'none';
} );