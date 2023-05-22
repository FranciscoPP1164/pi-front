export default function initCalendar() {
  const date = new Date();
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dates = [];
  for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
    const newDate = {};
    newDate.day = i;
    newDate.apointments = [];
    if (i === 1) {
      newDate.firstDay = firstDate.getDay() + 1;
    }
    dates.push(newDate);
  }
  return dates;
}
