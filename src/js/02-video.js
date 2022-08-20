import player from "@vimeo/player";

const vimeoPlayer = require("@vimeo/player");

const onPlay = function (data) {};
player.on("play", onPlay);
console.log(onPlay);

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

//  duration: 61.857;
//  percent: 0.049;
//  seconds: 3.034;
