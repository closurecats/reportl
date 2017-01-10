import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reactable from 'reactable';

const Table = Reactable.Table;

class RenderUserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {
          'id': 1,
          'departmentId': 1,
          'courseId': 1,
          'classId': 1,
          'teacherId': 8,
          'studentId': 1,
          'moduleId': 3,
          'attendanceId': null,
          'gradeableobjectId': 1,
          'gradeableobjecttypeId': 2,
          'meetingId': 1,
          'tagId': null,
          'startDate': '2017-01-08T09:46:42.000Z',
          'endDate': '2017-01-08T09:46:42.000Z',
          'createdAt': '2017-01-08T09:46:42.000Z',
          'updatedAt': '2017-01-08T09:46:42.000Z',
          'grade': 91,
          'departments': {
            'id': 1,
            'name': 'English',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'course': {
            'id': 1,
            'departmentId': 1,
            'name': 'American Literature',
            'description': 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'classes': {
            'id': 1,
            'teacherId': 8,
            'courseId': 1,
            'name': 'American Literature',
            'size': 20,
            'location': null,
            'monday': 1,
            'tuesday': 0,
            'wednesday': 1,
            'thursday': 0,
            'friday': 1,
            'startTime': '09:00:00',
            'endTime': '10:00:00',
            'startDate': '2017-01-08T09:46:01.000Z',
            'endDate': '2017-01-08T09:46:01.000Z',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'gradeableobjects': {
            'id': 1,
            'objectName': 'quiz 1',
            'duration': null,
            'percentOfModuleGrade': null,
            'moduleId': 3,
            'meetingId': 1,
            'fileId': null,
            'typeId': 2,
            'dayAssigned': null,
            'dayDue': null
          },
          'gradeableobjecttypes': {
            'id': 2,
            'name': 'quiz',
            'createdAt': '2017-01-08T09:46:10.000Z',
            'updatedAt': '2017-01-08T09:46:10.000Z'
          },
          'users': {
            'id': 1,
            'isDisabled': 0,
            'name': 'student6',
            'firstName': 'John',
            'lastName': 'Smith',
            'email': 'john@gmail.com',
            'imgUrl': 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiyhdiGurPRAhUGPiYKHWm_CZ0QjRwIBw&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHuey_Newton_HS_Yearbook.jpeg&bvm=bv.142059868,d.cGw&psig=AFQjCNFLuqmi_ejPuATK5bxaHhxUXvp8zA&ust=1483995994684526',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 1,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'John Smith'
          },
          'teacher': {
            'id': 8,
            'isDisabled': 0,
            'name': 'teacher1',
            'firstName': 'Bob',
            'lastName': 'Brown',
            'email': 'bob@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 2,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Bob Brown'
          },
          'module': {
            'id': 3,
            'moduleName': 'Industrial Revolution',
            'description': null,
            'startDate': '2017-01-08T09:46:09.000Z',
            'endDate': '2017-01-08T09:46:09.000Z',
            'percentOfClassGrade': 0.25,
            'classId': 1
          }
        },
        {
          'id': 2,
          'departmentId': 1,
          'courseId': 1,
          'classId': 1,
          'teacherId': 8,
          'studentId': 2,
          'moduleId': 3,
          'attendanceId': null,
          'gradeableobjectId': 1,
          'gradeableobjecttypeId': 2,
          'meetingId': 1,
          'tagId': null,
          'startDate': '2017-01-08T09:46:42.000Z',
          'endDate': '2017-01-08T09:46:42.000Z',
          'createdAt': '2017-01-08T09:46:42.000Z',
          'updatedAt': '2017-01-08T09:46:42.000Z',
          'grade': 71,
          'departments': {
            'id': 1,
            'name': 'English',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'course': {
            'id': 1,
            'departmentId': 1,
            'name': 'American Literature',
            'description': 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'classes': {
            'id': 1,
            'teacherId': 8,
            'courseId': 1,
            'name': 'American Literature',
            'size': 20,
            'location': null,
            'monday': 1,
            'tuesday': 0,
            'wednesday': 1,
            'thursday': 0,
            'friday': 1,
            'startTime': '09:00:00',
            'endTime': '10:00:00',
            'startDate': '2017-01-08T09:46:01.000Z',
            'endDate': '2017-01-08T09:46:01.000Z',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'gradeableobjects': {
            'id': 1,
            'objectName': 'quiz 1',
            'duration': null,
            'percentOfModuleGrade': null,
            'moduleId': 3,
            'meetingId': 1,
            'fileId': null,
            'typeId': 2,
            'dayAssigned': null,
            'dayDue': null
          },
          'gradeableobjecttypes': {
            'id': 2,
            'name': 'quiz',
            'createdAt': '2017-01-08T09:46:10.000Z',
            'updatedAt': '2017-01-08T09:46:10.000Z'
          },
          'users': {
            'id': 2,
            'isDisabled': 0,
            'name': 'student7',
            'firstName': 'Alice',
            'lastName': 'Adams',
            'email': 'alice@adams.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 1,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Alice Adams'
          },
          'teacher': {
            'id': 8,
            'isDisabled': 0,
            'name': 'teacher1',
            'firstName': 'Bob',
            'lastName': 'Brown',
            'email': 'bob@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 2,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Bob Brown'
          },
          'module': {
            'id': 3,
            'moduleName': 'Industrial Revolution',
            'description': null,
            'startDate': '2017-01-08T09:46:09.000Z',
            'endDate': '2017-01-08T09:46:09.000Z',
            'percentOfClassGrade': 0.25,
            'classId': 1
          }
        },
        {
          'id': 3,
          'departmentId': 1,
          'courseId': 1,
          'classId': 1,
          'teacherId': 8,
          'studentId': 3,
          'moduleId': 3,
          'attendanceId': null,
          'gradeableobjectId': 1,
          'gradeableobjecttypeId': 2,
          'meetingId': 1,
          'tagId': null,
          'startDate': '2017-01-08T09:46:42.000Z',
          'endDate': '2017-01-08T09:46:42.000Z',
          'createdAt': '2017-01-08T09:46:42.000Z',
          'updatedAt': '2017-01-08T09:46:42.000Z',
          'grade': 96,
          'departments': {
            'id': 1,
            'name': 'English',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'course': {
            'id': 1,
            'departmentId': 1,
            'name': 'American Literature',
            'description': 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'classes': {
            'id': 1,
            'teacherId': 8,
            'courseId': 1,
            'name': 'American Literature',
            'size': 20,
            'location': null,
            'monday': 1,
            'tuesday': 0,
            'wednesday': 1,
            'thursday': 0,
            'friday': 1,
            'startTime': '09:00:00',
            'endTime': '10:00:00',
            'startDate': '2017-01-08T09:46:01.000Z',
            'endDate': '2017-01-08T09:46:01.000Z',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'gradeableobjects': {
            'id': 1,
            'objectName': 'quiz 1',
            'duration': null,
            'percentOfModuleGrade': null,
            'moduleId': 3,
            'meetingId': 1,
            'fileId': null,
            'typeId': 2,
            'dayAssigned': null,
            'dayDue': null
          },
          'gradeableobjecttypes': {
            'id': 2,
            'name': 'quiz',
            'createdAt': '2017-01-08T09:46:10.000Z',
            'updatedAt': '2017-01-08T09:46:10.000Z'
          },
          'users': {
            'id': 3,
            'isDisabled': 0,
            'name': 'student1',
            'firstName': 'Alvin',
            'lastName': 'Ardsley',
            'email': 'alvin@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 1,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Alvin Ardsley'
          },
          'teacher': {
            'id': 8,
            'isDisabled': 0,
            'name': 'teacher1',
            'firstName': 'Bob',
            'lastName': 'Brown',
            'email': 'bob@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 2,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Bob Brown'
          },
          'module': {
            'id': 3,
            'moduleName': 'Industrial Revolution',
            'description': null,
            'startDate': '2017-01-08T09:46:09.000Z',
            'endDate': '2017-01-08T09:46:09.000Z',
            'percentOfClassGrade': 0.25,
            'classId': 1
          }
        },
        {
          'id': 4,
          'departmentId': 1,
          'courseId': 1,
          'classId': 1,
          'teacherId': 8,
          'studentId': 4,
          'moduleId': 3,
          'attendanceId': null,
          'gradeableobjectId': 1,
          'gradeableobjecttypeId': 2,
          'meetingId': 1,
          'tagId': null,
          'startDate': '2017-01-08T09:46:42.000Z',
          'endDate': '2017-01-08T09:46:42.000Z',
          'createdAt': '2017-01-08T09:46:42.000Z',
          'updatedAt': '2017-01-08T09:46:42.000Z',
          'grade': 68,
          'departments': {
            'id': 1,
            'name': 'English',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'course': {
            'id': 1,
            'departmentId': 1,
            'name': 'American Literature',
            'description': 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'classes': {
            'id': 1,
            'teacherId': 8,
            'courseId': 1,
            'name': 'American Literature',
            'size': 20,
            'location': null,
            'monday': 1,
            'tuesday': 0,
            'wednesday': 1,
            'thursday': 0,
            'friday': 1,
            'startTime': '09:00:00',
            'endTime': '10:00:00',
            'startDate': '2017-01-08T09:46:01.000Z',
            'endDate': '2017-01-08T09:46:01.000Z',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'gradeableobjects': {
            'id': 1,
            'objectName': 'quiz 1',
            'duration': null,
            'percentOfModuleGrade': null,
            'moduleId': 3,
            'meetingId': 1,
            'fileId': null,
            'typeId': 2,
            'dayAssigned': null,
            'dayDue': null
          },
          'gradeableobjecttypes': {
            'id': 2,
            'name': 'quiz',
            'createdAt': '2017-01-08T09:46:10.000Z',
            'updatedAt': '2017-01-08T09:46:10.000Z'
          },
          'users': {
            'id': 4,
            'isDisabled': 0,
            'name': 'student2',
            'firstName': 'Jennifer',
            'lastName': 'Vasquez',
            'email': 'jen@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 1,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Jennifer Vasquez'
          },
          'teacher': {
            'id': 8,
            'isDisabled': 0,
            'name': 'teacher1',
            'firstName': 'Bob',
            'lastName': 'Brown',
            'email': 'bob@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 2,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Bob Brown'
          },
          'module': {
            'id': 3,
            'moduleName': 'Industrial Revolution',
            'description': null,
            'startDate': '2017-01-08T09:46:09.000Z',
            'endDate': '2017-01-08T09:46:09.000Z',
            'percentOfClassGrade': 0.25,
            'classId': 1
          }
        },
        {
          'id': 5,
          'departmentId': 1,
          'courseId': 1,
          'classId': 1,
          'teacherId': 8,
          'studentId': 5,
          'moduleId': 3,
          'attendanceId': null,
          'gradeableobjectId': 1,
          'gradeableobjecttypeId': 2,
          'meetingId': 1,
          'tagId': null,
          'startDate': '2017-01-08T09:46:42.000Z',
          'endDate': '2017-01-08T09:46:42.000Z',
          'createdAt': '2017-01-08T09:46:42.000Z',
          'updatedAt': '2017-01-08T09:46:42.000Z',
          'grade': 89,
          'departments': {
            'id': 1,
            'name': 'English',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'course': {
            'id': 1,
            'departmentId': 1,
            'name': 'American Literature',
            'description': 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'classes': {
            'id': 1,
            'teacherId': 8,
            'courseId': 1,
            'name': 'American Literature',
            'size': 20,
            'location': null,
            'monday': 1,
            'tuesday': 0,
            'wednesday': 1,
            'thursday': 0,
            'friday': 1,
            'startTime': '09:00:00',
            'endTime': '10:00:00',
            'startDate': '2017-01-08T09:46:01.000Z',
            'endDate': '2017-01-08T09:46:01.000Z',
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z'
          },
          'gradeableobjects': {
            'id': 1,
            'objectName': 'quiz 1',
            'duration': null,
            'percentOfModuleGrade': null,
            'moduleId': 3,
            'meetingId': 1,
            'fileId': null,
            'typeId': 2,
            'dayAssigned': null,
            'dayDue': null
          },
          'gradeableobjecttypes': {
            'id': 2,
            'name': 'quiz',
            'createdAt': '2017-01-08T09:46:10.000Z',
            'updatedAt': '2017-01-08T09:46:10.000Z'
          },
          'users': {
            'id': 5,
            'isDisabled': 0,
            'name': 'student3',
            'firstName': 'Erin',
            'lastName': 'McClellan',
            'email': 'erin@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 1,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Erin McClellan'
          },
          'teacher': {
            'id': 8,
            'isDisabled': 0,
            'name': 'teacher1',
            'firstName': 'Bob',
            'lastName': 'Brown',
            'email': 'bob@gmail.com',
            'imgUrl': null,
            'createdAt': '2017-01-08T09:46:01.000Z',
            'updatedAt': '2017-01-08T09:46:01.000Z',
            'typeId': 2,
            'description': null,
            'address': null,
            'phoneNumber': null,
            'dateOfBirth': null,
            'fullName': 'Bob Brown'
          },
          'module': {
            'id': 3,
            'moduleName': 'Industrial Revolution',
            'description': null,
            'startDate': '2017-01-08T09:46:09.000Z',
            'endDate': '2017-01-08T09:46:09.000Z',
            'percentOfClassGrade': 0.25,
            'classId': 1
          }
        },
      ],
    };
  }

  render() {
    const tableData = [];

    this.state.myTableData.forEach((tableItem) => {
      tableData.push({
        Name: tableItem.users.fullName,
        Grade: tableItem.grade,
        Module: tableItem.module.name,
        Assignment: tableItem.gradeableobjects.objectName,
        Class: tableItem.classes.name,
        Department: tableItem.departments.name,

      });
    });
    return (
      <Table
        className='table'
        data={tableData}
        itemsPerPage={4}
        pageButtonLimit={5}
        sortable={[{ column: 'Grade',
          sort: function sortFunction(a, b) {
            return a > b ? 1 : -1;
          } }]}

      />
    );
  }
}

RenderUserTable.propTypes = {
  myTableData: React.PropTypes.arrayOf(React.PropTypes.object),
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps)(RenderUserTable);
