import { blogText, blogData } from './constants.js';

const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay a');
const textToToggle = document.querySelector('.text-toggle');
const btnReadMore = document.querySelector('#readMore');
const btnLoadMore = document.querySelector('#loadMore');
const form = document.querySelector('#form');

const toggleOpen = () => {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('open');
};

menuBtn.addEventListener('click', toggleOpen);
links.forEach(link => link.addEventListener('click', toggleOpen));

const showMoreText = () => {
  textToToggle.classList.remove('text-hidden');
  btnReadMore.textContent = 'show less';
};

const showLessText = () => {
  textToToggle.classList.add('text-hidden');
  btnReadMore.textContent = 'read more';
};

const changeMainBlogTextLength = () => {
  if (btnReadMore.textContent === 'read more') {
    showMoreText();
  } else if (btnReadMore.textContent === 'show less') {
    showLessText();
  }
};

btnReadMore.addEventListener('click', changeMainBlogTextLength);

const createFlashMessage = (messageText, className) =>
  setTimeout(() => {
    const flashMessage = document.createElement('p');

    flashMessage.textContent = messageText;
    flashMessage.setAttribute('id', 'flash-message');
    flashMessage.classList.add('flash', className);

    document
      .querySelector('.flash-message-container')
      .insertAdjacentElement('beforeend', flashMessage);
  }, 500);

const removeFlashMessage = () =>
  setTimeout(() => document.querySelector('#flash-message').remove(), 5000);

const arrEmails = [];

const validateEmail = e => {
  e.preventDefault();

  const email = document.forms['contact']['email'].value;

  document.querySelector('form > input').value = '';

  if (email.trim().length === 0) {
    createFlashMessage('email address is required!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (!email.includes('@')) {
    createFlashMessage('email must include an "@"!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.endsWith('@') || email.endsWith('.') || !email.includes('.')) {
    createFlashMessage('email is incomplete!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.length < 8) {
    createFlashMessage('email must be at least 8 chars!', 'invalid');
    removeFlashMessage();

    return;
  }

  createFlashMessage('your email is accepted :)', 'valid');
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
      <img class="small-post-image" src="/img/${this.blogImageTitle}-lg.jpg" alt="${this.blogImageAltText}">
      <a href="https://animated-mini-photo-gallery.netlify.app/" target="_blank">${this.blogTopic}</a>
      <h2>${this.blogHeading}</h2>
      <p>${this.text}</p>
    </article>
    `;

    return article;
  }
}

const newBlogs = blogData.map(item => new BlogContent(...item));

const addRowWithNewBlogs = (prevBlog, nextBlog, nextRow, prevRow) => {
  const loadedBlogs = document.createElement('section');

  loadedBlogs.innerHTML = `
    <div class="grid row ${nextRow}">
      ${prevBlog.createBlogArticle()}
      ${nextBlog.createBlogArticle()}
    </div>
  `;

  loadedBlogs.classList.add('container');

  document
    .querySelector(prevRow)
    .insertAdjacentElement('afterend', loadedBlogs);

  return loadedBlogs;
};

const addThreeRowsWithNewBlogs = () => {
  addRowWithNewBlogs(newBlogs[0], newBlogs[1], 'row4', '.row3');

  setTimeout(
    () => addRowWithNewBlogs(newBlogs[2], newBlogs[3], 'row5', '.row4'),
    1500
  );

  setTimeout(
    () => addRowWithNewBlogs(newBlogs[4], newBlogs[5], 'row6', '.row5'),
    3000
  );

  btnLoadMore.remove();
};

btnLoadMore.addEventListener('click', addThreeRowsWithNewBlogs, { once: true });
