import axios from 'axios';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const API_ID = 'EiwHkAoBSluksl1w8A5K';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

const commentHtml = (date, username, commentText) => `
          <span class="big">${date}</span>
          <div class="img-name">
            <span>${username}</span>
          </div>
          <span class="comment-text">${commentText}</span>
        `;

const getComments = async (id) => {
  const endPoint = `apps/${API_ID}/comments?item_id=${id}`;
  const url = baseURL + endPoint;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return null;
  }
};

const showComments = async (id, modal) => {
  try {
    const comments = await getComments(id) || [];
    const commentContainer = modal.firstChild.children[3].children[0].children[1];

    commentContainer.innerHtml = '';
    comments.forEach(({ creation_date: creationDate, username, comment }) => {
      const li = document.createElement('li');
      li.innerHTML = commentHtml(creationDate, username, comment);
      commentContainer.appendChild(li);
    });
    return commentContainer;
  } catch (error) {
    return null;
  }
};

const addComment = async (e, modal) => {
  e.preventDefault();
  const { form } = e.target;
  const {
    id: { value: id },
    username: { value: username },
    comment: { value: comment },
  } = form.elements;

  const data = { item_id: id, username, comment };
  const dataStringify = JSON.stringify(data);
  const endPoint = `apps/${API_ID}/comments`;
  const url = baseURL + endPoint;

  try {
    const { data: response } = await axios.post(url, dataStringify, config);
    form.reset();
    showComments(id, modal);
    return response;
  } catch (error) {
    return error;
  }
};

export { addComment, showComments };