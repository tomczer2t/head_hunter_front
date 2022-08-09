import React, { useEffect, useState } from 'react';
import { Input } from './compo/Input';

enum EnumExpectedTypeWork {
  naMiejscu = 'Na miejscu',
  gotowoscDoPrzeprowadzki = 'Gotowość do przeprowadzki',
  wylacznieZdalnie = 'Wyłącznie zdalnie',
  bezZnaczenia = 'Bez znaczenia',
}

enum EnumExpectedContractType {
  tylkoUoP = 'Tylki UoP',
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

interface StudentProfile {
  tel: number | '';
  firstName: string;
  lastName: string;
  email: string;
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
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StudentProfile = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [employed, setEmployed] = useState(false);
  const [addPortfolioUrls, setAddPortfolioUrls] = useState<string>('');
  const [addProjectUrls, setAddProjectUrls] = useState<string>('');
  const [studentAvatar, setStudentAvatar] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});
  const [dataStudent, setDataStudent] = useState<StudentProfile>({
    tel: '',
    firstName: '',
    lastName: '',
    email: '',
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
  });

  const changeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    if (e.target.type === 'number') {
      setDataStudent((dataStudent) => ({
        ...dataStudent,
        [e.target.name]: Number(e.target.value),
      }));
    } else {
      setDataStudent((dataStudent) => ({
        ...dataStudent,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validate = async (values: StudentProfile): Promise<ErrorMessage> => {
    const errors: ErrorMessage = {};
    if (!values.firstName) {
      errors.firstName = 'To pole jest wymagane';
    }

    if (!values.lastName) {
      errors.lastName = 'To pole jest wymagane';
    }

    if (!values.email) {
      errors.email = 'To pole jest wymagane';
    }
    if (!values.email.includes('@')) {
      errors.email = 'Podany adres nie zawiera @';
    }

    if (values.githubUsername) {
      const url = `https://api.github.com/users/${values.githubUsername}`;

      const res = await fetch(url);
      if (!res.ok) {
        errors.githubUsername = 'Konto jest niepoprawde';
      } else {
        const data = await res.json();
        setStudentAvatar(data.avatar_url);
        console.log('awatar', studentAvatar);
      }
    } else if (!values.githubUsername) {
      errors.githubUsername = 'To pole jes wymagane';
    }
    console.log('erroes', errors);
    return errors;
  };

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setErrorMessage(await validate(dataStudent));
    console.log('errorMessage', errorMessage);
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(errorMessage).length === 0 && isSubmit) {
      console.log(dataStudent);
    }
  }, [errorMessage]);

  const handleAddPortfolioUrls = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // setDataStudent([...url2, url]);
    setDataStudent((dataStudent) => ({
      ...dataStudent,
      portfolioUrls: [...dataStudent.portfolioUrls, addPortfolioUrls],
    }));
    console.log(dataStudent);
  };

  const handleRemovePortfolioUrls = (link: string) => {
    setDataStudent((dataStudent) => ({
      ...dataStudent,
      portfolioUrls: dataStudent.portfolioUrls.filter((item) => item !== link),
    }));
  };
  const handleAddProjectUrls = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // setDataStudent([...url2, url]);
    setDataStudent((dataStudent) => ({
      ...dataStudent,
      projectUrls: [...dataStudent.projectUrls, addProjectUrls],
    }));
    console.log(dataStudent);
  };

  const handleRemoveProjectUrls = (link: string) => {
    setDataStudent((dataStudent) => ({
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
        <img src={studentAvatar} alt="" />
        <h2>Profil Kursanta</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-col">
              <Input
                name="firstName"
                errorMessage={errorMessage.firstName}
                value={dataStudent.firstName}
                changeData={changeData}
              />
              {/*<label htmlFor="firstName">*/}
              {/*  Imie: <p>{errorMessage.firstName}</p>*/}
              {/*</label>*/}
              {/*<input*/}
              {/*  type="text"*/}
              {/*  id="firstName"*/}
              {/*  name="firstName"*/}
              {/*  value={dataStudent.firstName}*/}
              {/*  onChange={changeData}*/}
              {/*/>*/}

              <label htmlFor="lastName">
                Nazwisko: <p>{errorMessage.lastName}</p>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={dataStudent.lastName}
                onChange={changeData}
              />

              <label htmlFor="email">
                Email: <p>{errorMessage.email}</p>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={dataStudent.email}
                onChange={changeData}
              />

              <label htmlFor="tel">
                Tel: <p>{errorMessage.tel}</p>
              </label>
              <input
                type="number"
                id="tel"
                name="tel"
                value={dataStudent.tel}
                onChange={changeData}
              />

              <label htmlFor="GitHub">
                Konto GitHub: <p>{errorMessage.githubUsername}</p>
              </label>
              <input
                type="text"
                id="GitHub"
                name="githubUsername"
                value={dataStudent.githubUsername}
                onChange={changeData}
              />

              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                value={dataStudent.bio}
                onChange={changeData}
              ></textarea>
            </div>
            <div className="form-col">
              <label htmlFor="targetWorkCity">Miasto pracy</label>
              <input
                type="text"
                id="targetWorkCity"
                name="targetWorkCity"
                value={dataStudent.targetWorkCity}
                onChange={changeData}
              />

              <label htmlFor="expectedSalary">
                Oczekiwanie wynagrodzenie netto
              </label>
              <input
                type="number"
                id="expectedSalary"
                name="expectedSalary"
                value={dataStudent.expectedSalary}
                onChange={changeData}
              />

              <label htmlFor="expectedTypeWork">
                Preferowane miejsce pracy:
              </label>
              <select
                id="expectedTypeWork"
                name="expectedTypeWork"
                value={dataStudent.expectedTypeWork}
                onChange={changeData}
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
                onChange={changeData}
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
                onChange={changeData}
              />

              <label htmlFor="education">Przebieg edukacji:</label>
              <textarea
                id="education"
                name="education"
                value={dataStudent.education}
                onChange={changeData}
              ></textarea>
            </div>
            <div className="form-col">
              <label htmlFor="canTakeApprenticeship">
                Zgoda na odbycie bezpłatnych praktyk:
              </label>
              <select
                id="canTakeApprenticeship"
                name="canTakeApprenticeship"
                value={dataStudent.canTakeApprenticeship}
                onChange={changeData}
              >
                <option value={EnumCanTakeApprenticeship.tak}>
                  {EnumCanTakeApprenticeship.tak}
                </option>
                <option value={EnumCanTakeApprenticeship.nie}>
                  {EnumCanTakeApprenticeship.nie}
                </option>
              </select>

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
                  onClick={handleAddPortfolioUrls}
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
                  onClick={handleAddProjectUrls}
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

              <label htmlFor="workExperience">
                Przebieg doświadczenia zawodowego:
              </label>
              <textarea
                id="workExperience"
                name="workExperience"
                value={dataStudent.workExperience}
                onChange={changeData}
              ></textarea>

              <label htmlFor="courses">
                Kursy i certyfikaty związane z programowanie:
              </label>
              <textarea
                id="courses"
                name="courses"
                value={dataStudent.courses}
                onChange={changeData}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="submitBnt">
            Wyślij
          </button>
          <button
            type="button"
            onClick={handleEmployed}
            className={
              employed ? 'submitBnt yesEmployedBnt' : 'submitBnt noEmployedBnt'
            }
          >
            Jestem zatrudniony
          </button>
        </form>
      </div>
    </>
  );
};
