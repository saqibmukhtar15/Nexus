const MeetingRequests = ({ requests, onAccept, onReject }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-3">📨 Requests</h2>

      {requests.map((req) => (
        <div key={req.id} className="flex justify-between mb-2">
          <span>{req.name} - {req.date}</span>

          <div className="flex gap-2">
            <button
              onClick={() => onAccept(req)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Accept
            </button>

            <button
              onClick={() => onReject(req.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingRequests;