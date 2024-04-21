var video = document.getElementById('bg-video');
video.playbackRate = 1.5; // Устанавливаем скорость воспроизведения на 1.5x



// /*=============PRELOADER=================*/
// window.onload = function () {
//   document.body.classList.add('loaded_hiding');
//   window.setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 500);
// }





/*=================ARROW==================*/
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

/*==========MOBILE MENU==================*/

const menuButton = document.getElementById("openMobileMenu");
const menu = document.getElementById("headerNavMenu");
const main = document.querySelector("main");
const container_menu=document.getElementById("mobile_menu");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("show");
    // main.classList.toggle("show");
    menuButton.classList.toggle("open");
    container_menu.classList.toggle("open");
});

document.body.addEventListener("click", function(event) {
    if (!event.target.closest("#headerNavMenu") && !event.target.matches("#openMobileMenu")) {
        menu.classList.remove("show");
        // main.classList.remove("show");
        menuButton.classList.remove("open");
container_menu.classList.remove("open");
    }
});

