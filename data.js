
const bears = [
    {
        name: 'Papa Bear',
        age: 32
    },
    {
        name: 'Mama Bear',
        age: 32
    },
    {
        name: 'Baby Bear',
        age: 7
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