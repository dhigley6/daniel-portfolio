const name = 'Daniel J Higley';
const greetingText = 'Hello, I\'m Daniel Higley.';
const greetingSubtext = 'I\'m an applied physics PhD with more than 10 years of data analysis experience.';
const about = `I'm a Stanford applied physics PhD graduate with experience in Python, machine learning techniques, extracting insights from large and complex data sets with statistical data analysis, custom numerical simulations and working cross-functionally.
I also have domain knowledge in optics, X-ray technology, imaging, computer hardware and materials.`;

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
