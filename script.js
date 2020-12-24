const arrEmails = [];

const submit = document.querySelector('#submit');
submit.addEventListener('click', validateForm);

function validateForm() {
	const email = document.forms['myForm']['email'].value;

	if (email === '') {
		setTimeout(() => {
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = `<p>email is required!</p>`;
			flashMessage.classList.add('flash', 'red');
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);

		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);

		return false;
	} else if (email.includes('@') === false) {
		setTimeout(() => {
			document.querySelector('input').value = '';
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = `<p class="red">email must include '@'!</p>`;
			flashMessage.classList.add('flash', 'red');
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);

		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);

		return false;
	} else if (email.length < 10) {
		setTimeout(() => {
			document.querySelector('input').value = '';
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = `<p class="red">email must be at least 8 chars!</p>`;
			flashMessage.classList.add('flash', 'red');
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);

		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);

		return false;
	} else {
		arrEmails.push(document.querySelector('input').value);

		const objEmails = {
			data: arrEmails,
		};
		JSON.stringify(objEmails);
		const strEmails = JSON.stringify(objEmails);
		JSON.parse(strEmails);

		localStorage.setItem('emails', strEmails);

		setTimeout(() => {
			document.querySelector('input').value = '';
			const flashMessage = document.createElement('div');
			flashMessage.innerHTML = `<p class="green">your email is accepted :)</p>`;
			flashMessage.classList.add('flash', 'green');
			document
				.querySelector('.flash-message-container')
				.insertAdjacentElement('beforeend', flashMessage);
		}, 500);

		setTimeout(() => {
			const flash = document.querySelector('.flash');
			flash.remove();
		}, 5000);
	}
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
	let loadItems = document.createElement('section');
	loadItems.innerHTML = `
		<div class="grid row row4">
			<article class="small-post">
				<img class="image" src="img/image8.jpg" alt="image8">
				<h4><a href="#">photodiary</a></h4>
				<h2>Proident eu est ad labore.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
			<article class="small-post">
				<img class="image" src="img/image9.jpg" alt="image9">
				<h4><a href="#">lifestyle</a></h4>
				<h2>Consequat duis.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
		</div>
	`;
	loadItems.classList.add('wrapper');
	document
		.querySelector('.row3')
		.insertAdjacentElement('afterend', loadItems);

	setTimeout(() => {
		loadItems = document.createElement('section');
		loadItems.innerHTML = `
		<div class="grid row row5">
			<article class="small-post">
				<img class="image" src="img/image10.jpg" alt="image10">
				<h4><a href="#">lifestyle</a></h4>
				<h2>Proident eu est ad labore.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
			<article class="small-post">
				<img class="image" src="img/image11.jpg" alt="image11">
				<h4><a href="#">lifestyle</a></h4>
				<h2>Consequat duis.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
		</div>
	`;
		loadItems.classList.add('wrapper');
		document
			.querySelector('.row4')
			.insertAdjacentElement('afterend', loadItems);
	}, 1500);

	setTimeout(() => {
		loadItems = document.createElement('section');
		loadItems.innerHTML = `
		<div class="grid row row6">
			<article class="small-post">
				<img class="image" src="img/image12.jpg" alt="image12">
				<h4><a href="#">travel</a></h4>
				<h2>Proident eu est ad labore.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
			<article class="small-post">
				<img class="image" src="img/image13.jpg" alt="image13">
				<h4><a href="#">photodiary</a></h4>
				<h2>Consequat duis.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
			</article>
		</div>
	`;
		loadItems.classList.add('wrapper');
		document
			.querySelector('.row5')
			.insertAdjacentElement('afterend', loadItems);
	}, 3000);
});
