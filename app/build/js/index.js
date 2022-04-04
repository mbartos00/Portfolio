import header from './header';
import footer from './footer';

import Splide from '@splidejs/splide';
import main from './main';
let splide = new Splide('.splide', {
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

window.onbeforeunload = () => window.scrollTo(0, 0);

header();
main();
footer();
