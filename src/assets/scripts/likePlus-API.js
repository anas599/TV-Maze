import fetchLikes from './fetchLikes-API.js';

async function likePlus(itemId, index, selector) {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EiwHkAoBSluksl1w8A5K/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then(() => {
    fetchLikes(index, selector);
  });
}

for (let i = 1; i <= 6; i += 1) {
  const btn = document.getElementById(`likeBtn${i}`);
  btn.addEventListener('click', () => {
    likePlus(`Show-${i}`, i - 1, `.likes-${i}`);
  });
}
