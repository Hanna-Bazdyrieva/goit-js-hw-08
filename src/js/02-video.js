import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer - current - time';
const timeSaved = localStorage.getItem(LOCALSTORAGE_KEY);

const savedSeconds = timeSaved === null ? 0 : JSON.parse(timeSaved).seconds;

player.setCurrentTime(savedSeconds);

player.on(
  'timeupdate',
  _throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  }, 1000)
);

// localStorage.removeItem(LOCALSTORAGE_KEY);
