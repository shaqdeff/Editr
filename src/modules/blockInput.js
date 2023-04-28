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

    if (e.key === '1') {
      // select first item in popup
      const items = document.getElementById('items');
      if (items) {
        const item = items.querySelector(`[data-id="1"]`);
        if (item) {
          item.classList.add('bg-gray-100');
        }
      }
    }
  });
};

export default blockInput;
