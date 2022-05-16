import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const card = document.getElementsByClassName('main__projects--card');
const hoverArrow = document.getElementsByClassName('hover--arrow');

export const animateArrow = () => {
  gsap.timeline().from('.header__arrow', {
    yPercent: -40,
    duration: 0.7,
    yoyo: true,
    repeat: -1,
  });
};

export const animateAbout = () => {
  gsap.fromTo(
    '#jsAbout',
    {
      opacity: 0,
      yPercent: -200,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 1,
      delay: 0.6,
    }
  );
  gsap.fromTo(
    '.bitmoji',
    {
      opacity: 0,
      xPercent: -200,
    },
    {
      opacity: 1,
      xPercent: 0,
      duration: 1,
      delay: 0.5,
    }
  );
};

export const animateSkills = () => {
  gsap.fromTo(
    '.main__about--skils',
    {
      opacity: 0,
      xPercent: -100,
    },
    {
      xPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#jsAbout',
        start: 'top 20%',
        scrub: true,
        once: true,
      },
    }
  );
};
export const animateProjects = () => {
  gsap.registerPlugin(ScrollTrigger);

  [...card].map((item, index) => {
    if (index % 2 == 0) {
      gsap.fromTo(
        item,
        {
          xPercent: -200,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 2,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        }
      );
    } else {
      gsap.fromTo(
        item,
        {
          xPercent: 200,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 2,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        }
      );
    }
  });
  animateHoverArrow();
};

const animateHoverArrow = () => {
  hoverArrow % 2 == 0 ? (hoverArrow.style.transform = 'rotate(180deg)') : '';
  gsap.timeline().from(hoverArrow, {
    xPercent: -20,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
  });
};

//handwrite animation
const first = document.getElementsByClassName('a');
const second = document.getElementsByClassName('b');
const third = document.getElementsByClassName('c');
const fourth = document.getElementsByClassName('d');
export const animateHandWriteEN = () => {
  [...first, ...second].map((item, index) => {
    //get total length of path
    const length = item.getTotalLength();
    item.style.strokeDashoffset = length;
    item.style.strokeDasharray = length;

    //delay for each letter
    setTimeout(() => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          strokeDashoffset: 0,
        }
      );
    }, 400 * index);
  });
};
export const animateHandWritePL = () => {
  [...third, ...fourth].map((item, index) => {
    //get total length of path
    const length = item.getTotalLength();
    item.style.strokeDashoffset = length;
    item.style.strokeDasharray = length;

    //delay for each letter
    setTimeout(() => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          strokeDashoffset: 0,
        }
      );
    }, 400 * index);
  });
};
