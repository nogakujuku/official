// ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const spanTags = document.querySelectorAll(".icon span");
const spanTagsArray = Array.from(spanTags);
const headerMenu = document.querySelector(".header-menu");
hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("btn-active")) {
    hamburger.classList.remove("btn-active");
    spanTagsArray[0].style.transform = "";
    spanTagsArray[0].style.top = "";
    spanTagsArray[1].style.display = "";
    spanTagsArray[2].style.transform = "";
    spanTagsArray[2].style.top = "";
    headerMenu.style.right = "-100%";
  } else {
    hamburger.classList.add("btn-active");
    spanTagsArray[0].style.transform = "rotate(45deg)";
    spanTagsArray[0].style.top = "7px";
    spanTagsArray[1].style.display = "none";
    spanTagsArray[2].style.transform = "rotate(-45deg)";
    spanTagsArray[2].style.top = "8px";
    headerMenu.style.right = "0";
  }
});

const mySwiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  loopedSlides: 6,

  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
  },

  centeredSlides: true,
  initialSlide: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const targets_fade = document.getElementsByClassName("fade");
for (let i = targets_fade.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_fade[i]);
}

const targets_fadeleft = document.getElementsByClassName("fade-left");
for (let i = targets_fadeleft.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets_fadeleft[i]);
}
{
  let targets = document.querySelectorAll(
    ".img_2,.img_3,.img_4,.small_eclipse1,.small_eclipse2,.big_eclipse,.medium_eclipse"
  ); //アニメーションさせたい要素
  //スクロールイベント
  window.addEventListener("scroll", function () {
    var scroll = window.scrollY; //スクロール量を取得
    var windowHeight = window.innerHeight; //画面の高さを取得
    for (let target of targets) {
      //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
      var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
      if (scroll + 30 > targetPos - windowHeight) {
        //スクロール量 > ターゲット要素の位置
        target.classList.add("is-animated"); //is-animatedクラスを加える
      }
    }
  });
  // let targets_ = document.querySelectorAll(''); //アニメーションさせたい要素
  //     //スクロールイベント
  //     window.addEventListener('scroll', function () {
  //       var scroll = window.scrollY; //スクロール量を取得
  //       var windowHeight = window.innerHeight; //画面の高さを取得
  //       for (let target_ of targets_) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
  //         var targetPos_ = target_.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
  //         if (scroll > targetPos_ - windowHeight) { //スクロール量 > ターゲット要素の位置
  //           target_.classList.add('is-focused'); //is-animatedクラスを加える
  //         }
  //       }
  //     });
  let _targets_ = document.querySelectorAll(".keyword1");
  for (let _target_ of _targets_) {
    _target_.classList.add("fade-in_left"); //fade-in_leftクラスを加える
  }
  let _targets__ = document.querySelectorAll(".keyword2");
  for (let _target__ of _targets__) {
    _target__.classList.add("fade-in_left2"); //fade-in_leftクラスを加える
  }
}
