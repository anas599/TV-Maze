export default function counter() {
  const listCount = document.querySelectorAll('.shows-list li').length;
  const list = document.getElementById('TV-shows');
  list.innerHTML = `TV Shows(${listCount})`;
}
