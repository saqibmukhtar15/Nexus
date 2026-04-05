import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2026-04-10" }
  ]);

  return (
    <div className="p-4 bg-white rounded shadow">
      <button
        onClick={() =>
          setEvents([
            ...events,
            {
              title: "New Meeting",
              date: new Date().toISOString().slice(0, 10),
            },
          ])
        }
        className="mb-3 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add Meeting
      </button>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Calendar;