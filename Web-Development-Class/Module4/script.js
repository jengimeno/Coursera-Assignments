(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", 
    "Paula", "Laura", "Jim", "joseph", "bengi", "joey", "mary"];


  for (var i=0; i < names.length; i++) {
    var firstLetter = ((names[i].toLowerCase()).charAt(0)); 
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);

    } else {
       helloSpeaker.speak(names[i]);
    }
  }
  window.names = names;
})(window);