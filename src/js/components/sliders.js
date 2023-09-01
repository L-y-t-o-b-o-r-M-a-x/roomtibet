import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

const tourSlider = document.querySelector(".popular__tour");

const swiper = new Swiper(tourSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 2.8,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// travel-slider

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const travelSlider = document.querySelector(".travel__slider");

    const enableSwiper = function (travelSlider, settings) {
      swiper = new Swiper(travelSlider, settings);
      console.log(travelSlider);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      console.log(instance);
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 1440px)", ".slider-1", {
    loop: true,
    spaceBetween: gap,
    slidesPerView: 2,
    freeMode: true,
    breakpoints: {
      390: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 2,
      },
    },
    someFunc,
  });
});
