'use strict';

import { storageService } from '../../../services/storage-service.js';
import { getLorem } from '../../../services/util-service.js';

export default {
  query
};

const NOTES_KEY = 'ehudBenNotes7';

let gNotes = null;

export function saveNotes() {
  storageService.store(NOTES_KEY, gNotes);
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

export function deleteNote(noteToDelete) {
  let noteIdx = gNotes.findIndex(note => note.id === noteToDelete.id);
  if (noteIdx !== -1) {
    gNotes.splice(noteIdx, 1);
  }

  saveNotes();
  return Promise.resolve();
}

let starterNotes = [
  {
    id: Math.random() + '',
    title: 'First note',
    body: getLorem(),
    isPinned: false,
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    title: 'Second note',
    body: getLorem(),
    isPinned: false,
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    title: 'Third note',
    body: getLorem() + getLorem(),
    isPinned: false,
    createdAt: Date.now()
  }
];
