import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

const galleryPerentEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGallaryItemsMarkup(galleryItems);

galleryPerentEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 400,
  overlayOpacity: 0.9,
  animationSpeed: 500,
  captionPosition: 'top',
});

function createGallaryItemsMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}" />
          </a>`
    )
    .join('');
}
