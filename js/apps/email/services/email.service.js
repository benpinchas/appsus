'use strict';

import {storageService} from '../../../services/storage-service.js'

export default {
  query
};
const EMAILS_KEY = 'ehudBenEmails'

let gEmails = null;

function query() {
  return storageService.load(EMAILS_KEY)
    .then(emails => {
      if (emails)  {
        gEmails = emails
        return gEmails
      }
      else {
        gEmails = starterEmails
        return storageService.store(EMAILS_KEY ,emails)
            .then(() => {
              return gEmails
            })
      }
    })
}

export function saveEmails() {
  return storageService.store(EMAILS_KEY, gEmails)
}


let starterEmails = {
  incomes: [
    {
      id: Math.random() + '',
      subject: 'First email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com',
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '3 email',
      body: 'Na Bla bla bla',
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com',
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '3 email',
      body: 'Na Bla bla bla',
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com',
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
    },
    {
      id: Math.random() + '',
      subject: '3 email',
      body: 'Na Bla bla bla',
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
    }
  ],

  sent: [
    {
      id: Math.random() + '',
      subject: 'Sent',
      body: 'Bla bla bla',
      sentAt: Date.now(),
      contact: {
        name: 'bobi',
        email: 'bobi@gmail.com',
      },
    },
    {
      id: Math.random() + '',
      subject: 'Sent2',
      body: 'Bla bla bla',
      sentAt: Date.now(),
      contact: {
        name: 'Momo',
        email: 'bobi@gmail.com',
      },
    },
    {
      id: Math.random() + '',
      subject: 'Good Day',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Bob',
        email: 'bobi@gmail.com',
      },
    },
    {
      id: Math.random() + '',
      subject: 'Hello Avi',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com',
      },
    },
    {
      id: Math.random() + '',
      subject: 'Sent to Moshe',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com',
      },
    },
    {
      id: Math.random() + '',
      subject: 'Goddbye',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com',
      },
    },
  ]

}


