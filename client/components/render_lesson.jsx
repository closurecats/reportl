import React from 'react';
import SetMeeting from '../containers/setMeeting';
import Attendance from './attendance';
import Assignments from './render_gradeable_objects';
import Presentation from './render_presentation';

const RenderLesson = () => (
  <div>
    <SetMeeting />
    <Attendance />
    <Presentation />
    <Assignments />
  </div>
);

export default RenderLesson;
