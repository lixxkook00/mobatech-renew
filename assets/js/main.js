const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$$('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
  }
})

// $('.soft-menu__list').onclick = (e) => {
//     e.stopPropagation()
// }

$('#tokenomic-main-charac').onmouseover = function(e) {
  $('#tokenomic-main').classList.toggle('active')
};

$('#tokenomic-main-charac').onmouseleave = function(e) {
  $('#tokenomic-main').classList.toggle('active')
};

// loading animation
window.addEventListener('load', (event) => {
  $('.loading').style.display = "none"
});

// * Fullpage js init */
var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    // afterLoad : function (e) {
    //     console.log("cc",e);
    // },
    onLeave : function (e) {
      let flag = true;
      let flag2 = true;

      // console.log(e)

      if(flag){
        $('#main-content-charac').classList.add('active')
        flag = false
      }

      if(flag2 && e.index === 1){
        $('#section-container').classList.add('active')
        flag2 = false
      }
    }
});

// SLIDER
var swiper1 = new Swiper(".partner-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 4
        },
        1023: {
        slidesPerView: 5,
        spaceBetween: 10
        }
    }
});

var swiper2 = new Swiper(".card-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 4
        },
        1023: {
        slidesPerView: 4,
        spaceBetween: 10
        }
    }
});
