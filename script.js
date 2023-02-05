const helloSpeaker = {
	speakWord: 'Hello',	
};
//This says Hello
(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());


//2
/*Goodbye speaker function*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());

//3
//This choose the names
(function () {
	var names = ['mike', 'kotsios', 'tom', 'tim', 'helen', 'chris', 'nic', 'ryan', 'jonh', 'george'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpeaker.speak(name));
			document.write(helloSpeaker.speak(name + '<br>'));
		}
	}
})();