const movie = document.querySelector(".movielist")
const seatbox = document.querySelector(".seatbox")

const count = document.querySelector(".count");
const total = document.querySelector(".total")

let price = movie.value;

function changeinfo() {
	count.innerHTML = count.value;
	total.innerHTML = count.value * movie.value;
}

movie.addEventListener("change", e => {
	changeinfo();
});

seatbox.addEventListener("click", e => {
	if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
		e.target.classList.toggle("selected");

		count.value = document.querySelectorAll(".selected").length - 1;
	
		changeinfo();
	}
});