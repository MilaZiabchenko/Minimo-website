// Menu and overlay animation
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay a');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	overlay.classList.toggle('open');
});

links.forEach(link => {
	link.addEventListener('click', () => {
		menuBtn.classList.toggle('open');
		overlay.classList.toggle('open');
	});
});

// Email validation
const submit = document.querySelector('#submit');
submit.addEventListener('click', validateEmail);

function validateEmail(e) {
	e.preventDefault();

	const arrEmails = [];
	const email = document.forms['contact']['email'].value;
	document.querySelector('form > input').value = '';

	// Creating flash message
	function createFlashMessage(p, className) {
		setTimeout(() => {
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = p;
			flashMessage.classList.add('flash', className);
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);
	}

	// Removing flash message
	function removeFlashMessage() {
		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);
	}

	if (email === null || email === '') {
		createFlashMessage(`<p>email address is required!</p>`, 'invalid');
		removeFlashMessage();

		return false;
	} else if (email.includes('@') === false) {
		createFlashMessage(`<p>email must include '@'!</p>`, 'invalid');
		removeFlashMessage();

		return false;
	} else if (email.length < 8) {
		createFlashMessage(`<p>email must be at least 8 chars!</p>`, 'invalid');
		removeFlashMessage();

		return false;
	} else {
		createFlashMessage(`<p>your email is accepted :)</p>`, 'valid');
		removeFlashMessage();

		arrEmails.push(email);

		const objEmails = {
			data: arrEmails,
		};

		// Stringifying valid email values and adding them to local storage
		localStorage.setItem('emails', JSON.stringify(objEmails));

		return arrEmails;
	}
}

// Creating class for adding some more blogs
class Blog {
	constructor(imageTitle, imageAltText, topic, heading) {
		this.imageTitle = imageTitle;
		this.imageAltText = imageAltText;
		this.topic = topic;
		this.heading = heading;
		this.text = paragraph;
	}

	createArticle() {
		const article = `
		<article class="small-post">
			<img class="image" src="/img/${this.imageTitle}.jpg" alt="${this.imageAltText}">
			<h4><a href="#">${this.topic}</a></h4>
			<h2>${this.heading}</h2>
			<p>${this.text}</p>
		</article>
		`;

		return article;
	}
}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...`;

// Instantiating an array of new blog objects
const blogs = [
	new Blog(
		'adorable kitten',
		'An adorable kitten',
		'photodiary',
		'Boundless tenderness'
	),
	new Blog(
		'cup of coffee',
		'A cup of coffee',
		'lifestyle',
		'Taste of morning'
	),
	new Blog(
		'glass chess',
		'Glass chess pieces on the chess board',
		'lifestyle',
		'Mind games'
	),
	new Blog(
		'stylish sunglasses',
		'Stylish sunglasses',
		'lifestyle',
		'Watery shades of black'
	),
	new Blog(
		'old woods',
		'Big trees in the forest',
		'travel',
		'My friend the forest'
	),
	new Blog(
		'old boots',
		'Stylish boots',
		'photodiary',
		'Half the world behind'
	),
];

// Loading newly created blogs
const btnLoadMore = document.querySelector('#loadmore');
btnLoadMore.addEventListener('click', () => {
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
