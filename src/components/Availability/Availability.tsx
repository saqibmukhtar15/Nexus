import { useState } from "react";

const Availability = ({ onAddSlot }) => {
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!date) return;
    onAddSlot(date);
    setDate("");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-3">🟢 Set Availability</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={handleAdd}
        className="w-full bg-green-500 text-white py-2 rounded"
      >
        Add Slot
      </button>
    </div>
  );
};

export default Availability;