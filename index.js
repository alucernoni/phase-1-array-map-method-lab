const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((str) => str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '))
}
 

// const titleCaseWord = word => word[0].toUpperCase() + word.slice(1)
// const titleCaseSent = (str) => str.split(' ').map(titleCaseWord).join(' ')


// const titleCased = () => tutorials.map(titleCaseSent)

// const titleCased = () => tutorials.map((str) => str.split(' ').map(titleCaseWord).join(' '))


console.log(titleCased())


// const titleCased = () => {
//   const newArray = tutorials.map((str) => str.split(' '));
//   for (let element of newArray) {
//     const x = element.map((word) => {
//       word[0] = word[0].toUpperCase() + word.slice(1);
//     });
//     const joinWord = x.join(' ');
//   }
//   return newArray
// }


// console.log(titleCased())