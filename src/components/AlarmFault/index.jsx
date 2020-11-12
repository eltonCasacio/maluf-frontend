import React from "react";
import "./alarmFault.css";

const lisAlarm = [
  "alarme1",
  "falha1"
];

const AlarmFault = () => {
  const listAlarmEL = lisAlarm.map((item) => <li>{item}</li>);

  return (
    <div className="alarm-fault">
      <ul>{listAlarmEL}</ul>
    </div>
  );
};

export default AlarmFault;
