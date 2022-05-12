const test = { hours: 2, minutes: 15 };

export const timeParser = (time) => {
  const { hours, minutes } = time;
  let minutesOutput;
  let hoursOutPut;

  if (hours < 10) {
    hoursOutPut = `0${hours}`;
  } else {
    hoursOutPut = hours;
  }

  if (minutes < 10) {
    minutesOutput = `0${minutes}`;
  } else {
    minutesOutput = minutes;
  }
  return { hours: hoursOutPut, minutes: minutesOutput };
};
