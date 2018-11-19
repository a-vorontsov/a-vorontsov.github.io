const normalScrollElements = (window.innerWidth < 1150) ? '.scrollable-element' : null;
const paddingTop = (window.innerWidth < 992) ? '1em' : '3em';

new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  scrollHorizontally: true,
  css3: true,
  scrollingSpeed: 700,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOut',
  easingcss3: 'ease',
  loopHorizontal: false,
  interlockedSlides: false,
  dragAndMove: true,
  resetSliders: false,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 3,
  normalScrollElements,
  bigSectionsDestination: null,
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,
  controlArrows: true,
  verticalCentered: false,
  paddingTop,
  paddingBottom: '10px',
  responsiveSlides: true,
  sectionSelector: '.section',
  slideSelector: '.slide',
  sectionsColor: ['#CE9FFC', '#fff', '#efefef', '#fff', '#efefef', '#fff',]
});
