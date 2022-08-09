import React from 'react';
import './ListStudentsForInterview.css';
import { SingleStudentForInterview } from './SingleStudentForInterview/SingleStudentForInterview';
import { StudentOnInterviewList } from 'types';

interface Props {
  students: StudentOnInterviewList[];
  fetchStudents: () => void;
}

export const ListStudentsForInterview = (props: Props) => {
  const studentsList = [];
  for (let i = 0; i < Object.keys(props.students).length; i++) {
    studentsList.push(props.students[i]);
  }
  return (
    <>
      <div className="hr-all-students-interview__wrapper">
        <ul className="hr-all-students-interview">
          {studentsList.map((student) => (
            <SingleStudentForInterview
              fetchStudents={props.fetchStudents}
              student={student}
              key={student.userId}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
