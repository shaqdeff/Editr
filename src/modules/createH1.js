import { createPopup, removePopup } from './popup.js';
import blockInput from './blockInput.js';

const block = document.querySelector('.block');
const popup = document.getElementById('popup');

const createH1 = (block, id) => {
  let h1 = document.createElement('h1');
  h1.setAttribute(
    'class',
    'edit-heading w-1/2 mx-auto mt-10 -mb-5 outline-none text-[32px] font-bold'
  );
  h1.setAttribute('placeholder', 'Heading 1');
  h1.setAttribute('contenteditable', 'true');
  h1.setAttribute('id', `h1-${id}`);

  block.replaceWith(h1);
  removePopup();
};

export default createH1;
