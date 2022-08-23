import React, { useEffect, useState } from 'react';
import {
  StudentStatus,
  ExpectedWorkType,
  ExpectedContractType,
  SingleStudentProfile,
  CanTakeApprenticeship,
} from 'types';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import { CountrySelect } from './CountrySelect/CountrySelect';
import { axiosPrivate } from '../../api/axiosPlain';
import { AxiosResponse } from 'axios';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';

interface ErrorMessage {
  firstName?: string;
  lastName?: string;
  email?: string;
  tel?: number;
  githubUsername?: string;
  bio?: string;
  projectUrl?: string;
  monthsOfCommercialExp?: string;
  validateCorrect: boolean;
}

export const StudentProfile = () => {
  const [addPortfolioUrls, setAddPortfolioUrls] = useState<string>('');
  const [addProjectUrls, setAddProjectUrls] = useState<string>('');
  const [showMessageResponse, setShowMessageResponse] = useState(false);
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    validateCorrect: false,
  });
  const [studentStatus, setStudentStatus] = useState<StudentStatus>(
    StudentStatus.AVAILABLE,
  );
  const [dataStudent, setDataStudent] = useState<SingleStudentProfile>({
    tel: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [],
    bio: '',
    expectedTypeWork: ExpectedWorkType.NO_PREFERENCES,
    expectedSalary: 0,
    expectedContractType: ExpectedContractType.NO_PREFERENCES,
    canTakeApprenticeship: false,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
    targetWorkCity: '',
    projectUrls: [],
    teamProjectDegree: 0,
    userId: '',
    scrumOwnCommits: '',
    scrumOwnCodeReviews: '',
    projectDegree: 0,
    email: '',
    courseEngagment: 0,
    courseCompletion: 0,
    bonusProjectUrls: [],
    countryCode: '',
  } as SingleStudentProfile);

  const changeData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    if (e.target.type === 'number') {
      setDataStudent((prevState) => ({
        ...prevState,
        [e.target.name]: Number(e.target.value),
      }));
    } else {
      setDataStudent((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validate = (values: SingleStudentProfile): ErrorMessage => {
    const errors: ErrorMessage = {
      validateCorrect: true,
    };

    if (!values.projectUrls?.length) {
      errors.projectUrl = 'To pole jest wymagane';
      errors.validateCorrect = false;
    }

    if (values.monthsOfCommercialExp === null) {
      errors.monthsOfCommercialExp = 'To pole jest wymagane';
      errors.validateCorrect = false;
    }

    if (!values.firstName) {
      errors.firstName = 'To pole jest wymagane';
      errors.validateCorrect = false;
    }

    if (!values.lastName) {
      errors.lastName = 'To pole jest wymagane';
      errors.validateCorrect = false;
    }

    if (!values.githubUsername) {
      errors.githubUsername = 'To pole jest wymagane';
      errors.validateCorrect = false;
    }
    return errors;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    const validObj = validate(dataStudent);
    setErrorMessage(validObj);
    if (validObj.validateCorrect) {
      try {
        //@TODO axios send form data
        console.log(dataStudent);
        const res: AxiosResponse<SingleStudentProfile> =
          await axiosPrivate.patch('student', dataStudent);
        setMessage(() => 'Wormularz zostawł zaktualizowany');
        setShowMessageResponse(() => true);
      } catch (err) {
        setMessage(() => 'Coś poszlo nie tak proszę spróbować później');
        setShowMessageResponse(() => true);
        console.log(err);
      }
    }
  };

  const downloadFormData = async () => {
    try {
      const res: AxiosResponse<SingleStudentProfile> = await axiosPrivate.get(
        'student/cv',
      );
      setDataStudent(() => ({
        ...res.data,
      }));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    void downloadFormData();
  }, []);

  const handleAddPortfolioUrls = () => {
    setDataStudent((prevState) => {
      if (prevState.portfolioUrls === null) {
        return {
          ...prevState,
          portfolioUrls: [addPortfolioUrls],
        };
      } else {
        return {
          ...prevState,
          portfolioUrls: [...dataStudent.portfolioUrls, addPortfolioUrls],
        };
      }
    });
    setAddPortfolioUrls(() => '');
  };

  const handleRemovePortfolioUrls = (link: string) => {
    setDataStudent(() => ({
      ...dataStudent,
      portfolioUrls: dataStudent.portfolioUrls.filter((item) => item !== link),
    }));
  };

  const handleAddProjectUrls = () => {
    setDataStudent((prevState) => {
      if (prevState.projectUrls == null) {
        return {
          ...prevState,
          projectUrls: [addProjectUrls],
        };
      } else {
        return {
          ...prevState,
          projectUrls: [...dataStudent.projectUrls, addProjectUrls],
        };
      }
    });
    setAddProjectUrls(() => '');
  };

  const handleRemoveProjectUrls = (link: string) => {
    setDataStudent(() => ({
      ...dataStudent,
      projectUrls: dataStudent.projectUrls.filter((item) => item !== link),
    }));
  };
  const handleEmployed = async () => {
    if (
      confirm(
        'Jeśli potwierdzisz zatrudnienie nie będziesz miał/miała już dostępu do konta na tej platformie . Czy chcesz potwierdzić zatrudnienie ?',
      )
    ) {
      try {
        const res = await axiosPrivate.patch('student/hire');
        console.log(res.data);
        setStudentStatus(() => StudentStatus.HIRED);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="container">
        <MessageResponse
          message={message}
          showMessageResponse={showMessageResponse}
          closeMessage={setShowMessageResponse}
        />
        <h2>Profil Kursanta</h2>
        <Link className="UserCv__interview-student-link" to="/student">
          widok CV
        </Link>
        <form
          className="container__form"
          onSubmit={(event) => void handleSubmit(event)}
        >
          <div className="form-body">
            <div className="form-col">
              <label htmlFor="firstName">
                Imie: <p>{errorMessage.firstName}</p>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={dataStudent.firstName ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="lastName">
                Nazwisko: <p>{errorMessage.lastName}</p>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={dataStudent.lastName ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="tel">
                Tel: <p>{errorMessage.tel}</p>
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={dataStudent.tel ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="GitHub">
                Konto GitHub: <p>{errorMessage.githubUsername}</p>
              </label>
              <input
                type="text"
                id="GitHub"
                name="githubUsername"
                value={dataStudent.githubUsername ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                rows={4}
                name="bio"
                value={dataStudent.bio ?? ''}
                onChange={(event) => changeData(event)}
              ></textarea>
            </div>
            <div className="form-col">
              <label htmlFor="targetWorkCity">Miasto pracy</label>
              <input
                type="text"
                id="targetWorkCity"
                name="targetWorkCity"
                value={dataStudent.targetWorkCity ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="expectedSalary">
                Oczekiwanie wynagrodzenie netto
              </label>
              <input
                type="number"
                id="expectedSalary"
                name="expectedSalary"
                value={dataStudent.expectedSalary ?? ''}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="expectedTypeWork">
                Preferowane miejsce pracy:
              </label>
              <select
                id="expectedTypeWork"
                name="expectedTypeWork"
                value={dataStudent.expectedTypeWork}
                onChange={(event) => changeData(event)}
              >
                <option value={ExpectedWorkType.NO_PREFERENCES}>
                  {ExpectedWorkType.NO_PREFERENCES}
                </option>
                <option value={ExpectedWorkType.ON_SITE}>
                  {ExpectedWorkType.ON_SITE}
                </option>
                <option value={ExpectedWorkType.READY_TO_MOVE}>
                  {ExpectedWorkType.READY_TO_MOVE}
                </option>
                <option value={ExpectedWorkType.ONLY_REMOTE}>
                  {ExpectedWorkType.ONLY_REMOTE}
                </option>
                <option value={ExpectedWorkType.HYBRID}>
                  {ExpectedWorkType.HYBRID}
                </option>
              </select>

              <label htmlFor="expectedContractType">
                Oczekiwany typ kontraktu:
              </label>
              <select
                id="expectedContractType"
                name="expectedContractType"
                value={dataStudent.expectedContractType}
                onChange={(event) => changeData(event)}
              >
                <option value={ExpectedContractType.NO_PREFERENCES}>
                  {ExpectedContractType.NO_PREFERENCES}
                </option>
                <option value={ExpectedContractType.EMPLOYMENT}>
                  {ExpectedContractType.EMPLOYMENT}
                </option>
                <option value={ExpectedContractType.B2B}>
                  {ExpectedContractType.B2B}
                </option>
                <option value={ExpectedContractType.MANDATE_OR_WORK}>
                  {ExpectedContractType.MANDATE_OR_WORK}
                </option>
              </select>

              <label htmlFor="monthsOfCommercialExp">
                Ilość miesięcy doświadczenia komercyjnego
                <p>{errorMessage.monthsOfCommercialExp}</p>
              </label>
              <input
                type="number"
                id="monthsOfCommercialExp"
                name="monthsOfCommercialExp"
                value={dataStudent.monthsOfCommercialExp ?? ''}
                onChange={(event) => changeData(event)}
              />

              <div className="form-url">
                <label htmlFor="portfolioUrls">URL do portfolio</label>
                <input
                  type="text"
                  id="portfolioUrls"
                  value={addPortfolioUrls ?? ''}
                  onChange={(e) => setAddPortfolioUrls(e.target.value)}
                />
                <button
                  type="button"
                  className="url-bnt"
                  onClick={() => handleAddPortfolioUrls()}
                >
                  Dodaj
                </button>
                <div className="url-list">
                  {dataStudent.portfolioUrls === null ||
                  dataStudent.portfolioUrls === undefined ||
                  dataStudent?.portfolioUrls?.length === 0
                    ? ''
                    : dataStudent.portfolioUrls.map((link, index) => (
                        <p key={index} style={{ padding: '6px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              handleRemovePortfolioUrls(link);
                            }}
                            className="button_x"
                          >
                            X
                          </button>
                          {link}
                        </p>
                      ))}
                </div>
              </div>
            </div>
            <div className="form-col">
              <label htmlFor="canTakeApprenticeship">
                Zgoda na odbycie bezpłatnych praktyk:
              </label>
              <select
                id="canTakeApprenticeship"
                name="canTakeApprenticeship"
                value={String(dataStudent.canTakeApprenticeship)}
                onChange={(event) => changeData(event)}
              >
                <option value={CanTakeApprenticeship.YES}>TAK</option>
                <option value={CanTakeApprenticeship.NO}>NIE</option>
              </select>

              <label htmlFor="workExperience">
                Przebieg doświadczenia zawodowego:
              </label>
              <textarea
                id="workExperience"
                rows={3}
                name="workExperience"
                value={dataStudent.workExperience ?? ''}
                onChange={(event) => changeData(event)}
              ></textarea>

              <label htmlFor="education">Przebieg edukacji:</label>
              <textarea
                id="education"
                rows={3}
                name="education"
                value={dataStudent.education ?? ''}
                onChange={(event) => changeData(event)}
              ></textarea>

              <label htmlFor="countryCode">Kraj w któreym meiszkasz:</label>

              <CountrySelect
                id="countryCode"
                name="countryCode"
                value={dataStudent.countryCode}
                changeHandler={changeData}
              />

              <div className="form-url">
                <label htmlFor="projectUrls">
                  URL do porojektu zaliczeniowego na GitHub
                  <p>{errorMessage.projectUrl}</p>
                </label>
                <input
                  type="text"
                  id="projectUrls"
                  value={addProjectUrls}
                  onChange={(e) => setAddProjectUrls(e.target.value)}
                />
                <button
                  type="button"
                  className="url-bnt"
                  onClick={() => handleAddProjectUrls()}
                >
                  Dodaj
                </button>
                <div className="url-list">
                  {dataStudent.projectUrls === null ||
                  dataStudent.projectUrls === undefined ||
                  dataStudent?.projectUrls?.length === 0
                    ? ''
                    : dataStudent.projectUrls.map((link, index) => (
                        <p key={index} style={{ padding: '6px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              handleRemoveProjectUrls(link);
                            }}
                            className="button_x"
                          >
                            X
                          </button>
                          {link}
                        </p>
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container__box-helper">
            <button type="submit" className="submitBnt">
              Wyślij
            </button>
            <button
              type="button"
              onClick={() => void handleEmployed()}
              className={
                studentStatus
                  ? 'submitBnt yesEmployedBnt'
                  : 'submitBnt noEmployedBnt'
              }
            >
              Jestem zatrudniony
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
