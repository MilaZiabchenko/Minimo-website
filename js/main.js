import { blogText, blogData } from './constants.js';

const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay a');
const textToToggle = document.querySelector('.text-toggle');
const btnReadMore = document.querySelector('#readMore');
const btnLoadMore = document.querySelector('#loadMore');

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

class BlogContent {
  constructor(blogImagePath, blogImageAltText, blogTopic, blogHeading) {
    this.blogImagePath = blogImagePath;
    this.blogImageAltText = blogImageAltText;
    this.blogTopic = blogTopic;
    this.blogHeading = blogHeading;
    this.text = blogText;
  }

  createBlogArticle() {
    const article = `
    <article class="small-post">
      <img class="small-post-image" src="/img/${this.blogImagePath}.webp" alt="${this.blogImageAltText}">
      <a href="${this.blogTopic}.html">${this.blogTopic}</a>
      <h2>${this.blogHeading}</h2>
      <p>${this.text}</p>
    </article>
    `;

    return article;
  }
}

const newBlogs = blogData.map(item => new BlogContent(...item));

const addRowWithNewBlogs = (prevBlog, nextBlog, nextRow, prevRow) => {
  const newRow = document.createElement('div');

  newRow.innerHTML = `
    ${prevBlog.createBlogArticle()}
    ${nextBlog.createBlogArticle()}
  `;

  newRow.classList.add(...[`grid`, `row`, `${nextRow}`]);

  document.querySelector(prevRow).insertAdjacentElement('afterend', newRow);

  return newRow;
};

const addThreeRowsWithNewBlogs = () => {
  addRowWithNewBlogs(newBlogs[0], newBlogs[1], 'row-4', '.row-3');

  setTimeout(
    () => addRowWithNewBlogs(newBlogs[2], newBlogs[3], 'row-5', '.row-4'),
    1500
  );

  setTimeout(
    () => addRowWithNewBlogs(newBlogs[4], newBlogs[5], 'row-6', '.row-5'),
    3000
  );

  btnLoadMore.remove();
};

btnLoadMore.addEventListener('click', addThreeRowsWithNewBlogs, { once: true });
