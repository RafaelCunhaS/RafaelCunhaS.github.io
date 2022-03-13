const data = require('../data/zoo_data');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const daysSchedule = (param) => param.reduce((accObj, day) => {
  const { open, close } = data.hours[day];
  const getSpecies = data.species.filter((obj) => obj.availability.includes(day));
  const speciesName = getSpecies.map((obj) => obj.name);
  const acc = accObj;
  acc[day] = {
    officeHour: open !== 0 ? `Open from ${open}am until ${close}pm` : 'CLOSED',
    exhibition: open !== 0 ? speciesName : 'The zoo will be closed!',
  };
  return acc;
}, {});

const schedule = (specie) => data.species.find((obj) => specie.includes(obj.name)).availability;

function getSchedule(...scheduleTarget) {
  let array = scheduleTarget;
  if (data.species.some((obj) => array.includes(obj.name))) return schedule(array);
  if (array.length === 0 || !weekDays.includes(array[0])) array = weekDays;
  return daysSchedule(array);
}

module.exports = getSchedule;
