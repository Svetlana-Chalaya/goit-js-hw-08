import player from "@vimeo/player";

const vimeoPlayer = require("@vimeo/player");

const onPlay = function (data) {};
player.on("play", onPlay);
console.log(onPlay);

//  duration: 61.857;
//  percent: 0.049;
//  seconds: 3.034;
