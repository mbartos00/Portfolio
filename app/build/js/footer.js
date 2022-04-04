const toTopBtn = document.querySelector('.footer--arrow');
const form = document.querySelector('.footer__form');
const name = document.querySelector('.footer__form--name');
const text = document.querySelector('.footer__form--text');
const email = document.querySelector('.footer__form--email');
const popUp = document.querySelector('.header__message');
const popUpBtn = document.querySelector('.header__message-btn');

const footer = () => {
  toTopBtn.addEventListener('click', () =>
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  );
  submitForm();
};

const submitForm = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://formsubmit.co/ajax/425f1fcedf05abc4685de6f4fa4921e6', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: text.value,
      }),
    })
      .then((response) => response.json())
      .then(successSend())
      .catch((error) => console.log(error));
  });
};

const successSend = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
  popUp.classList.add('comein');
  popUpBtn.addEventListener('click', () => {
    popUp.classList.remove('comein');
  });
  name.value = '';
  test.value = '';
  email.value = '';
};

export default footer;
