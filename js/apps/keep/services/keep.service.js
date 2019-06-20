'use strict';

export default {
  query
};

let gNotes;

gNotes = [
  {
    id: Math.random() + '',
    title: 'First note',
    body: 'Note bla bla',
    isPinned: false,
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    title: 'Second note',
    body: 'Note bla bla',
    isPinned: false,
    createdAt: Date.now()
  },
  {
    id: Math.random() + '',
    title: 'Third note',
    body: 'Note bla bla',
    isPinned: false,
    createdAt: Date.now()
  }
];

function query() {
  return Promise.resolve(gNotes);
}
