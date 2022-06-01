/* eslint-disable */
// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// if(false){
//   function sum(a,b){
//     return a+b;
//   }
// }

// sum(5,10)

// ====================================
/* eslint-disable */
// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//    messanger
//    sendMessage
//    setMessage
//    setMessage
//    sender
//   },
//   'outherLexicalEnv': null
// }

// ======================== run
/* eslint-disable */
// GLOBAL LEX ENV
// {
//   run
//   },
//   'outherLexicalEnv': null
// }
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  // console.log(weight);

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
// createMessenger();

const messanger = createMessenger();
const messanger1 = createMessenger();

messanger1.sendMessage('Ann');
messanger1.sendMessage('Hello');
messanger.sendMessage('BIONIC');
messanger.sendMessage('Andrey');

run();
