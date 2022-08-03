import React, { FormEvent, useState } from 'react';
import { ExpectedContractType, ExpectedWorkType } from 'types';
import './UserProfileForm.css';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

interface StudentProfile {
  tel?: number | null;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: Array<string> | [];
  projectUrls: Array<string> | [];
  bio: string;
  expectedTypeWork: ExpectedWorkType;
  targetWorkCity: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
}

export const UserProfileForm = () => {
  const [studentFormData, setStudentFormData] = useState<StudentProfile>({
    tel: null,
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [''],
    bio: '',
    expectedTypeWork: ExpectedWorkType.NO_PREFERENCES,
    expectedSalary: 0,
    expectedContractType: ExpectedContractType.NO_PREFERENCES,
    canTakeApprenticeship: 0,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
    targetWorkCity: '',
    projectUrls: [''],
  });

  const axiosPrivate = useAxiosPrivate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setStudentFormData((loginParams: StudentProfile) => ({
      ...loginParams,
      [e.target.name]: e.target.value,
    }));
  };

  const arrChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setStudentFormData((loginParams: StudentProfile) => ({
      ...loginParams,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleBooleanChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setStudentFormData((loginParams: StudentProfile) => ({
      ...loginParams,
      [e.target.name]: !!e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ studentFormData });
    try {
      await axiosPrivate.patch('student', studentFormData);
    } catch (err) {
      console.log('Coś poszło nie tak: ', err);
    }
  };

  return (
    <div className="UserProfileForm">
      <form
        className="UserProfileForm__form"
        onSubmit={(e) => void handleSubmit(e)}
      >
        <input
          className="UserProfileForm__form-field"
          name="firstName"
          value={studentFormData.firstName}
          type="text"
          onChange={handleChange}
          placeholder="imię"
        />
        <input
          className="UserProfileForm__form-field"
          name="lastName"
          value={studentFormData.lastName}
          type="text"
          onChange={handleChange}
          placeholder="nazwisko"
        />

        <input
          className="UserProfileForm__form-field"
          name="githubUsername"
          value={studentFormData.githubUsername}
          type="text"
          onChange={handleChange}
          placeholder="login github"
        />

        <input
          className="UserProfileForm__form-field"
          name="projectUrls"
          value={studentFormData.projectUrls}
          type="text"
          onChange={arrChange}
          placeholder="URL do projektu na github"
        />

        <label className="UserProfileForm__field-label">
          Preferowane miesjce pracy:
          <select
            name="exptectedTypeWorkd"
            className="UserProfileForm__form-field"
            onChange={handleChange}
            value={studentFormData.expectedTypeWork}
          >
            <option value={ExpectedWorkType.NO_PREFERENCES}>
              Brak preferencji
            </option>
            <option value={ExpectedWorkType.ON_SITE}>Na miejscu</option>
            <option value={ExpectedWorkType.ONLY_REMOTE}>
              Wyłącznie zdalnie
            </option>
            <option value={ExpectedWorkType.READY_TO_MOVE}>
              Gotowość do przeprowadzki
            </option>
            {/* W expectedWorkType brakuje opcji Hybrid */}
            <option value={ExpectedWorkType.ON_SITE}>Hybrydowo</option>
          </select>
        </label>

        <label>
          Czy jesteś skłonny odbyć darmowe praktyki lub darmowy staż na
          początek?
          <select
            name="canTakeApprenticeship"
            className="UserProfileForm__form-field"
            onChange={handleBooleanChange}
            value={studentFormData.canTakeApprenticeship}
          >
            <option value={1}>Tak</option>
            <option value={0}>Nie</option>
          </select>
        </label>

        <label className="UserProfileForm__field-label">
          Oczekiwane miesięczne wynagrodzenie:
          <input
            className="UserProfileForm__form-field"
            name="expectedSalary"
            value={studentFormData.expectedSalary}
            type="number"
            min={0}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Aktualizuj profil</button>
      </form>
    </div>
  );
};
//
// "firstName": "Tomasz",
//   "lastName": "Czerwiński",
//   "githubUsername": "tomczer2t",
//   "projectUrls": ["https://github.com/tomczer2t/head_hunter_back/branches/active"],
//   "expectedTypeWork": "Dowolna",
//   "canTakeApprenticeship": true,
//   "monthsOfCommercialExp": 0,
//   "expectedContractType": "Dowolna"
