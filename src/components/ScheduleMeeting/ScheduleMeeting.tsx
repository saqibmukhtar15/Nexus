import { useState } from "react";

const ScheduleMeeting = ({ slots, onRequest }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleSend = () => {
    if (!selectedDate) return;

    onRequest({
      id: Date.now(),
      name: "Investor",
      date: selectedDate,
    });

    setSelectedDate("");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-3">📩 Request Meeting</h2>

      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">Select Available Slot</option>
        {slots.map((slot, i) => (
          <option key={i} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      <button
        onClick={handleSend}
        className="w-full bg-indigo-600 text-white py-2 rounded"
      >
        Send Request
      </button>
    </div>
  );
};

export default ScheduleMeeting;