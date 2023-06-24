import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
function createMarcupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
   <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
</li>`
    )
    .join('');
}
list.insertAdjacentHTML('beforeend', createMarcupItems(galleryItems));
list.addEventListener('click', handlerClick);
function handlerClick(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
}
