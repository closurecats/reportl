import React from 'react';
import CourseFormMaker from '../containers/addCourse';
import DepartmentFormMaker from '../containers/addDepartment';
import UserFormMaker from '../containers/addUser';
import RenderClassBuilder from './render_class_builder';

const AllForms = () => (
  <div>
    <h1>Set Up</h1>
    <UserFormMaker />
    <DepartmentFormMaker />
    <CourseFormMaker />
    <RenderClassBuilder />
  </div>
);

export default AllForms;
