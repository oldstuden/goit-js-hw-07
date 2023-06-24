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
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `
    )
    .join('');
}
list.insertAdjacentHTML('beforeend', createMarcupItems(galleryItems));
list.addEventListener('click', handlerClickImg);
function handlerClickImg(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(
      `<img src=${evt.target.dataset.source} width="1400" height="900"/>`,
      {
        // closable: false,
        onShow: () => {
          window.addEventListener('keydown', onKeyEsc);
        },
        onClose: () => {
          window.removeEventListener('keydown', onKeyEsc);
        },
      }
    );
    instance.show();
    function onKeyEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
}
