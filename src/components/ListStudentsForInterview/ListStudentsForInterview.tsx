import React from 'react';
import './ListStudentsForInterview.css';
import { SingleStudentForInterview } from './SingleStudentForInterview/SingleStudentForInterview';
import { StudentOnInterviewList } from 'types';

interface Props {
  students: StudentOnInterviewList[];
  fetchStudents: () => Promise<void>;
}

export const ListStudentsForInterview = (props: Props) => {
  return (
    <>
      <div className="hr-all-students-interview__wrapper">
        <ul className="hr-all-students-interview">
          {props.students.map((student, index) => (
            <SingleStudentForInterview
              student={student}
              key={index}
              fetchStudents={props.fetchStudents}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
