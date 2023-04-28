import blockInput from './blockInput.js';
import { createPopup } from './popup.js';

const createBlock = (currentBlock, currentId) => {
  const newBlock = document.createElement('div');
  newBlock.setAttribute(
    'class',
    'block w-1/2 mx-auto mt-10 -mb-5 outline-none text-sm'
  );
  newBlock.setAttribute('contenteditable', true);
  newBlock.setAttribute(
    'placeholder',
    'Type / for blocks, @ to link docs or people'
  );
  newBlock.setAttribute('id', `${Number(currentId) + 1}`);

  currentBlock.after(newBlock);
  newBlock.focus();
  blockInput(newBlock);

  return newBlock;
};

export default createBlock;
