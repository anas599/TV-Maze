function likePlus(itemId) {
  fetch(
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
  );
  // .then((response) => response.json())
  // .then((data) => {
  // });
}
for (let i = 1; i <= 6; i += 1) {
  const btn = document.getElementById(`likeBtn${i}`);
  btn.addEventListener('click', () => {
    likePlus(`Show-${i}`);
  });
}