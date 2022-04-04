import { animateAbout, animateArrow } from './animate';
const headerArrow = document.querySelector('.header__arrow');
const main = document.querySelector('.main');
const langBtn = document.querySelector('.header__nav--langBtn-checkbox');
import { languageEN, languagePL } from './nav';

const header = () => {
  let checkStorage = JSON.parse(localStorage.getItem('lang'));
  if (checkStorage) {
    langBtn.checked = true;
    languagePL();
  } else {
    langBtn.checked = false;
    languageEN();
  }
  scrollToMain();
  changeLanguage();
  animateArrow();
};

const scrollToMain = () => {
  headerArrow.addEventListener('click', () => {
    main.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'unset';
    animateAbout();
  });
};

const changeLanguage = () => {
  langBtn.addEventListener('click', () => {
    if (langBtn.checked) {
      localStorage.setItem('lang', langBtn.checked);
      languagePL();
    } else {
      localStorage.setItem('lang', langBtn.checked);
      languageEN();
    }
  });
};

export default header;
