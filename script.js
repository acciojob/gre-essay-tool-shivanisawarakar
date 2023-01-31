//your code here
function countWord() {
	let text = document.getElementById('evaluatedText').value;
	let show = document.getElementById('wordCount');
	var count = 0;
	var split =text.split(' ');

	for (var i = 0; i < split.length; i++) {
		if (split[i] != "") {
			count += 1;
		}
	}
	show.innerHTML = count;
}