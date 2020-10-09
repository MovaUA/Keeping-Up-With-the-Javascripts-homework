/*
main task: timeAdderSeconds function returns time in seconds
*/

// invalid: value1 or label1
console.log({ time: timeAdderSeconds("not a number", 'second', 1, 'second') });
console.log({ time: timeAdderSeconds(1.5, 'second', 1, 'second') });
console.log({ time: timeAdderSeconds(0, 'second', 1, 'second') });
console.log({ time: timeAdderSeconds(1, 'unknow interval', 1, 'second') });
console.log({ time: timeAdderSeconds(1, 'seconds', 1, 'second') });
console.log({ time: timeAdderSeconds(10, 'second', 1, 'second') });

// invalid: value2 or label2
console.log({ time: timeAdderSeconds(1, 'second', "not a number", 'second') });
console.log({ time: timeAdderSeconds(1, 'second', 1.5, 'second') });
console.log({ time: timeAdderSeconds(1, 'second', 0, 'second') });
console.log({ time: timeAdderSeconds(1, 'second', 1, 'unknown interval') });
console.log({ time: timeAdderSeconds(1, 'second', 1, 'seconds') });
console.log({ time: timeAdderSeconds(1, 'second', 10, 'second') });

// valid input: adds two "time" argumets
console.log({ time: timeAdderSeconds(1, 'second', 1, 'hour') });
console.log({ time: timeAdderSeconds(90, 'seconds', 25, 'hours') });

function timeAdderSeconds(value1, label1, value2, label2) {
  if (!validateTime(value1, label1)) return false;
  if (!validateTime(value2, label2)) return false;

  return [value1 * getSecondFactor(label1) + value2 * getSecondFactor(label2), 'seconds'];
}

function validateTime(value, label) {
  // value is not a number
  if (typeof value !== 'number') return false;

  // value is not an integer number
  if (value % 1 !== 0) return false

  // value is not a positive number
  if (value < 1) return false;

  const singularIntervals = ['second', 'minute', 'hour', 'day'];
  const pluralIntervals = ['seconds', 'minutes', 'hours', 'days'];
  const intervals = [...singularIntervals, ...pluralIntervals];

  // label is invalid
  if (intervals.indexOf(label) === -1) return false;

  if (value === 1) {
    // invalid: singular value and plural label
    if (singularIntervals.indexOf(label) === -1) return false;
  } else {
    // invalid: plural value and singular label
    if (pluralIntervals.indexOf(label) === -1) return false;
  }

  // valid parameters
  return true;
}

function getSecondFactor(label) {
  switch (label) {
    case 'second':
    case 'seconds':
      return 1;
    case 'minute':
    case 'minutes':
      return 60;
    case 'hour':
    case 'hours':
      return 3600;
    case 'day':
    case 'days':
      return 86400;
    default:
      return false;
  }
}

/*
extra: timeAdder function returns time in "lagest" label units
*/

console.log({ time: timeAdder(1, 'second', 59, 'seconds') });
console.log({ time: timeAdder(1, 'second', 86399, 'seconds') });
console.log({ time: timeAdder(1, 'second', 1, 'day') });
console.log({ time: timeAdder(10, 'minutes', 110, 'minutes') });

function timeAdder(value1, label1, value2, label2) {
  if (!validateTime(value1, label1)) return false;
  if (!validateTime(value2, label2)) return false;

  const seconds = value1 * getSecondFactor(label1) + value2 * getSecondFactor(label2)

  if (seconds % getSecondFactor('day') === 0) {
    const days = seconds / getSecondFactor('day')
    if (days === 1) {
      return [1, 'day'];
    }
    return [days, 'days']
  }

  if (seconds % getSecondFactor('hour') === 0) {
    const hours = seconds / getSecondFactor('hour')
    if (hours === 1) {
      return [1, 'hour'];
    }
    return [hours, 'hours']
  }

  if (seconds % getSecondFactor('minute') === 0) {
    const minutes = seconds / getSecondFactor('minute')
    if (minutes === 1) {
      return [1, 'minute'];
    }
    return [minutes, 'minutes']
  }

  if (seconds === 1) {
    return [1, 'second'];
  }
  return [seconds, 'seconds'];
}
