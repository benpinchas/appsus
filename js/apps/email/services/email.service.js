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
    sentAt: Date.now() - 300000,
    from: {
      name: 'ehud',
      email: 'ehud@gmail.com'
    }
  },
  {
    id: Math.random() + '',
    subject: '2 email',
    body: 'Bla bla bla',
    isRead: false,
    sentAt: Date.now() - 10000,
    from: {
      name: 'ben',
      email: 'ben@gmail.com'
    }
  },
  {
    id: Math.random() + '',
    subject: '3 email',
    body: 'Na Bla bla bla',
    isRead: false,
    sentAt: Date.now() -123123123123,
    from: {
      name: 'tal',
      email: 'tal@gmail.com'
    }
  }
];

function query() {
  return Promise.resolve(gEmails);
}
