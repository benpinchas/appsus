'use strict';

import { storageService } from '../../../services/storage-service.js';
import { getLorem } from '../../../services/util-service.js';

export default {
  query
};
const EMAILS_KEY = 'ehudBenEmails17';

let gEmails = null;

// export function readEmailPercentage() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let readedCount = gEmails.incomes.filter(email => email.isRead)
//       resolve(parseInt(readedCount.length / gEmails.incomes.length * 100))
//     }, 1500)
//   })
// }

export function query() {
  if (gEmails) {
    console.log('GOOD');
    return Promise.resolve(gEmails);
  }
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

let starterEmails = {
  incomes: [
    {
      id: Math.random() + '',
      subject: 'Your new born child and is new home.',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now(),
      contact: {
        name: 'Ari',
        email: 'ehud@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'metal@gmail.com',
          txt: 'My reply is as follows: no.',
          time: Date.now() - 10000
        },
        {
          author: 'meandyou@gmail.com',
          txt: 'In the matter of the house.',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'My first book of the unknown',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now(),
      contact: {
        name: 'Ari',
        email: 'ari1989@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'I do not agree',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Trip to New York',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Air plane flight',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now(),
      contact: {
        name: 'Ben',
        email: 'dust@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'You and me will go',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Good to see you too',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Nice Day to you too',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 33000,
      contact: {
        name: 'Eri',
        email: 'erik@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@ygmail.com',
          txt: 'As i lay at the beach',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'You see my point',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'The children are playing',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 34000,
      contact: {
        name: 'Ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: '2 weeks to the festival',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'After the ride',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'First and last',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 30500,
      contact: {
        name: 'Sal',
        email: 'sally@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@mail.com',
          txt: 'I am the savior',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Good to see you too.',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Previous contact',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'Ben',
        email: 'ben@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Welcome here!.',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Second chance',
          time: Date.now()
        }
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
        {
          author: 'me@gmail.com',
          txt: 'I am here now',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Cat replay good to see you.',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'First encounter',
      body: 'Me and you',
      isRead: false,
      sentAt: Date.now() - 300000,
      contact: {
        name: 'Ela',
        email: 'ella@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Sea in the noon',
          time: Date.now() - 10000
        },
        {
          author: 'me@gmail.com',
          txt: 'Second chance to hear',
          time: Date.now()
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'No replays yet',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 10000,
      contact: {
        name: 'Ari',
        email: 'mar@gmail.com'
      },
      isStarred: false,
      replays: []
    },
    {
      id: Math.random() + '',
      subject: '3 email not answered',
      body: getLorem(),
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'Tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'In the closet place',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'First and last email',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 30220000,
      contact: {
        name: 'Tal',
        email: 'jamal@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Last replay here',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: '2 emails left',
      body: getLorem(),
      isRead: false,
      sentAt: Date.now() - 1001100,
      contact: {
        name: 'Ben',
        email: 'beni@gmail.com'
      },
      isStarred: false,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'You tube replay here',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Now there are 3 emails',
      body: getLorem(),
      isRead: true,
      sentAt: Date.now() - 123123123123,
      contact: {
        name: 'Tal',
        email: 'tal@gmail.com'
      },
      isStarred: true,
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Hello here',
          time: Date.now() - 10000
        }
      ]
    }
  ],

  sent: [
    {
      id: Math.random() + '',
      subject: 'Sent the phone',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Bob',
        email: 'bobi@gmail.com'
      },
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Add replay here',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Send to the office',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Mom',
        email: 'bobi@gmail.com'
      },
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'As the replay here last',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Good Day for you sir',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Bob',
        email: 'bobin@gmail.com'
      },
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Igor i am new here',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Hello Avi.',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Nami',
        email: 'nami@gmail.com'
      },
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Last fast',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Sent to Moshe',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Nas',
        email: 'albert@gmail.com'
      },
      replays: [
        {
          author: 'men@gmail.com',
          txt: 'Drop replay here',
          time: Date.now() - 10000
        }
      ]
    },
    {
      id: Math.random() + '',
      subject: 'Goodbye',
      body: getLorem(),
      sentAt: Date.now(),
      contact: {
        name: 'Mat',
        email: 'mat@gmail.com'
      },
      replays: [
        {
          author: 'me@gmail.com',
          txt: 'Far the odds',
          time: Date.now() - 10000
        }
      ]
    }
  ]
};
