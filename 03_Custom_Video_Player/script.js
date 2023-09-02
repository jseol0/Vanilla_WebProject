document.addEventListener("DOMContentLoaded", e => {
	const video = document.querySelector(".video");
	const play = document.querySelector(".play");
	const stop = document.querySelector(".stop");
	const range = document.querySelector(".range");
	const time = document.querySelector(".time");

	const toggleVideo = function () {
		if (video.paused) {
			updateIcon();
			video.play();
		}
		else {
			updateIcon();
			video.pause();
		}
	}

	const updateIcon = function () {
		const icon = play.querySelector("i");

		if (video.paused) {
			icon.classList.remove("fa-play");
			icon.classList.add("fa-pause");
		}
		else {
			icon.classList.remove("fa-pause");
			icon.classList.add("fa-play");
		}
	}

	const stopVideo = function () {
		if (!video.paused) {
			updateIcon();
		}
		video.pause();
		video.currentTime = 0;
	}

	const setTime = function () {
		range.value = (video.currentTime / video.duration) * 100;

		const minutes = Math.floor(video.currentTime / 60);
		const seconds = Math.floor(video.currentTime - minutes * 60);
	
		const minuteValue = minutes.toString().padStart(2, "0");
		const secondValue = seconds.toString().padStart(2, "0");
	
		const videoTime = `${minuteValue}:${secondValue}`;
		time.textContent = videoTime;
	}

	const setRange = function () {
		video.currentTime = (+range.value * video.duration) / 100;
	}

	video.addEventListener("click", toggleVideo);

	play.addEventListener("click", toggleVideo);
	stop.addEventListener("click", stopVideo);

	video.addEventListener("timeupdate", setTime);
	range.addEventListener("input", setRange);
});