import { createTodoApp } from './todo.js';
import { initPlaylist } from './music.js';

function initializeYear() {
  const yearNode = document.querySelector('#year');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

function initializeApp() {
  initializeYear();

  createTodoApp({
    formSelector: '#todo-form',
    inputSelector: '#todo-input',
    listSelector: '#todo-list',
    countSelector: '#todo-count',
    emptyMessageSelector: '#todo-empty',
  });

  initPlaylist({
    containerSelector: '#music-list',
  });
}

document.addEventListener('DOMContentLoaded', initializeApp);
