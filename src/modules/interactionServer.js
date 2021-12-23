const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

function getCommentsOptions() {
  return {
    method: 'GET',
  };
}

function postCommentsOptions(cardID, username, comment) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardID,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

function postLikes(cardID) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardID,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

export async function getCommentsOf(cardID) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments?item_id=${cardID}`, getCommentsOptions());
  return response.json();
}

export async function postCommentWith(cardID, username, comment) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments`, postCommentsOptions(cardID, username, comment));
  return response.json();
}

export async function postLikesWith(cardID) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`, postLikes(cardID));
  return response.json();
}
