const showID = [1, 2, 3, 4, 5, 6];

showID.map((id, i) => fetch(`https://api.tvmaze.com/shows/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const imgCover = document.getElementById(`show-img-${i + 1}`);
    imgCover.src = data.image.medium;
    const showTitle = document.getElementById(`show-name-${i + 1}`);
    showTitle.innerHTML = data.name;
  }));
