const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi'
const APP_ID = 'pgN3PMVF4hByoHLn5kWW';

function getCommentsOptions() {
    return {
        method: 'GET'
    };
}

function postCommentsOptions(cardID, username, comment) {
    return {
        method: 'POST',
        body: JSON.stringify({
            item_id: cardID,
            username: username,
            comment: comment,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    };
}

export async function getComments(cardID) {
    const response = await fetch(`${API_URI}/apps/${APP_ID}/comments?item_id=${cardID}`, getCommentsOptions());
    return response.json();
}

export async function postComment(cardID, username, comment) {
    const response = await fetch(`${API_URI}/apps/${APP_ID}/comments`, postCommentsOptions(cardID, username, comment));
    return response.json();
}

// export async function postLike(scoreObj) {
//     const response = await fetch(`${API}/games/${getGameIdLocal() || GAME_ID}/scores/`, scorePostOptions(scoreObj));
//     return response.json();
// }
