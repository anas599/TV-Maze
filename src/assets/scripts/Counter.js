const listCount = document.querySelectorAll('.shows-list li').length;
function counter() {
  const list = document.getElementById('TV-shows');
  list.innerHTML = `TV Shows(${listCount})`;
}
counter();