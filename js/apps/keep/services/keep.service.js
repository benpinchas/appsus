'use strict';

import { storageService } from '../../../services/storage-service.js';
import { getLorem } from '../../../services/util-service.js';

export default {
  query
};

const NOTES_KEY = 'ehudBenNotes11';

let gNotes = null;

export function saveNotes() {
  storageService.store(NOTES_KEY, gNotes);
}

export function addNote(note) {
  gNotes.unshift(note);
  saveNotes();
}

function query() {
  return storageService.load(NOTES_KEY).then(notes => {
    if (notes) {
      gNotes = notes;
      return gNotes;
    } else {
      gNotes = starterNotes;
      return storageService.store(NOTES_KEY, gNotes).then(() => {
        return gNotes;
      });
    }
  });
}

function getIdxByNote(theNote) {
  return gNotes.findIndex(note => note.id === theNote.id);
}

export function deleteNote(noteToDelete) {
  let noteIdx = getIdxByNote(noteToDelete);
  if (noteIdx !== -1) {
    gNotes.splice(noteIdx, 1);
  }

  saveNotes();
  return Promise.resolve();
}

export function togglePinNote(noteToTogglePin) {
  console.log(noteToTogglePin.isPinned);

  let noteIdx = getIdxByNote(noteToTogglePin);

  gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned;

  // console.log(gNotes[noteIdx])
  if (gNotes[noteIdx].isPinned) {
    //if (noteIdx !== 0) {
    let splicedNote = gNotes.splice(noteIdx, 1);
    console.log('SPLICED NOTE', splicedNote);
    gNotes.unshift(splicedNote[0]);
    //}
  } else {
    //if (noteIdx !== gNotes.length - 1) {
    let splicedNote = gNotes.splice(noteIdx, 1);
    gNotes.push(splicedNote[0]);
    //}
  }

  saveNotes();

  return Promise.resolve();
}

let starterNotes = [
  {
    id: Math.random() + '',
    data:
      'https://www.worldatlas.com/r/w728-h425-c728x425/upload/32/ed/dd/shutterstock-611361698.jpg',
    isPinned: true,
    type: 'image', //image //todos //youtube //audio,
    color: '#ffe4e8',
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    data: getLorem(),
    isPinned: false,
    type: 'text', //image //todos //youtube //audio,
    color: 'whitesmoke',
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    data: [
      { id: Math.random() + '', txt: 'Dator Rio', isDone: true },
      { id: Math.random() + '', txt: 'Riof', isDone: false },
      { id: Math.random() + '', txt: 'saver', isDone: true }
    ],
    isPinned: false,
    type: 'todos', //image //todos //youtube //audio,
    color: '#e0e0ff',
    createdAt: Date.now()
  }
];
