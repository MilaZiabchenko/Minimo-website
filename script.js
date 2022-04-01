const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay a');
const form = document.querySelector('#form');
const btnLoadMore = document.querySelector('#loadmore');

const toggleOpen = () => {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('open');
};

menuBtn.addEventListener('click', toggleOpen);
links.forEach(link => {
  link.addEventListener('click', toggleOpen);
});

const createFlashMessage = (messageText, className) => {
  setTimeout(() => {
    const flashMessage = document.createElement('div');
    flashMessage.innerHTML = messageText;
    flashMessage.classList.add('flash', className);
    document
      .querySelector('.flash-message-container')
      .insertAdjacentElement('beforeend', flashMessage);
  }, 500);
};

const removeFlashMessage = () => {
  setTimeout(() => {
    const flash = document.querySelector('.flash');
    flash.remove();
  }, 5000);
};

const arrEmails = [];

const validateEmail = e => {
  e.preventDefault();

  const email = document.forms['contact']['email'].value;
  document.querySelector('form > input').value = '';

  if (email.trim().length === 0) {
    createFlashMessage(`<p>email address is required!</p>`, 'invalid');
    removeFlashMessage();

    return;
  }

  if (!email.includes('@')) {
    createFlashMessage(`<p>email must include an '@'!</p>`, 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.endsWith('@') || email.endsWith('.') || !email.includes('.')) {
    createFlashMessage(`<p>email '${email}' is incomplete!</p>`, 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.length < 8) {
    createFlashMessage(`<p>email must be at least 8 chars!</p>`, 'invalid');
    removeFlashMessage();

    return;
  }

  createFlashMessage(`<p>your email is accepted :)</p>`, 'valid');
  removeFlashMessage();

  arrEmails.push(email);

  localStorage.setItem('emails', JSON.stringify(arrEmails));

  const existingEmails = JSON.parse(localStorage.getItem('emails'));

  return existingEmails || arrEmails;
};

form.addEventListener('submit', validateEmail);

class BlogContent {
  constructor(blogImageTitle, blogImageAltText, blogTopic, blogHeading) {
    this.blogImageTitle = blogImageTitle;
    this.blogImageAltText = blogImageAltText;
    this.blogTopic = blogTopic;
    this.blogHeading = blogHeading;
    this.text = blogText;
  }

  createBlogArticle() {
    const article = `
    <article class="small-post">
      <img class="image" src="/img/${this.blogImageTitle}.jpg" alt="${this.blogImageAltText}">
      <h4><a href="https://animated-mini-photo-gallery.netlify.app/" target="_blank">${this.blogTopic}</a></h4>
      <h2>${this.blogHeading}</h2>
      <p>${this.text}</p>
    </article>
    `;

    return article;
  }
}

const blogText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...`;

const newBlogs = [
  new BlogContent(
    'adorable kitten',
    'An adorable kitten',
    'photodiary',
    'Boundless tenderness'
  ),
  new BlogContent(
    'cup of coffee',
    'A cup of coffee',
    'lifestyle',
    'Taste of morning'
  ),
  new BlogContent(
    'glass chess',
    'Glass chess pieces on the chess board',
    'lifestyle',
    'Mind games'
  ),
  new BlogContent(
    'stylish sunglasses',
    'Stylish sunglasses',
    'lifestyle',
    'Watery shades of black'
  ),
  new BlogContent(
    'old woods',
    'Big trees in the forest',
    'travel',
    'My friend the forest'
  ),
  new BlogContent(
    'old boots',
    'Stylish boots',
    'photodiary',
    'Half the world behind'
  ),
];

const addRowWithNewBlogs = (prevBlog, nextBlog, nextRow, prevRow) => {
  const loadItems = document.createElement('section');
  loadItems.innerHTML = `
    <div class="grid row ${nextRow}">
      ${prevBlog.createBlogArticle()}
      ${nextBlog.createBlogArticle()}
    </div>
  `;

  loadItems.classList.add('container');
  document.querySelector(prevRow).insertAdjacentElement('afterend', loadItems);

  return loadItems;
};

btnLoadMore.addEventListener('click', () => {
  addRowWithNewBlogs(newBlogs[0], newBlogs[1], 'row4', '.row3');

  setTimeout(() => {
    addRowWithNewBlogs(newBlogs[2], newBlogs[3], 'row5', '.row4');
  }, 1500);

  setTimeout(() => {
    addRowWithNewBlogs(newBlogs[4], newBlogs[5], 'row6', '.row5');
  }, 3000);

  btnLoadMore.remove();
});
