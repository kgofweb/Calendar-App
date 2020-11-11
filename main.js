// CREATE A NEW OBJECT DATE
const date = new Date();

// Render Calendar
const renderCalendar = () => {

   // Change current date
   date.setDate(1);

   const monthDays = document.querySelector('.days');

   // Last Days
   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

   // Previews Last date of current Month
   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

   // Index Number
   const firstDayIndex = date.getDay();

   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

   // Next day
   const nextDays = 7 - lastDayIndex - 1;

   // GENERATE MONTH
   const months = [
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre"
   ];

   // Dynamically set the month and date  
   document.querySelector('.date h2').innerHTML = months[date.getMonth()];
   document.querySelector('.date p').innerHTML = new Date().toDateString();

   // Display days
   let days = "";

   for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
   }

   // Last date
   for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
         days += `<div class="today">${i}</div>`;
      } else {
         days += `<div>${i}</div>`;
      }
   }

   // Next Date
   for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
   }
}


// Arrow Left
const preview = document.querySelector('.preview');

preview.addEventListener('click', () => {
   date.setMonth(date.getMonth() - 1);
   renderCalendar();
});

// Arrow Right
const nextMonth = document.querySelector('.next');

nextMonth.addEventListener('click', () => {
   date.setMonth(date.getMonth() + 1);
   renderCalendar();
});

// Call function
renderCalendar();