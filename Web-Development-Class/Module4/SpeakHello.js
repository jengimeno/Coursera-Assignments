(function (window) {
  
  var helloSpeaker = {};
  var speakWord = "Hello";
  var name;

  helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);