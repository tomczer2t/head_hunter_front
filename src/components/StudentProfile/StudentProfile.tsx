import React, { FormEvent, useEffect, useState } from 'react';
import { StudentStatus } from 'types';
import { useAvatar } from '../../hooks/useAvatar';

enum EnumExpectedTypeWork {
  naMiejscu = 'Na miejscu',
  gotowoscDoPrzeprowadzki = 'Gotowość do przeprowadzki',
  wylacznieZdalnie = 'Wyłącznie zdalnie',
  bezZnaczenia = 'Bez znaczenia',
}

enum EnumExpectedContractType {
  tylkoUoP = 'Tylko UoP',
  mozliwoscB2B = 'Możliwość B2B',
  mozliwoscUZUoP = 'Możliwość UZ/UoP',
  brakPreferencji = 'Brak preferencji',
}

enum EnumCanTakeApprenticeship {
  tak = 'Tak',
  nie = 'Nie',
}

interface ErrorMessage {
  firstName?: string;
  lastName?: string;
  email?: string;
  tel?: number;
  githubUsername?: string;
  bio?: string;
}

interface DataStudent {
  tel: number | '';
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string[];
  bio: string;
  expectedTypeWork: string;
  expectedSalary: number | '';
  expectedContractType: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: number | '';
  education: string;
  workExperience: string;
  courses: string;
  targetWorkCity: string;
  projectUrls: string[];
  teamProjectUrls: string[];
  country: string;
}

export const StudentProfile = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [employed, setEmployed] = useState(false);
  const [addPortfolioUrls, setAddPortfolioUrls] = useState<string>('');
  const [addProjectUrls, setAddProjectUrls] = useState<string>('');
  const [addTeamProjectUrls, setAddTeamProjectUrls] = useState<string>('');
  const studentAvatar = useAvatar();

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});
  const [studentStatus, setStudentStatus] = useState<StudentStatus>(
    StudentStatus.AVAILABLE,
  );
  const [dataStudent, setDataStudent] = useState<DataStudent>({
    tel: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [],
    bio: '',
    expectedTypeWork: EnumExpectedTypeWork.bezZnaczenia,
    expectedSalary: '',
    expectedContractType: EnumExpectedContractType.brakPreferencji,
    canTakeApprenticeship: EnumCanTakeApprenticeship.nie,
    monthsOfCommercialExp: '',
    education: '',
    workExperience: '',
    courses: '',
    targetWorkCity: '',
    projectUrls: [],
    teamProjectUrls: [],
    country: '',
  });

  // studentStatus: StudentStatus.HIRED;

  const changeData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    if (e.target.type === 'number') {
      setDataStudent(() => ({
        ...dataStudent,
        [e.target.name]: Number(e.target.value),
      }));
    } else {
      setDataStudent(() => ({
        ...dataStudent,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validate = async (values: DataStudent): Promise<ErrorMessage> => {
    const errors: ErrorMessage = {};
    if (!values.firstName) {
      errors.firstName = 'To pole jest wymagane';
    }

    if (!values.lastName) {
      errors.lastName = 'To pole jest wymagane';
    }

    if (values.githubUsername) {
      if (studentAvatar(values.githubUsername) === '') {
        errors.githubUsername = 'Konto jest niepoprawde';
      }
    } else if (!values.githubUsername) {
      errors.githubUsername = 'To pole jest wymagane';
    }
    return errors;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    setErrorMessage(await validate(dataStudent));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(errorMessage).length === 0 && isSubmit) {
      console.log(dataStudent);
    }
  }, [errorMessage]);

  const handleAddPortfolioUrls = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setDataStudent([...url2, url]);
    setDataStudent(() => ({
      ...dataStudent,
      portfolioUrls: [...dataStudent.portfolioUrls, addPortfolioUrls],
    }));
  };

  const handleRemovePortfolioUrls = (link: string) => {
    setDataStudent(() => ({
      ...dataStudent,
      portfolioUrls: dataStudent.portfolioUrls.filter((item) => item !== link),
    }));
  };
  const handleRemoveTeamProjectUrls = (link: string) => {
    setDataStudent(() => ({
      ...dataStudent,
      teamProjectUrls: dataStudent.teamProjectUrls.filter(
        (item) => item !== link,
      ),
    }));
  };

  const handleAddProjectUrls = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setDataStudent([...url2, url]);
    setDataStudent(() => ({
      ...dataStudent,
      projectUrls: [...dataStudent.projectUrls, addProjectUrls],
    }));
  };
  const handleAddTeamProjectUrls = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setDataStudent([...url2, url]);
    setDataStudent(() => ({
      ...dataStudent,
      teamProjectUrls: [...dataStudent.teamProjectUrls, addTeamProjectUrls],
    }));
  };

  const handleRemoveProjectUrls = (link: string) => {
    setDataStudent(() => ({
      ...dataStudent,
      projectUrls: dataStudent.projectUrls.filter((item) => item !== link),
    }));
  };
  const handleEmployed = () => {
    setEmployed(confirm('Proszę potwierdzić czy jesteś zatrudniony'));
  };

  return (
    <>
      <div className="container">
        <h2>Profil Kursanta</h2>

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
                value={dataStudent.firstName}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="lastName">
                Nazwisko: <p>{errorMessage.lastName}</p>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={dataStudent.lastName}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="tel">
                Tel: <p>{errorMessage.tel}</p>
              </label>
              <input
                type="number"
                id="tel"
                name="tel"
                value={dataStudent.tel}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="GitHub">
                Konto GitHub: <p>{errorMessage.githubUsername}</p>
              </label>
              <input
                type="text"
                id="GitHub"
                name="githubUsername"
                value={dataStudent.githubUsername}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                value={dataStudent.bio}
                onChange={(event) => changeData(event)}
              ></textarea>

              <div className="form-url">
                <label htmlFor="teamProjectUrls">Team Project URL</label>
                <input
                  type="text"
                  id="teamProjectUrls"
                  value={addTeamProjectUrls}
                  onChange={(e) => setAddTeamProjectUrls(e.target.value)}
                />
                <button
                  type="button"
                  className="url-bnt"
                  onClick={(event) => handleAddTeamProjectUrls(event)}
                >
                  Dodaj
                </button>
                <div className="url-list">
                  {dataStudent.teamProjectUrls.length === 0
                    ? ''
                    : dataStudent.teamProjectUrls.map((link, index) => (
                        <p key={index} style={{ padding: '6px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              handleRemoveTeamProjectUrls(link);
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
              <label htmlFor="targetWorkCity">Miasto pracy</label>
              <input
                type="text"
                id="targetWorkCity"
                name="targetWorkCity"
                value={dataStudent.targetWorkCity}
                onChange={(event) => changeData(event)}
              />

              <label htmlFor="expectedSalary">
                Oczekiwanie wynagrodzenie netto
              </label>
              <input
                type="number"
                id="expectedSalary"
                name="expectedSalary"
                value={dataStudent.expectedSalary}
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
                <option value={EnumExpectedTypeWork.naMiejscu}>
                  {EnumExpectedTypeWork.naMiejscu}
                </option>
                <option value={EnumExpectedTypeWork.gotowoscDoPrzeprowadzki}>
                  {EnumExpectedTypeWork.gotowoscDoPrzeprowadzki}
                </option>
                <option value={EnumExpectedTypeWork.wylacznieZdalnie}>
                  {EnumExpectedTypeWork.wylacznieZdalnie}
                </option>
                <option value={EnumExpectedTypeWork.bezZnaczenia}>
                  {EnumExpectedTypeWork.bezZnaczenia}
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
                <option value={EnumExpectedContractType.tylkoUoP}>
                  {EnumExpectedContractType.tylkoUoP}
                </option>
                <option value={EnumExpectedContractType.mozliwoscB2B}>
                  {EnumExpectedContractType.mozliwoscB2B}
                </option>
                <option value={EnumExpectedContractType.mozliwoscUZUoP}>
                  {EnumExpectedContractType.mozliwoscUZUoP}
                </option>
                <option value={EnumExpectedContractType.brakPreferencji}>
                  {EnumExpectedContractType.brakPreferencji}
                </option>
              </select>

              <label htmlFor="monthsOfCommercialExp">
                Ilość miesięcy doświadczenia komercyjnego
              </label>
              <input
                type="number"
                id="monthsOfCommercialExp"
                name="monthsOfCommercialExp"
                value={dataStudent.monthsOfCommercialExp}
                onChange={(event) => changeData(event)}
              />

              <div className="form-url">
                <label htmlFor="portfolioUrls">URL do portfolio</label>
                <input
                  type="text"
                  id="portfolioUrls"
                  value={addPortfolioUrls}
                  onChange={(e) => setAddPortfolioUrls(e.target.value)}
                />
                <button
                  type="button"
                  className="url-bnt"
                  onClick={(event) => handleAddPortfolioUrls(event)}
                >
                  Dodaj
                </button>
                <div className="url-list">
                  {dataStudent.portfolioUrls.length === 0
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
                value={dataStudent.canTakeApprenticeship}
                onChange={(event) => changeData(event)}
              >
                <option value={EnumCanTakeApprenticeship.tak}>
                  {EnumCanTakeApprenticeship.tak}
                </option>
                <option value={EnumCanTakeApprenticeship.nie}>
                  {EnumCanTakeApprenticeship.nie}
                </option>
              </select>

              <label htmlFor="workExperience">
                Przebieg doświadczenia zawodowego:
              </label>
              <textarea
                id="workExperience"
                name="workExperience"
                value={dataStudent.workExperience}
                onChange={(event) => changeData(event)}
              ></textarea>

              <label htmlFor="education">Przebieg edukacji:</label>
              <textarea
                id="education"
                name="education"
                value={dataStudent.education}
                onChange={(event) => changeData(event)}
              ></textarea>

              <label htmlFor="expectedContractType">
                Kraj w któreym meiszkasz:
              </label>
              <select
                id="expectedContractType"
                name="expectedContractType"
                value={dataStudent.expectedContractType}
                onChange={(event) => changeData(event)}
              >
                <option value={'PL'}>{'Polsa'}</option>
                <option value={EnumExpectedContractType.mozliwoscB2B}>
                  {EnumExpectedContractType.mozliwoscB2B}
                </option>
                <option value={EnumExpectedContractType.mozliwoscUZUoP}>
                  {EnumExpectedContractType.mozliwoscUZUoP}
                </option>
                <option value={EnumExpectedContractType.brakPreferencji}>
                  {EnumExpectedContractType.brakPreferencji}
                </option>
              </select>

              <div className="form-url">
                <label htmlFor="projectUrls">
                  URL do porojektu zaliczeniowego na GitHub
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
                  onClick={(event) => handleAddProjectUrls(event)}
                >
                  Dodaj
                </button>
                <div className="url-list">
                  {dataStudent.projectUrls.length === 0
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
              onClick={handleEmployed}
              className={
                employed
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
