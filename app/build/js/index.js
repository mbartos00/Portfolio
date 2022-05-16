import header from './header';
import footer from './footer';

import Splide from '@splidejs/splide';
import main from './main';
import cv from './cv';
window.onbeforeunload = () => window.scrollTo(0, 0);

if (window.location.pathname == '/') {
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    start: '0',
    mediaQuery: 'min',
    pagination: false,
    breakpoints: {
      500: { destroy: true },
    },
  });

  splide.mount();
  header();
  main();
  footer();
} else {
  cv();
}
