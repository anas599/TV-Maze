/**
 * @jest-environment jsdom
 */
import counter from './Counter.js';

test('Check number of items displayed', () => {
  document.body.innerHTML = `
    <div id="TV-shows">TV Shows</div>
    <ul class="shows-list">
      <li> Show 1 </li>
      <li> Show 2 </li>
      <li> Show 3 </li>
    </ul>
  `;
  const list = document.getElementById('TV-shows');
  counter();
  expect(list.innerHTML).toBe('TV Shows(3)');
});
