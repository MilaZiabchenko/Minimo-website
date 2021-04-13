// Menu animation
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	overlay.classList.toggle('open');
});

// Email validation
const arrEmails = [];

const submit = document.querySelector('#submit');
submit.addEventListener('click', validateForm);

function validateForm() {
	const email = document.forms['contact']['email'].value;

	function validateEmail(p, className) {
		setTimeout(() => {
			document.querySelector('input').value = '';
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = p;
			flashMessage.classList.add('flash', className);
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);
	}

	function removeFlashMessage() {
		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);
	}

	if (email === null || email === '') {
		validateEmail(`<p>email address is required!</p>`, 'red');
		removeFlashMessage();

		return false;
	} else if (email.includes('@') === false) {
		validateEmail(`<p>email must include '@'!</p>`, 'red');
		removeFlashMessage();

		return false;
	} else if (email.length < 10) {
		validateEmail(`<p>email must be at least 8 chars!</p>`, 'red');
		removeFlashMessage();

		return false;
	} else {
		validateEmail(`<p>your email is accepted :)</p>`, 'green');
		removeFlashMessage();

		arrEmails.push(document.querySelector('input').value);

		const objEmails = {
			data: arrEmails,
		};

		// Adding valid email values to local storage
		localStorage.setItem('emails', JSON.stringify(objEmails));

		return arrEmails;
	}
}

// Creating class for adding some more blogs
class Blog {
	constructor(imageTitle, topic, heading) {
		this.imageTitle = imageTitle;
		this.topic = topic;
		this.heading = heading;
		this.text = paragraph;
	}

	createArticle() {
		const article = `
		<article class="small-post">
			<img class="image" src="img/${this.imageTitle}.jpg">
			<h4><a href="#">${this.topic}</a></h4>
			<h2>${this.heading}</h2>
			<p>${this.text}</p>
		</article>
		`;

		return article;
	}
}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...`;

// Instantiating an object with an array of new blogs
const blogs = [
	new Blog('adorable kitten', 'photodiary', 'Boundless tenderness'),
	new Blog('cup of coffee', 'lifestyle', 'Taste of morning'),
	new Blog('glass chess', 'lifestyle', 'Mind games'),
	new Blog('stylish sunglasses', 'lifestyle', 'Watery shades of black'),
	new Blog('old woods', 'travel', 'My friend the forest'),
	new Blog('old boots', 'photodiary', 'Half the world behind'),
];

// Loading newly created blogs
const button = document.querySelector('button');
button.addEventListener('click', () => {
	function addRow(prevBlog, nextBlog, nextRow, prevRow) {
		const loadItems = document.createElement('section');
		loadItems.innerHTML = `
			<div class="grid row ${nextRow}">
				${prevBlog.createArticle()}
				${nextBlog.createArticle()}
			</div>
		`;
		loadItems.classList.add('container');
		document
			.querySelector(prevRow)
			.insertAdjacentElement('afterend', loadItems);

		return loadItems;
	}

	addRow(blogs[0], blogs[1], 'row4', '.row3');

	setTimeout(() => {
		addRow(blogs[2], blogs[3], 'row5', '.row4');
	}, 1500);

	setTimeout(() => {
		addRow(blogs[4], blogs[5], 'row6', '.row5');
	}, 3000);
});
