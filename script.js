const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');

function showCard() {
	cards.forEach((card) => {
		card.classList.remove('active');
		this.classList.add('active');
	});

	handleBgColor(this);
}

const handleBgColor = (card) => {
	const season = card.getAttribute('data-season');
	body.setAttribute('data-bg', season);
};

cards.forEach((card) => card.addEventListener('click', showCard));

// function changeSeason() {
// 	cards.forEach((card) => {
// 		card.classList.remove('active');
// 	});
// 	this.classList.add('active');
// 	const activeColor = this.getAttribute('data-season');
// 	body.setAttribute('data-bg', activeColor);
// }

// cards.forEach((card) => card.addEventListener('click', changeSeason));
