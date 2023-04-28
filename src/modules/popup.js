export const popupList = [
  {
    id: 1,
    title: 'Heading 1',
    text: 'Shortcut: type # + space',
    icon: './assets/text.png',
  },
  {
    id: 2,
    title: 'Expandable Heading 1',
    text: 'Shortcut: type >># + space',
    icon: './assets/text.png',
  },
];

const block = document.querySelector('.block');

// function for creating popup
export const createPopup = (block) => {
  // create popup div
  const popup = document.createElement('div');
  popup.setAttribute(
    'class',
    'popup flex flex-col justify-start absolute mt-8 left-1/4 w-[300px] h-[350px] bg-white shadow-2xl border-solid border-[1px] rounded-[10px] border-gray-100'
  );

  popup.innerHTML = `
        <h2 class="text-[14px] font-bold ml-2 mt-2">Add blocks</h2>
        <p class="text-[12px] font-semibold text-gray-300 ml-2 mt-1">
          Keep typing to filter, or escape to exit
        </p>
        <div class="flex items-center ml-2 mt-4">
          <span class="text-[12px]">Filtering keyword</span>
          <div
            class="flex justify-center items-center text-xs w-[12px] h-[18px] ml-1 bg-blue-800 rounded-sm text-white"
          >
            -
          </div>
        </div>
        <div id="items">
          <div data-id="1" class="w-[300px] h-[55px] flex items-center bg-white hover:bg-gray-100 mt-4 -mb-4 cursor-pointer">
            <img src="${popupList[0].icon}" alt="Item 1" class="h-[25px] w-[25px] ml-2" />
            <div class="flex flex-col items-start justify-center ml-3">
              <h3 class="text-[14px] font-semibold">${popupList[0].title}</h3>
              <p class="text-[12px] text-gray-400">${popupList[0].text}</p>
            </div>
          </div>
          <div data-id="2" class="w-[300px] h-[55px] flex items-center bg-white hover:bg-gray-100 mt-4 -mb-4 cursor-pointer">
            <img src="${popupList[1].icon}" alt="Item 2" class="h-[25px] w-[25px] ml-2" />
            <div class="flex flex-col items-start justify-center ml-3">
              <h3 class="text-[14px] font-semibold">${popupList[1].title}</h3>
              <p class="text-[12px] text-gray-400">${popupList[1].text}</p>
            </div>
          </div>
        </div>

    `;

  // append popup to block
  block.after(popup);
};

// function for showing popup
export const showPopup = (block) => {
  // check if popup exists
  if (!document.querySelector('.popup')) {
    createPopup(block);
  }
};

// function for removing popup
export const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
  }
};

// remove popup on click outside of popup
document.addEventListener('click', (e) => {
  const popup = document.querySelector('.popup');
  if (e.target !== popup) {
    removePopup();
  }
});
