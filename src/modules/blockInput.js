import { showPopup, removePopup } from './popup.js';
import createH1 from './createH1.js';
import createBlock from './createBlock.js';

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

    if (e.key === 'Enter') {
      e.preventDefault();
      removePopup();

      // if user presses /1, then enter
      if (block.textContent.trim() === '/1') {
        const newId = Number(block.id) + 1;
        // create a new h1 element
        createH1(block, newId);
        block.innerText = '';
        // remove placeholder from block div
        block.setAttribute('placeholder', '');

        const h1 = document.getElementById(`h1-${newId}`);
        h1.focus();

        h1.addEventListener('keydown', (e) => {
          // if key is enter and h1 is empty
          if (e.keyCode === 13 && h1.textContent.trim() === '') {
            e.preventDefault();
            // remove h1 placeholder
            h1.setAttribute('placeholder', '');
            // create a new block div
            const newBlock = createBlock(block, block.id);
            h1.after(newBlock);
            newBlock.focus();
            blockInput(newBlock);
          }
          if (e.keyCode === 13 && h1.textContent.trim() !== '') {
            // if key is enter and h1 is not empty
            e.preventDefault();
            // create a new block div
            const newBlock = createBlock(block, block.id);
            h1.after(newBlock);
            newBlock.focus();
            blockInput(newBlock);
          }
          if (e.keyCode === 8 && h1.textContent.trim() === '') {
            // if key is backspace and h1 is empty
            e.preventDefault();
            // remove h1 and replace it with block div
            h1.replaceWith(block);
            block.setAttribute(
              'placeholder',
              'Type / for blocks, @ to link docs or people'
            );
            block.focus();
          }
        });
      } else if (
        // block is empty and has placeholder
        block.textContent.trim() === '' &&
        block.getAttribute('placeholder')
      ) {
        // remove placeholder
        block.removeAttribute('placeholder');
        // if there is a previous element, get the id, otherwise set id to 0
        const prevBlockId = block.previousElementSibling
          ? block.previousElementSibling.id
          : '0';
        // create a new block div
        const newId = Number(block.id) + 1;
        const newBlock = createBlock(block, block.id);
        block.after(newBlock);
        newBlock.focus();
        blockInput(newBlock);
      } else if (block.nodeName === 'H1') {
        // if block is a h1 element
        const newBlock = createBlock(block, block.id);
        block.after(newBlock);
        newBlock.focus();
        blockInput(newBlock);
      }
    }
  });
};

export default blockInput;
