'use strict';

import { storageService } from '../../../services/storage-service.js';
import { getLorem } from '../../../services/util-service.js';

export default {
  query
};
const EMAILS_KEY = 'ehudBenEmails7';

let gEmails = null;

export function query() {
  if (gEmails) return Promise.resolve(gEmails);

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

export function getEmailById(id) {
  return new Promise((resolve, reject) => {
    if (!gEmails) {
      console.log('WILL NEVER HAPPANED');
      return query().then(() => {
        console.log(gEmails);
      });
    } else {
      for (let key in gEmails) {
        let email = gEmails[key].find(email => email.id === id);
        if (email) resolve(email);
      }
    }
  });
}

export function deleteEmail(emailToDelete) {
  for (let key in gEmails) {
    let emailIdx = gEmails[key].findIndex(
      email => email.id === emailToDelete.id
    );
    if (emailIdx !== -1) {
      gEmails[key].splice(emailIdx, 1);
    }
  }
  console.log('HERR');
  saveEmails();
  return Promise.resolve();
}

export function readEmailPercentage() {
  // return Promise.resolve(1);
  return Date.now();
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Nice Day',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 33000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Get A Car',
      body: getLorem(),
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
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
      isStarred: false,
      replays: [
        { txt: 'Fisrt replay here', time: Date.now() - 10000 },
        { txt: 'Seconed replay good to see', time: Date.now() }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'No replays yet',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
      replays: []
    },
    {
      id: Math.random() + '',
      subject: '3 email',
      body: getLorem(),
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'First email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 30220000,
      contact: {
        name: 'ehud',
        email: 'ehud@gmail.com'
      },
      isStarred: false,
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: '2 email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 1001100,
      contact: {
        name: 'ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: '3 email',
      body: getLorem(),
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    }
  ],

  sent: [
    {
      id: Math.random() + '',
      subject: 'Sent',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'bobi',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'Sent2',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Momo',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'Good Day',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Bob',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'Hello Avi',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'Sent to Moshe',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    },
    {
      id: Math.random() + '',
      subject: 'Goddbye',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'bobi@gmail.com'
      },
      replays: [{ txt: 'Fisrt replay here', time: Date.now() - 10000 }]
    }
  ]
};
