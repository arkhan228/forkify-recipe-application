const btnSearchMobile = document.querySelector('.btn__mobile-search');
const btnSearchClose = document.querySelector('.btn__mobile-close');
const constainerEl = document.querySelector('.container');

btnSearchMobile?.addEventListener('click', () => {
  constainerEl.classList.add('sidebar');
});

btnSearchClose?.addEventListener('click', () => {
  constainerEl.classList.remove('sidebar');
});

document.addEventListener('click', e => {
  if (e.target.closest('.preview')) constainerEl.classList.remove('sidebar');

  if (
    e.target.closest('.search') ||
    e.target.closest('.search-results') ||
    e.target.closest('.btn__mobile-search') ||
    e.target.closest('.btn--inline')
  )
    return;

  constainerEl.classList.remove('sidebar');
});
