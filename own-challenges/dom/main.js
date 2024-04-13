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

/* Create a backup of the sorted list
 * - At this point, `printedList` was ordered
*/
const backupList = printedList.cloneNode(true);

// Move the clicked user to the first position
printedList.onclick = moveFirst;

/** @param {MouseEvent} event */
function moveFirst (event) {
  const { target, currentTarget } = event;

  if (target?.nodeName !== 'LI') return;
  currentTarget.prepend(target);
}

// Show an input to add new users
const addInput = document.createElement('input');
addInput.name = 'addUser';
addInput.type = 'text';
addInput.placeholder = 'Add a user to the list';
addInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    const li = document.createElement('li');
    li.textContent = addInput.value;
    addInput.value = '';
    backupList.append(li.cloneNode(true));
    printedList.append(li);
  }
});
printedList.after(addInput);

// Search users
const searchInput = document.createElement('input');
searchInput.name = 'searchUser';
searchInput.type = 'search';
searchInput.placeholder = 'Search a user';

// 'keyup' should trigger on 'shift'
searchInput.addEventListener('input', event => {
  const searchTerm = event?.target?.value?.toLowerCase();
  printedList.innerHTML = ''; // Nuke

  if (searchTerm) {
    for (const user of backupList.childNodes) {
      if (user.innerText.toLowerCase().includes(searchTerm)) {
        printedList.append(user.cloneNode(true));
      }
    }
  } else {
    for (const user of backupList.childNodes) {
      printedList.append(user.cloneNode(true));
    }
  }
});
printedList.before(searchInput);

// Add border to a clicked user
printedList.addEventListener('click', event => {
  const target = event.target;

  if (target?.nodeName !== 'LI') return;

  // for (const li of event.currentTarget.querySelectorAll('li')) {
  //   li.style.border =
  //     li === target && !li.style.border.length ? '1px solid red' : '';
  // }

  target.style.border = target.style.border.length ? '' : '1px solid red';
});

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
