const tag = document.querySelectorAll('.tags-xl-tag');

tag.forEach(el => {
  el.addEventListener('click', ()=>{
    el.classList.toggle('current');
  })
})