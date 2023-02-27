export function createGallaryItemsMarkup(itemsArray) {
  return itemsArray
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}" />
          </a>`
    )
    .join('');
}
