const average = (array) => {
  let sum = 0;
  if (array.length === 0) { 
    return undefined; 
  }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    sum += array[i];
  }
  return Math.round(sum / array.length);
};

module.exports = average;
