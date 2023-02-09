import { add, getComments } from '../scripts/modules/comments.js';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const API_ID = 'EiwHkAoBSluksl1w8A5K';
const config = {
  headers: {
    'content-type': 'application/json',
  },
};

describe('when adding a comment', () => {
  it('should return a string', async () => {
    const endPoint = `apps/${API_ID}/comments`;
    const url = baseURL + endPoint;
    const data = { item_id: 1, username: 'hans', comment: 'new comment' };
    const dataStringify = JSON.stringify(data);

    const response = await add(url, dataStringify, config);
    expect(typeof response).toBe('string');
  });

  it('should return a string', async () => {
    const endPoint = `apps/${API_ID}/comments`;
    const url = baseURL + endPoint;
    const data = { item_id: 1, username: 'hans', comment: 'new comment' };
    const dataStringify = JSON.stringify(data);

    const response = await add(url, dataStringify, config);
    expect(response).toBe('Created');
  });
});

describe('when getting the list of comment', () => {
  it('should return an array', async () => {
    const id = 1;
    const response = await getComments(id);
    expect(typeof response).toBe('object');
  });
});