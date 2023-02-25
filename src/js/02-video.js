import Player from '@vimeo/player';
// import throttle from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
player.on('pause', function (data) {
  console.log('pause:', data);

  // data is an object containing properties specific to that event
});

player.on('timeupdate', function (data) {
  console.log('timeupdate:', data); // data is an object containing properties specific to that event
});

// Завдання 2 - відеоплеєр
// HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>

// Ініціалізуй плеєр у файлі скрипта як це описано в секції
// pre - existing player, але враховуй, що у тебе плеєр доданий
// як npm пакет, а не через CDN.

// Вивчи документацію методу on() і почни відстежувати подію
// timeupdate - оновлення часу відтворення.

//* Зберігай час відтворення у локальне сховище.
//* Нехай ключем для сховища буде рядок "videoplayer-current-time".

//* Під час перезавантаження сторінки скористайся методом
//* setCurrentTime() з метою відновлення відтворення зі збереженої
//* позиції.

//* Додай до проекту бібліотеку lodash.throttle і зроби так, щоб
//* час відтворення оновлювався у сховищі не частіше, ніж раз на
//* секунду.
