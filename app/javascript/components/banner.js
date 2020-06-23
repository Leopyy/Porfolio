import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const banner = document.querySelector(".banner");
  if (banner) {
      new Typed('#banner-typed-text', {
      strings: ["Never...Stop...Coding"],
      typeSpeed: 100,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
