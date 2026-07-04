import Calendar from '../common/Calendar.jsx';

export default function LeaveCalendar({ markedDates, onSelectDate }) {
  return <Calendar markedDates={markedDates} onSelectDate={onSelectDate} />;
}
