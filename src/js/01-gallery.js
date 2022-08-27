// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// import '../css/common.css';
import '../css/01-gallery.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import 'simplelightbox/dist/simple-lightbox.min.css';

// const SimpleLightbox = require("simplelightbox");
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsGallery = containerGalleryCardsItems(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

function containerGalleryCardsItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "how long takes the slide animation"/>
</a>
</li>`;
    })
    .join('');
}
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {});

lightbox.show();
