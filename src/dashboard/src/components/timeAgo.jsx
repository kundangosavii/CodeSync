import React, { useState, useEffect } from "react";

export default function TimeAgo({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (!timestamp) return;
    
    const time = timestamp.analyzedAt

    const calculateTime = () => {
      const now = new Date();
      const analyzedTime = new Date(time);
      const secondsPast = Math.floor((now - analyzedTime) / 1000);

      if (secondsPast < 60) {
        return "Just now";
      }
      const minutesPast = Math.floor(secondsPast / 60);
      if (minutesPast < 60) {
        return `${minutesPast}m ago`;
      }
      const hoursPast = Math.floor(minutesPast / 60);
      if (hoursPast < 24) {
        return `${hoursPast}h ago`;
      }
      const daysPast = Math.floor(hoursPast / 24);
      return `${daysPast}d ago`;
    };


    setTimeAgo(calculateTime());


    const interval = setInterval(() => {
      setTimeAgo(calculateTime());
    }, 30000);

    return () => clearInterval(interval);
  }, [timestamp]);

  if (!timestamp) return null;

  return <span>Analyzed {timeAgo}</span>;
}