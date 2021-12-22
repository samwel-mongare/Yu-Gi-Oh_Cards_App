import './styles/style.css';
import './styles/popup.css';
import './modules/module1.js';
import { displayPopup, card } from './modules/popup.js';

document.addEventListener('click', e => {
    const popup = document.getElementById('appPopup');
    const btn = document.getElementById('myBtn');

    if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
    if (e.target === btn) displayPopup(card);
});
