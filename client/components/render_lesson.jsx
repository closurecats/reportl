import React from 'react';
import Attendance from './attendance';
import Assignments from './render_gradeable_objects';
import Presentation from './render_presentation';

const RenderLesson = () => (
  <div>
    <h2 className="pageTitle">Lesson</h2>
    <Presentation />
    <Assignments />
    <Attendance />
  </div>
);

export default RenderLesson;
