const timerEl = document.getElementById('timer');
const h3el = document.querySelector('h3');
const timerTime = 86;
let timeLeft = timerTime;

const intervalId = setInterval(function () {
	timeLeft--;

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	timerEl.textContent = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');


	if (timeLeft <= 0) {
		h3el.textContent = 'Час скінчився'
		clearInterval(intervalId);
	}
}, 1000);
