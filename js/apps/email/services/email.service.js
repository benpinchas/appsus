'use strict';

export default {
  query
};

let gEmails;

gEmails = [
  {
    id: Math.random() + '',
    subject: 'First email',
    body: 'Bla bla bla',
    isRead: false,
    sentAt: Date.now()
  },
  {
    id: Math.random() + '',
    subject: '2 email',
    body: 'Bla bla bla',
    isRead: false,
    sentAt: Date.now()
  },
  {
    id: Math.random() + '',
    subject: '3 email',
    body: 'Na Bla bla bla',
    isRead: false,
    sentAt: Date.now()
  }
];

function query() {
  return Promise.resolve(gEmails);
}
