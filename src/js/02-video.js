import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer - current - time';
const timeSaved = localStorage.getItem(LOCALSTORAGE_KEY)
  ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).seconds
  : 0;

console.log('timeSaved:', timeSaved);

player.setCurrentTime(timeSaved);

player.on(
  'timeupdate',
  _throttle(function (data) {
    // console.log('timeupdate:', data);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    // data is an object {seconds: 0.154, percent: 0, duration: 571.563}
  }, 1000)
);
// localStorage.removeItem(LOCALSTORAGE_KEY);
