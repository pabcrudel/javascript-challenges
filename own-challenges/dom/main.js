'use strict';

const body = document.body;

// Create and append a header tag
const header = document.createElement('header');
body.append(header);

// Add a top heading
const h1 = document.createElement('h1');
h1.textContent = 'Hello, DOM!';
header.append(h1);

// Add a paragraph
const subtitle = document.createElement('p');
subtitle.append(document.createTextNode('My first web'));
h1.after(subtitle);

// Create a list
const printedList = document.createElement('ul');

['Pablo', 'Daniel', 'MA'].forEach(user => {
  const li = document.createElement('li');
  li.textContent = user;
  printedList.append(li);
});
body.append(printedList);

// Sort users
/**
 * @param {NodeList} nodeList
 * @param {Intl.LocalesArgument} locale
*/
function sortNodeList (nodeList, locale = 'es') {
  const collator = new Intl.Collator(locale, { usage: 'sort', sensitivity: 'base' });

  Array.from(nodeList)
    .sort((a, b) => collator.compare(a.innerText, b.innerText))
    .forEach(user => printedList.append(user));
}
sortNodeList(printedList.childNodes);

// Move the clicked user to the first position
printedList.onclick = moveFirst;

/** @param {MouseEvent} event */
function moveFirst (event) {
  const { target, currentTarget } = event;

  if (target?.nodeName !== 'LI') return;
  currentTarget.prepend(target);
}

// Show an input to add new users
const addUserForm = document.createElement('form');
const addInput = document.createElement('input');
addInput.name = 'addUser';
addInput.type = 'text';
addInput.placeholder = 'Add a user to the list';
addUserForm.append(addInput);

/**
 * @typedef {Object} TYPE_POSITIONS
 * @property {'top'} TOP
 * @property {'bottom'} BOTTOM
 * @property {'ordered'} ORDERED
 */

/** @type {TYPE_POSITIONS} */
const POSITIONS = {
  ORDERED: 'ordered',
  TOP: 'top',
  BOTTOM: 'bottom'
};

[
  {
    inputId: POSITIONS.ORDERED,
    labelCaption: 'Ordered',
    isChecked: true
  },
  {
    inputId: POSITIONS.TOP,
    labelCaption: 'At the beginning of the list'
  },
  {
    inputId: POSITIONS.BOTTOM,
    labelCaption: 'At the end of the list'
  }
].forEach(config => {
  const wrap = document.createElement('div');

  const { input, label } = createRadioElement({ inputName: 'position', ...config });
  wrap.append(input, label);

  addUserForm.append(wrap);
});

addUserForm.onsubmit = addListItemEventFactory(printedList, POSITIONS, addInput.name);
printedList.after(addUserForm);

/**
 * @param {Object} config
 * @param {string} config.inputId
 * @param {string} [config.inputName=config.inputId]
 * @param {string} [config.inputValue=config.inputId]
 * @param {boolean} [config.isChecked=false]
 * @param {string} config.labelCaption
 */
function createRadioElement ({
  inputId,
  inputName = inputId,
  inputValue = inputId,
  isChecked = false,
  labelCaption
}) {
  const input = document.createElement('input');
  input.id = inputId;
  input.name = inputName;
  input.value = inputValue;
  input.type = 'radio';
  input.checked = isChecked;

  const label = document.createElement('label');
  label.htmlFor = inputId;
  label.textContent = labelCaption;

  return { input, label };
}

/**
 * @param {HTMLUListElement} listElement
 * @param {TYPE_POSITIONS} POSITIONS
 * @param {string} addInputName
 */
function addListItemEventFactory (listElement, POSITIONS, addInputName) {
  /** @param {SubmitEvent} event */
  return function keyPressEvent (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const user = formData.get('addUser');
    const position = formData.get('position');

    if (!user || !position) return;

    // Create list item
    const li = document.createElement('li');
    li.textContent = user;

    // Clear input
    event.target.children[addInputName].value = null;

    // Add item to the list
    switch (position) {
      case POSITIONS.TOP:
        listElement.prepend(li);
        break;
      case POSITIONS.ORDERED:
        insertItemOrdered(listElement.children, li);
        break;
      case POSITIONS.BOTTOM:
        listElement.append(li);
        break;
      default:
        break;
    }
  };
}

/**
 * @param {HTMLCollectionOf<HTMLLIElement>} listItems
 * @param {HTMLLIElement} listItem
 * @param {string} locale
 */
function insertItemOrdered (listItems, listItem, locale = 'es') {
  const collator = new Intl.Collator(locale, { usage: 'sort', sensitivity: 'base' });

  // Binary sort because the original array is already sorted
  const length = listItems.length;
  let start = 0;
  let end = length;

  while (start < end) {
    const half = Math.floor((start + end) / 2);

    // If the new item should come after the current middle item
    if (collator.compare(listItems[half].textContent, listItem.textContent) < 0) {
      start = half + 1; // Move to the right hand of the array
    } else {
      end = half; // Move to the left hand of the array
    }
  }

  // Avoid index out of bounds by comparing the start position with the current length
  if (start < length) listItems[start].before(listItem);
  else listItems[start - 1].after(listItem); // Insert item at the end of the list
}

// Search users
const searchInput = document.createElement('input');
searchInput.name = 'searchUser';
searchInput.type = 'search';
searchInput.placeholder = 'Search a user';
searchInput.oninput = fuzzySearchEventFactory(printedList.children);
printedList.before(searchInput);

/** @param {HTMLCollectionOf<HTMLLIElement>} listItems */
function fuzzySearchEventFactory (listItems) {
  /** @param {InputEvent} event */
  return function fuzzySearch (event) {
    const searchTerm = event?.target?.value?.toLowerCase();

    for (const listItem of listItems) {
      if (!searchTerm || listItem.innerText.toLowerCase().includes(searchTerm)) {
        listItem.hidden = false;
        listItem.ariaHidden = 'false';
      } else {
        listItem.hidden = true;
        listItem.ariaHidden = 'true';
      }
    }
  };
}

// Add border to a clicked user
printedList.onclick = highlightItemEvent;

/** @param {MouseEvent} event */
function highlightItemEvent (event) {
  const target = event.target;

  if (target.nodeName !== 'LI') return;

  target.style.border = target.style.border ? '' : '1px solid red';
}

// Modify text content each 2 seconds
const words = ['DOM', 'Web', 'JavaScript'];

let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  h1.textContent =
    h1.textContent.replace(/(, ).*(!)/, `$1${words[wordIndex]}$2`);
}, 2000);

// Create an observer instance
const observer = new globalThis.IntersectionObserver(entries => {
  entries.forEach(entry => {
    const { isIntersecting, target: { nodeName } } = entry;
    const message = 'is' + (isIntersecting ? '' : "n't");

    console.log(nodeName, message, 'visible');
  });
});
observer.observe(addInput);
// observer.unobserve(addInput); Stops the observer
