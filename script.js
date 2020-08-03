var arrEmails = [];

var submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
	var validation = validateForm();

	function validateForm() {
		var email = document.forms["myForm"]["email"].value;

		if(email === '') {
			setTimeout(function() {
				var flashMessage = document.createElement('div');
				flashMessage.innerHTML = '<div class="flash red"><p class="emailValidation red">email is required!</p></div>';
				document.querySelector('.flashMessageContainer').insertAdjacentElement('beforeend', flashMessage);
			}, 500);
			
			setTimeout(function() {
				document.querySelector('.flash').parentNode.removeChild(document.querySelector('.flash'));
			}, 5000);

			return false;
		}
		if(email.length < 8) {
			setTimeout(function() {
				document.querySelector('input').value = '';
				var flashMessage = document.createElement('div');
				flashMessage.innerHTML = '<div class="flash red"><p class="emailValidation red">email must be at least 8 chars!</p></div>';
				document.querySelector('.flashMessageContainer').insertAdjacentElement('beforeend', flashMessage);
			}, 500);

			setTimeout(function() {
				document.querySelector('.flash').parentNode.removeChild(document.querySelector('.flash'));
			}, 5000);

			return false;

		} else {
			arrEmails.push(document.querySelector('input').value);

			var obj = {
				data: arrEmails
			};
			JSON.stringify(obj);
			var str = JSON.stringify(obj);
			JSON.parse(str);

			localStorage.setItem('emails', str);

			setTimeout(function() {
				document.querySelector('input').value = '';
				var flashMessage = document.createElement('div');
				flashMessage.innerHTML = '<div class="flash green"><p class="emailValidation green">your email is accepted :)</p></div>';
				document.querySelector('.flashMessageContainer').insertAdjacentElement('beforeend', flashMessage);
			}, 500);
			
			setTimeout(function() {
				document.querySelector('.flash').parentNode.removeChild(document.querySelector('.flash'));
			}, 5000);
		}
	}
});

var button = document.querySelector('.loadMore');
button.addEventListener('click', function() {
	var elements = document.createElement('div');
	elements.innerHTML = '<div class="wrapper"><div class="row row4"><article class="smallPost leftPost"><section><img class="image" src="img/image8.jpg" alt="image8"><h4><a href="#">photodiary</a></h4><h2>Proident eu est ad labore.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article><article class="smallPost"><section><img class="image" src="img/image9.jpg" alt="image9"><h4><a href="#">lifestyle</a></h4><h2>Consequat duis.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article></div></div>';
	document.querySelector('.row3').insertAdjacentElement('afterend', elements);

	setTimeout(function() {
	var elements = document.createElement('div');
	elements.innerHTML = '<div class="wrapper"><div class="row row5"><article class="smallPost leftPost"><section><img class="image" src="img/image10.jpg" alt="image10"><h4><a href="#">lifestyle</a></h4><h2>Proident eu est ad labore.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article><article class="smallPost"><section><img class="image" src="img/image11.jpg" alt="image11"><h4><a href="#">lifestyle</a></h4><h2>Consequat duis.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article></div></div>';
	document.querySelector('.row4').insertAdjacentElement('afterend', elements);
	}, 1500);

	setTimeout(function() {
	var elements = document.createElement('div');
	elements.innerHTML = '<div class="wrapper"><div class="row row6"><article class="smallPost leftPost"><section><img class="image" src="img/image12.jpg" alt="image12"><h4><a href="#">travel</a></h4><h2>Proident eu est ad labore.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article><article class="smallPost"><section><img class="image" src="img/image13.jpg" alt="image13"><h4><a href="#">photodiary</a></h4><h2>Consequat duis.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></section></article></div></div>';
	document.querySelector('.row5').insertAdjacentElement('afterend', elements);
	}, 3000);
})

