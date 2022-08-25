import throttle from 'lodash.throttle';

player.on('timeupdate', throttle(onTimeUpdate, 500));
