const newDate = new Date(2023, 3, 1);
const dates = document.querySelectorAll('.blog__date');

const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const formatter = new Intl.DateTimeFormat('en-GB', options);
const formatted = formatter.format(newDate);


dates.forEach(date => {
  date.textContent = formatted;
});

