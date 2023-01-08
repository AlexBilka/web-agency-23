const openReadMore1 = document.querySelector(
  '[data-testimonials-modal-open-1]'
);
const openReadMore2 = document.querySelector(
  '[data-testimonials-modal-open-2]'
);
const openreadMore3 = document.querySelector(
  '[data-testimonials-modal-open-3]'
);
const openreadMore4 = document.querySelector(
  '[data-testimonials-modal-open-4]'
);
const closeReadMore = document.querySelector('[data-testimonials-modal-close]');

const modalReadMore = document.querySelector('[data-testimonials-modal]');
const body = document.querySelector('body');

const toggleModal = () => {
  modalReadMore.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
};

modalReadMore.addEventListener('click', e => {
  if (e.target === modalReadMore) modalReadMore.classList.toggle('is-hidden');
  if (e.target === modalReadMore) body.classList.toggle('no-scroll');
});

openReadMore1.addEventListener('click', toggleModal);
openReadMore2.addEventListener('click', toggleModal);
openreadMore3.addEventListener('click', toggleModal);
openreadMore4.addEventListener('click', toggleModal);
closeReadMore.addEventListener('click', toggleModal);
