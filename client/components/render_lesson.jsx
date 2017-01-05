import React from 'react';
import SetMeeting from '../containers/setMeeting';
import Attendance from './attendance_student';
// import Assignments from './render_gradeable_objects';

const RenderLesson = () => (
  <div>
    <SetMeeting />
    <Attendance />
    {/*  <Assignments />  */}
  </div>
);

export default RenderLesson;
