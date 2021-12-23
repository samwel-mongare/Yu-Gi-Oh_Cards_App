import {cards} from './module1'

const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

async function thisIsIt() {
      const response = await fetch(`${API_URI}/apps/${APP_ID}/likes?item_id=${cards.id}`);
      const scoreLine = await response.json();

       const likeNo = document.querySelectorAll('.likes');
       
        likeNo.forEach((item) => {

           scoreLine.find((likeObj) => {
             if(likeObj.item_id === Number(item.id)){
                item.innerHTML = `${likeObj.likes}`;
             }
           });

              
            
        });
    }
    const result = thisIsIt()
    result;