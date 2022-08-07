import React, { ChangeEvent, useEffect, useState } from 'react';
import './Filter.css';
import { BtnStar } from './BtnStar/BtnStar';
import { FiltState, HrAllStudentsRequest, StarNames } from '../../types/hr/hr';

export const Filter = ({
  setActiveFilter,
  dataToAxiosForListOfStudents,
  setDataToAxiosForListOfStudents,
}: {
  setActiveFilter: React.Dispatch<React.SetStateAction<boolean>>;
  dataToAxiosForListOfStudents: HrAllStudentsRequest;
  setDataToAxiosForListOfStudents: React.Dispatch<
    React.SetStateAction<HrAllStudentsRequest>
  >;
}) => {
  const clearStatus = {
    filterCourseCompletion: [false, false, false, false, false], //5,4,3,2,1
    filterCourseEngagement: [false, false, false, false, false], //5,4,3,2,1
    filterProjectDegree: [false, false, false, false, false], //5,4,3,2,1
    filterTeamProjectDegree: [false, false, false, false, false], //5,4,3,2,1
    filterExpectedTypeWork: [false, false], // zdalna, w biurze
    filterExpectedContractType: [false, false, false, false], //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
    filterExpectedSalaryFrom: null, //kwota od,
    filterExpectedSalaryUpTo: null, //kwota  do
    filterCanTakeApprenticeship: null, //false nie, true tak
    filterMonthsOfCommercialExp: null, // liczba
  } as FiltState;

  const [filterState, setFilterState] = useState<FiltState>(clearStatus);

  const clearAll = () => {
    setFilterState(clearStatus);
  };
  const handleStateChenge = (s: FiltState): void => {
    console.log(s);
    setFilterState(s);
  };
  return (
    <>
      <div className="filter-popup__back-wrapper"></div>
      <div className="filter-popup__wrapper">
        <section className="filter-popup__s1">
          <h2 className="filter-popup__title">Filtrowanie</h2>
          <button className="filter-popup--clear-all-btn" onClick={clearAll}>
            Wyczyść wszystkie
          </button>
        </section>
        <section className="filter-popup">
          <h3>Ocena przejścia kursu</h3>
          <div>
            <BtnStar
              nameVar={StarNames.V1}
              filterState={filterState}
              handleStat={(s: FiltState): void => handleStateChenge(s)}
            />
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena aktywności i zaangażowania na kursie</h3>
          <div>
            <BtnStar
              nameVar={StarNames.V2}
              filterState={filterState}
              handleStat={(s: FiltState) => handleStateChenge(s)}
            />
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena kodu w projekcie własnym</h3>
          <div>
            <BtnStar
              nameVar={StarNames.V3}
              filterState={filterState}
              handleStat={(s: FiltState) => handleStateChenge(s)}
            />
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena pracy w zespole w Scrum</h3>
          <div>
            <BtnStar
              nameVar={StarNames.V4}
              filterState={filterState}
              handleStat={(s: FiltState) => handleStateChenge(s)}
            />
          </div>
        </section>
        <section className="filter-popup">
          <h3>Preferowane miejsce pracy</h3>
          <div>
            <button
              className={
                filterState.filterExpectedTypeWork !== null
                  ? filterState.filterExpectedTypeWork[0]
                    ? 'filter-popup--btn filter-popup--btn--active'
                    : 'filter-popup--btn'
                  : 'filter-popup--btn'
              }
              onClick={() => {
                const newState = JSON.parse(
                  JSON.stringify(filterState),
                ) as FiltState;
                if (newState.filterExpectedTypeWork !== null) {
                  newState.filterExpectedTypeWork[0] =
                    !newState.filterExpectedTypeWork[0];
                } else {
                  newState.filterExpectedTypeWork = [true, false];
                }
                setFilterState(newState);
              }}
            >
              Praca zdalna
            </button>
            <button
              className={
                filterState.filterExpectedTypeWork !== null
                  ? filterState.filterExpectedTypeWork[1]
                    ? 'filter-popup--btn filter-popup--btn--active'
                    : 'filter-popup--btn'
                  : 'filter-popup--btn'
              }
              onClick={() => {
                const newState = JSON.parse(
                  JSON.stringify(filterState),
                ) as FiltState;
                if (newState.filterExpectedTypeWork !== null) {
                  newState.filterExpectedTypeWork[1] =
                    !newState.filterExpectedTypeWork[1];
                } else {
                  newState.filterExpectedTypeWork = [false, true];
                }
                setFilterState(newState);
              }}
            >
              Praca w biurze
            </button>
          </div>
        </section>
        <section className="filter-popup">
          <h3>Oczekiwany typ kontraktu</h3>
          <button
            className={
              filterState.filterExpectedContractType !== null
                ? filterState.filterExpectedContractType[0]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;

              if (newState.filterExpectedContractType !== null) {
                newState.filterExpectedContractType[0] =
                  !newState.filterExpectedContractType[0];
              } else {
                newState.filterExpectedContractType = [
                  true,
                  false,
                  false,
                  false,
                ];
              }
              setFilterState(newState);
            }}
          >
            Umowa o pracę
          </button>
          <button
            className={
              filterState.filterExpectedContractType !== null
                ? filterState.filterExpectedContractType[1]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              if (newState.filterExpectedContractType !== null) {
                newState.filterExpectedContractType[1] =
                  !newState.filterExpectedContractType[1];
              } else {
                newState.filterExpectedContractType = [
                  true,
                  false,
                  false,
                  false,
                ];
              }
              setFilterState(newState);
            }}
          >
            B2B
          </button>
          <button
            className={
              filterState.filterExpectedContractType !== null
                ? filterState.filterExpectedContractType[2]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              if (newState.filterExpectedContractType !== null) {
                newState.filterExpectedContractType[2] =
                  !newState.filterExpectedContractType[2];
              } else {
                newState.filterExpectedContractType = [
                  true,
                  false,
                  false,
                  false,
                ];
              }
              setFilterState(newState);
            }}
          >
            Umowa zlecenie
          </button>
          <button
            className={
              filterState.filterExpectedContractType !== null
                ? filterState.filterExpectedContractType[3]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              if (newState.filterExpectedContractType !== null) {
                newState.filterExpectedContractType[3] =
                  !newState.filterExpectedContractType[3];
              } else {
                newState.filterExpectedContractType = [
                  true,
                  false,
                  false,
                  false,
                ];
              }
              setFilterState(newState);
            }}
          >
            Umowa o dzieło
          </button>
        </section>
        <section className="filter-popup">
          <h3>Oczekiwane wynagrodzenie miesięczne netto</h3>
          <label htmlFor="filter-salary-from">Od </label>
          <input
            id="filter-salary-from"
            type="number"
            placeholder="np. 1000 zł"
            value={
              Number(filterState.filterExpectedSalaryFrom) === 0
                ? ''
                : Number(filterState.filterExpectedSalaryFrom)
            }
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.filterExpectedSalaryFrom =
                Number(e.target.value) === 0 ? null : Number(e.target.value);
              setFilterState(newState);
            }}
          />
          <label htmlFor="filter-salary-to">Do </label>
          <input
            id="filter-salary-to"
            type="number"
            placeholder="np. 10000 zł"
            value={
              Number(filterState.filterExpectedSalaryUpTo) === 0
                ? ''
                : Number(filterState.filterExpectedSalaryUpTo)
            }
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.filterExpectedSalaryUpTo =
                Number(e.target.value) === 0 ? null : Number(e.target.value);
              setFilterState(newState);
            }}
          />
        </section>
        <section className="filter-popup">
          <h3>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
          <div>
            <div>
              <input
                className="filter-popup--radio-input"
                type="radio"
                id="yes"
                name="filterCanTakeApprenticeship"
                value="yes"
                checked={filterState.filterCanTakeApprenticeship === true}
                onChange={(e) => {
                  const newState = JSON.parse(
                    JSON.stringify(filterState),
                  ) as FiltState;
                  newState.filterCanTakeApprenticeship =
                    e.target.value === 'yes';
                  setFilterState(newState);
                }}
              />
              <label htmlFor="yes"></label>
              <label htmlFor="yes">Tak</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="filterCanTakeApprenticeship"
                value="no"
                checked={filterState.filterCanTakeApprenticeship === false}
                onChange={(e) => {
                  const newState = JSON.parse(
                    JSON.stringify(filterState),
                  ) as FiltState;
                  newState.filterCanTakeApprenticeship =
                    e.target.value !== 'no';
                  setFilterState(newState);
                }}
              />
              <label htmlFor="no"></label>
              <label htmlFor="no">Nie</label>
            </div>
          </div>
        </section>
        <section className="filter-popup">
          <h3>
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </h3>
          <input
            type="number"
            name="filterMonthsOfCommercialExp"
            placeholder="0 miesięcy"
            value={
              Number(filterState.filterMonthsOfCommercialExp) === 0
                ? ''
                : Number(filterState.filterMonthsOfCommercialExp)
            }
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.filterMonthsOfCommercialExp =
                Number(e.target.value) === 0 ? null : Number(e.target.value);
              setFilterState(newState);
            }}
          />
        </section>
        <section className="filter-popup__end">
          <button
            className="filter-popup--cancel-btn"
            onClick={() => setActiveFilter(false)}
          >
            Anuluj
          </button>
          <button
            className="filter-popup--submit-btn"
            onClick={() => {
              console.log('aaa');
              //@Todo co ma być po Pokaż wyniki
            }}
          >
            Pokaż wyniki
          </button>
        </section>
      </div>
    </>
  );
};
