import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGallaryItemsMarkup } from './01-gallery-function';
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
