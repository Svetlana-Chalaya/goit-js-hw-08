import Player from '@vimeo/player';
// import lodash.throttle from lodash.throttle;

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
};

player.on('play', onPlay);

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

if (window.localStorage) {
  localStorage.setItem('videoplayer-current-time');
  alert(typeof localStorage['videoplayer-current-time']);
} else alert(' localStorage не підтримує ваш браузер ');

// const vimeoPlayer = require('@vimeo/player');

// const onPlay = function (data) {};
// player.on('play', onPlay);
// console.log(onPlay);

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         duration: 61.857;
//         percent: 0.049;
//         seconds: 3.034;
//         break;
//     }
//   });
