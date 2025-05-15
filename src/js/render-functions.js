import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.some-element a', {
  /*options*/
});
const galleryList = document.querySelector('.gallery');
let galleryLib = new SimpleLightbox('.gallery a');
export function createGallery(images) {
  const markup = images
    .map(image => {
      return `<li>
    <a href=${image.largeImageURL} title=${image.tags}>
    <img src=${image.webformatURL} 
    alt=${image.tags} width="450"
    />
    </a>
    <div class="gallery-img">
    <p>${image.likes}</p>
    <p>${image.views}</p>
    <p>${image.comments}</p>
    <p>${image.downloads}</p>
     </div>
    </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  galleryLib.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}
export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
      loader.style.display = 'inline-block'; 
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
      loader.style.display = 'none';
  }
}