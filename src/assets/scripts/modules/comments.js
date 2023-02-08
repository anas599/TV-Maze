import axios from 'axios';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const API_ID = 'EiwHkAoBSluksl1w8A5K';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

const addComment = async (e) => {
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
    return response;
  } catch (error) {
    return error;
  }
};

const showComments = () => {

};

export { addComment, showComments };