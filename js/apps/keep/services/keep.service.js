'use strict';

import { storageService } from '../../../services/storage-service.js';
import { getLorem } from '../../../services/util-service.js';

export default {
  query
};

const NOTES_KEY = 'ehudBenNotes7';

let gNotes = null;

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
    body: getLorem(),
    isPinned: false,
    createdAt: Date.now()
  }
];
