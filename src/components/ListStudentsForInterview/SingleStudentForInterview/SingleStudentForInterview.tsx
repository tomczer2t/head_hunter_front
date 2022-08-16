import React, { useState } from 'react';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from '../../ListStudentsForBooking/SingleStudent/SingleStudentDetails/SingleStudentDetails';
import defaultAvatar from '../../../assets/images/default_avatar.jpg';
import { StudentOnInterviewList } from 'types';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import './SingleStudentForInterview.css';

interface Props {
  student: StudentOnInterviewList;
  fetchStudents: () => Promise<void>;
}

export const SingleStudentForInterview = ({
  student,
  fetchStudents,
}: Props) => {
  const [isActive, setActive] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  const handleRemoveFromBooked = async () => {
    const res = await axiosPrivate.delete(`hr/student/${student.userId}`);
    void fetchStudents();
  };

  const handleShowCv = () => {
    navigate(`/hr/interview-students/${student.userId}`);
  };

  const handleHireStudent = async () => {
    const res = await axiosPrivate.patch(`/hr/hire-student/${student.userId}`);
    console.log('hire response: ', res);
  };

  return (
    <>
      <li className="single-student-interview">
        <div className="single-student-interview__reservation_name_wrapper">
          <div className="single-student-interview__reservation-date">
            <div>Rezerwacja do</div>
            <div>{student.bookedUntil}</div>
          </div>
          <img src={defaultAvatar} alt="Zdjęcie kursanta" />
          <div className="single-student-interview__name">
            {student.firstName} {student.lastName}
          </div>
        </div>
        <div className="single-student-interview__small-wrapper">
          <button
            className="single-student-interview__btni"
            onClick={handleShowCv}
          >
            Pokaż CV
          </button>
          <button
            className="single-student-interview__btni"
            onClick={() => void handleRemoveFromBooked()}
          >
            Brak zainteresowania
          </button>
          <button
            className="single-student-interview__btni"
            onClick={() => void handleHireStudent()}
          >
            Zatrudniony
          </button>
          <img
            onClick={hadleClickMoreInfo}
            src={upArrow}
            alt="Pokaż więcej informacji o studencie"
            className={
              isActive
                ? 'single-student-interview__img single-student-interview__img__more-info'
                : 'single-student-interview__img'
            }
          />
        </div>
      </li>
      <li
        className={
          isActive
            ? 'single-student__more-info single-student__more-info--active'
            : 'single-student__more-info'
        }
      >
        <div
          className={
            isActive
              ? 'single-student__details single-student__details--active'
              : 'single-student__details'
          }
        >
          <SingleStudentDetails {...student} isActive={isActive} />
        </div>
      </li>
    </>
  );
};
