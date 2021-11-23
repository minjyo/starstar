import React from 'react';

const Popup = ({ personInfo, meetingInfo, popupInfo }) => {
  return (
    <div>
      {/* <div>유저 정보</div>
      {personInfo.map((person) => {
        <div>{person.username}</div>;
      })}
      <div>모임 정보</div>
      {meetingInfo.map((meeting) => {
        <div>{meeting.name}</div>;
      })} */}
      <div>{popupInfo.name}</div>
    </div>
  );
};

export default Popup; // useMemo?
