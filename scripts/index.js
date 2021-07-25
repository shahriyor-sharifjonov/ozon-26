const tag = document.querySelectorAll('.tags-xl-tag');

tag.forEach(el => {
  el.addEventListener('click', ()=>{
    el.classList.toggle('current');
  })
})

function dropdown(val){
  var y = document.getElementsByClassName('dropdown-toggle pagination__dropdown__button');
  var aNode = y[0].innerHTML=val;
  }