import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => a.done - b.done;

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.setAttribute('data-id', id);

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  const textElem = document.createElement('span');

  if (done) {
    listItemElement.classList.add('list__item_done');
    textElem.classList.add('list__item-text');
  }

  textElem.textContent = text;
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item_delete-btn');
  deleteBtnElem.setAttribute('data-id', id);

  listItemElement.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElement;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
