'use strict';

import { storageService } from '../../../services/storage-service.js';

export default {
  query
};
const EMAILS_KEY = 'ehudBenEmails';

let gEmails = null;

function query() {
  return storageService.load(EMAILS_KEY).then(emails => {
    if (emails) {
      gEmails = emails;
      return gEmails;
    } else {
      gEmails = starterEmails;
      return storageService.store(EMAILS_KEY, gEmails).then(() => {
        return gEmails;
      });
    }
  });
}

export function saveEmails() {
  return storageService.store(EMAILS_KEY, gEmails);
}

export function sendEmail(email) {
  gEmails.incomes.unshift(email);
  gEmails.sent.unshift(email);
  saveEmails();
}

export function deleteEmail(emailToDelete) {
  if (emailToDelete.hasOwnProperty('isStarred')) {
    const emailIdx = gEmails.incomes.findIndex(
      email => email.id === emailToDelete.id
    );
    gEmails.incomes.splice(emailIdx, 1);
  } else {
    const emailIdx = gEmails.sent.findIndex(
      email => email.id === emailToDelete.id
    );
    gEmails.sent.splice(emailIdx, 1);
  }

  saveEmails();

  return Promise.resolve();
}

let starterEmails = {
  incomes: [
    {
      id: Math.random() + '',
      subject: 'First email ehud',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now(),
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: getLorem(),
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 33000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 34000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 30500,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
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
      isStarred: false
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
      isStarred: true
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: 'No replays yet',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false
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
      isStarred: true
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 30220000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: 'Bla bla bla',
      isRead: false,
      sentAt: Date.now() - 1001100,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false
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
      isStarred: true
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
        email: 'bobi@gmail.com'
      }
    },
    {
      id: Math.random() + '',
      subject: 'Sent2',
      body: 'Bla bla bla',
      sentAt: Date.now(),
      contact: {
        name: 'Momo',
        email: 'bobi@gmail.com'
      }
    },
    {
      id: Math.random() + '',
      subject: 'Good Day',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Bob',
        email: 'bobi@gmail.com'
      }
    },
    {
      id: Math.random() + '',
      subject: 'Hello Avi',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      }
    },
    {
      id: Math.random() + '',
      subject: 'Sent to Moshe',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      }
    },
    {
      id: Math.random() + '',
      subject: 'Goddbye',
      body: 'Bla efwefewf bla',
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      }
    }
  ]
};
