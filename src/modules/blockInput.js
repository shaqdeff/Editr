import { showPopup, removePopup } from './popup.js';

const blockInput = (block = document.querySelector('.block')) => {
  block.addEventListener('keydown', (e) => {
    const popup = document.querySelector('.popup');

    // show popup
    if (e.key === '/' && !popup) {
      showPopup(block);
    }

    // remove popup
    if (e.key === 'Escape' || e.key === 'Backspace') {
      removePopup();
    }
  });
};

export default blockInput;
