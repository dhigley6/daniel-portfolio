const name = 'Daniel J Higley';
const greetingText = 'Hello, I\'m Daniel Higley.';
const greetingSubtext = 'I\'m interested in machine learning, applied physics, software and computers.';
const about = `I'm a researcher with experience applying machine learning in applied physics and more than ten years of data analytics experience.`;

const education = [
  {
    school: 'Stanford',
    degree: 'PhD in Applied Physics, 2018<br />M.S. in Applied Physics, 2017',
    logo: require('../stanford-logo.jpg'),
  },
  {
    school: 'Colorado State',
    degree: 'B.S. in Electrical Engineering, 2012<br />\nMinors in Physics & Mathematics',
    logo: require('../colorado-state-logo.png'),
  },
];

module.exports = {
  greetingText,
  greetingSubtext,
  about,
  education,
  name,
};
