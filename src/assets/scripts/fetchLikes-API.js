export default function fetchLikes(index, selector) {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EiwHkAoBSluksl1w8A5K/likes',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const likesNum = document.querySelector(selector);
      likesNum.innerHTML = `Likes ${data[index + 1].likes}`;
    });
}

for (let i = 0; i < 6; i += 1) {
  fetchLikes(i, `.likes-${i + 1}`);
}