
const bears = [
    {
        name: 'Papa Bear',
        age: 32,
        bearSocialSecurity: 1,
        isVictim: false,
        GPA: 4.0
    },
    {
        name: 'Mama Bear',
        age: 32,
        bearSocialSecurity: 2,
        isVictim: false,
        GPA: 4.0
    },
    {
        name: 'Baby Bear',
        age: 7,
        bearSocialSecurity: 3,
        isVictim: false,
        GPA: 3.5
    }
];

const dinnerOptions = [
  {
    owner: bears[0],
    temperature: 'Too Hot',
  },
  {
    owner: bears[1],
    temperature: 'Too Cold',
  },
  {
    owner: bears[2],
    temperature: 'Just Right',
  },
];

module.exports = {
    bears,
    dinnerOptions
}