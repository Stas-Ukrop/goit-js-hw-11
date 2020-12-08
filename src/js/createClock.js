const refs = {
  day: document.querySelector("span[data-value='days']"),
  hour: document.querySelector("span[data-value='hours']"),
  min: document.querySelector("span[data-value='mins']"),
  sec: document.querySelector("span[data-value='secs']"),
};

class Countdown {
  constructor(selector, targetDate) {
    this.$el = document.querySelector(selector);
    this.targetDate = targetDate;
  }
  updateClockItems(time) {
    const pad = this.pad;

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.day.textContent = `${days}`;
    refs.hour.textContent = `${hours}`;
    refs.min.textContent = `${mins}`;
    refs.sec.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  loadingTimer = setInterval(() => {
    const startTime = Date.now();
    let diff = this.targetDate - startTime;
    this.updateClockItems(diff);
  }, refs.sec);
}

new Countdown(
  ...Object.values({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  }),
);
