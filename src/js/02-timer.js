// Descrito en la documentación
import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
const daysDate = document.querySelector("span[data-days]");
const hoursDate = document.querySelector("span[data-hours]");
const minutesDate = document.querySelector("span[data-minutes]");
const secondsDate = document.querySelector("span[data-seconds]");
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            window.alert("Please choose a date in the future");
        } else {
            btnStart.disabled = false;
      }
  },
};

flatpickr("input#datetime-picker", options);


btnStart.addEventListener("click", () => {
interval = setInterval(() => {
    
const fechDate = document.querySelector("input");
const fechDateSeconds = new Date(fechDate.value).getTime();
const fechNow = new Date().getTime();
const ms = fechDateSeconds - fechNow;

    // Number of milliseconds per unit of time
    
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
        
  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    // return { days, hours, minutes, seconds };

    daysDate.innerHTML = ('0' + days).slice(-3);
    hoursDate.innerHTML = ('0' + hours).slice(-2);
    minutesDate.innerHTML = ('0' + minutes).slice(-2);
  secondsDate.innerHTML = ('0' + seconds).slice(-2);
  
  if (ms < 1) {
    clearInterval(interval);
    daysDate.innerHTML = ('00');
    hoursDate.innerHTML = ('00');
    minutesDate.innerHTML = ('00');
    secondsDate.innerHTML = ('00');
  }

}, 1000);
});


