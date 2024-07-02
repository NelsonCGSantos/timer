const timerAlarms = process.argv.slice(2);

const noise = () => {
  process.stdout.write("\x07");
};

for (const timerAlarm of timerAlarms) {
  const time = Number(timerAlarm);

  if (!isNaN(time) && time > 0) {
    setTimeout(noise, time * 1000);
  }
}
