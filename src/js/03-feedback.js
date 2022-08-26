import throttle from 'lodash.throttle';

player.on('timeupdate', throttle(onTimeUpdate, 500));

const STORAGE_KEY = 'feedback-form-state';

function onTimeUpdate(params) {
  localStorage.setItem(STORAGE_KEY);
}
