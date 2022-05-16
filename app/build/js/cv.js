import data from '../data/data';

const downloadBtn = document.querySelector('.main__aside--download-btn');

const langBtn = document.querySelector('.main__aside--lang-btn-checkbox');
const mainDiv = document.querySelector('.main__div');
const cv = () => {
  if (window.innerWidth < 1440) {
    downloadBtn.parentNode.style.display = 'none';
  }
  const cvContainer = document.getElementById('cv');
  let checkStorage = JSON.parse(localStorage.getItem('lang'));
  if (checkStorage) {
    langBtn.checked = true;
    langPL();
  } else {
    langBtn.checked = false;
    langEN();
  }
  const opt = {
    margin: [0, -1],
    filename: 'maciejbartosCV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' },
  };

  downloadBtn.addEventListener('click', () => {
    document.childNodes[1].classList.add('scale');
    if (checkStorage) {
      mainDiv.style.paddingBlock = '34px';
    }
    setTimeout(() => {
      html2pdf(cvContainer, opt);
    }, 500);
    setTimeout(() => {
      document.childNodes[1].classList.remove('scale');
      mainDiv.style = null;
    }, 1000);
  });
  changeCvLang();
};
const changeCvLang = () => {
  langBtn.addEventListener('click', () => {
    if (langBtn.checked) {
      localStorage.setItem('lang', langBtn.checked);
      langPL();
      setTimeout(() => {
        location.reload();
      }, 200);
    } else {
      localStorage.setItem('lang', langBtn.checked);
      langEN();
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  });
};

const { titles, interests, profile } = data.cv;
const h3Headings = document.getElementsByTagName('h3');
const h2Headings = document.getElementsByTagName('h2');
const h3Titles = [...h3Headings].splice(0, 3);
const h2Titles = [...h2Headings].splice(1, h2Headings.length);
const headingArr = [...h3Titles, ...h2Titles];
const profileContent = document.querySelector('.main__div--section-paragraph');
const interestsList = document.getElementById('interestsList');
const englishLang = document.getElementById('En');
const polishLang = document.getElementById('Pl');
const bachelorEng = document.getElementById('BE');
const itSpecialist = document.getElementById('IS');

const langPL = () => {
  headingArr.map((item, index) => (item.innerText = titles.pl[index]));
  profileContent.innerText = profile.pl;
  interestsList.children.forEach((item, index) => {
    item.children[1].innerText = interests.pl[index];
  });
  englishLang.innerText === 'English' && (englishLang.innerText = 'Angielski');
  polishLang.innerText === 'Polish' && (polishLang.innerText = 'Polski');
  bachelorEng.innerText === 'Bachelor of Engineering' &&
    (bachelorEng.innerText = 'Informatyka Stosowana');
  itSpecialist.innerText === 'IT specialist' &&
    (itSpecialist.innerText = 'Technik informatyk');
};

const langEN = () => {
  headingArr.map((item, index) => (item.innerText = titles.en[index]));
  profileContent.innerText = profile.en;
  interestsList.children.forEach((item, index) => {
    item.children[1].innerText = interests.en[index];
  });
  englishLang.innerText === 'Angielski' && (englishLang.innerText = 'English');
  polishLang.innerText === 'Polski' && (polishLang.innerText = 'Polish');
  bachelorEng.innerText === 'Informatyka Stosowana' &&
    (bachelorEng.innerText = 'Bachelor of Engineering');
  itSpecialist.innerText === 'Technik informatyk' &&
    (itSpecialist.innerText = 'IT specialist');
};
export default cv;
