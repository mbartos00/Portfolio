import { animateProjects, animateSkills } from './animate';

const card = document.getElementsByClassName('main__projects--card');

const main = () => {
  incrementCardNumber();
  animateProjects();
  animateSkills();
};

const incrementCardNumber = () =>
  [...card].map((item, index) => item.setAttribute('data', `0${index + 1}`));

export default main;
