import { useState } from "react";

export default function VideoCall() {
  const [isCall, setIsCall] = useState(false);

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      {isCall ? (
        <div>
          <p>Call Started...</p>
          <button onClick={() => setIsCall(false)}>End Call</button>
        </div>
      ) : (
        <button onClick={() => setIsCall(true)}>Start Call</button>
      )}
    </div>
  );
}