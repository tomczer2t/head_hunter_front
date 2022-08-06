import React, { useEffect, useState } from 'react';

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
  expectedSalary: number;
  expectedContractType: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
  targetWorkCity: string;
  projectUrls: string[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StudentProfile = () => {
  const [isSubmit, setIsSubmit] = useState(false);
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
    expectedSalary: 0,
    expectedContractType: EnumExpectedContractType.brakPreferencji,
    canTakeApprenticeship: '',
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
    targetWorkCity: '',
    projectUrls: [],
  });

  const changeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setDataStudent((dataStudent) => ({
      ...dataStudent,
      [e.target.name]: e.target.value,
    }));

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
    } else if (!values.email.includes('@')) {
      errors.email = 'Podany adres nie zawiera @';
    }

    if (values.githubUsername) {
      const url = `https://api.github.com/users/${values.githubUsername}`;

      const res = await fetch(url);
      if (!res.ok) {
        errors.githubUsername = 'Login jest niepoprawny';
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

  return (
    <>
      <div className="container">
        <img src={studentAvatar} alt="" />
        <h2>Profil Kursanta</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-col">
              <label htmlFor="firstName">
                Imie: <p>{errorMessage.firstName}</p>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                // required
                value={dataStudent.firstName}
                onChange={changeData}
              />

              <label htmlFor="lastName">
                Nazwisko: <p>{errorMessage.lastName}</p>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // required
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

              <label>Ilość miesięcy doświadczenia komercyjnego</label>
              <input type="number" />

              <label>Przebieg edukacji:</label>
              <textarea></textarea>
            </div>
            <div className="form-col">
              <label>Zgoda na odbycie bezpłatnych praktyk:</label>
              <select>
                <option value="jeden">Tak</option>
                <option value="dwa">Nie</option>
              </select>

              <div className="form-url">
                <label>URL do portfolio</label>
                <input type="text" />
                <button className="url-bnt">Dodaj</button>
                <div className="url-list">
                  <p>url</p>
                  <p>url</p>
                  <p>url</p>
                </div>
              </div>

              <div className="form-url">
                <label>URL do porojektu zaliczeniowego na GitHub</label>
                <input type="text" />
                <button className="url-bnt">Dodaj</button>
                <div className="url-list">
                  <p>url</p>
                  <p>url</p>
                  <p>url</p>
                </div>
              </div>

              <label>Przebieg doświadczenia zawodowego:</label>
              <textarea></textarea>

              <label>Kursy i certyfikaty związane z programowanie:</label>
              <textarea></textarea>
            </div>
          </div>
          <button type="submit" className="subminBnt">
            Wyślij
          </button>
        </form>
      </div>
    </>
  );
};
