// get app id
// fetch(
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps',
//   {
//     method: 'POST',
//   },
// )
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// add item likes
// fetch(
//   "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EiwHkAoBSluksl1w8A5K/likes",
//   {
//     method: "POST",
//     body: JSON.stringify({
//       item_id: "Show-6",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   }
// )
//   .then((response) => response.text())
//   .then((text) => console.log(text));

// get item array and like
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
    console.log(data[0].likes);
    const likesNum = document.querySelector('.likes');
    likesNum.innerHTML = `Likes ${data[0].likes}`;
  });
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
    console.log(data[0].likes);
    const likesNum = document.querySelector('.likes-2');
    likesNum.innerHTML = `Likes ${data[1].likes}`;
  });
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
    console.log(data[0].likes);
    const likesNum = document.querySelector('.likes-3');
    likesNum.innerHTML = `Likes ${data[2].likes}`;
  });
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
    console.log(data[0].likes);
    const likesNum = document.querySelector('.likes-4');
    likesNum.innerHTML = `Likes ${data[3].likes}`;
  });
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
    console.log(data[0].likes);
    const likesNum = document.querySelector('.likes-5');
    likesNum.innerHTML = `Likes ${data[4].likes}`;
  });
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
    const likesNum = document.querySelector('.likes-6');
    likesNum.innerHTML = `Likes ${data[5].likes}`;
  });