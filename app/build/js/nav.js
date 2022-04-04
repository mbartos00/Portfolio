import data from '../data/data.json';
import { animateHandWriteEN, animateHandWritePL } from './animate';

const titles = document.getElementsByTagName('h1');
const aboutText = document.getElementById('jsAbout');
const formInputs = document.getElementsByClassName('jsInput');
const cardDescription = document.getElementsByClassName('jsDescription');
const plFirstSvg = document.getElementById('plFirst');
const plSecondSvg = document.getElementById('plSecond');
const enFirstSvg = document.getElementById('enFirst');
const enSecondSvg = document.getElementById('enSecond');

export const languagePL = () => {
  const plTitle = data.pl.titles;
  const plAbout = data.pl.about;
  const plInputs = data.pl.inputs;
  const plDescriptions = data.pl.projects;

  //change language of titles
  [...titles].map((item, index) => (item.innerText = plTitle[index]));
  //change language of form placeholders and submit button
  [...formInputs].map((item, index) => {
    if (index + 1 === formInputs.length) item.innerText = plInputs[index];
    else item.setAttribute('placeholder', plInputs[index]);
  });
  aboutText.innerText = plAbout;
  [...cardDescription].map(
    (item, index) => (item.innerText = plDescriptions[index].description)
  );
  plFirstSvg.style.display = 'inline';
  plSecondSvg.style.display = 'inline';
  enFirstSvg.style.display = 'none';
  enSecondSvg.style.display = 'none';
  animateHandWritePL();
};
export const languageEN = () => {
  const enTitle = data.en.titles;
  const enAbout = data.en.about;
  const enInputs = data.en.inputs;
  const enDescriptions = data.en.projects;
  //change language of titles
  [...titles].map((item, index) => (item.innerText = enTitle[index]));
  //change language of form placeholders and submit button
  [...formInputs].map((item, index) => {
    if (index + 1 === formInputs.length) item.innerText = enInputs[index];
    else item.setAttribute('placeholder', enInputs[index]);
  });
  aboutText.innerText = enAbout;
  [...cardDescription].map(
    (item, index) => (item.innerText = enDescriptions[index].description)
  );
  plFirstSvg.style.display = 'none';
  plSecondSvg.style.display = 'none';
  enFirstSvg.style.display = 'inline';
  enSecondSvg.style.display = 'inline';
  animateHandWriteEN();
};
