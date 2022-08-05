import React, { useEffect, useState } from 'react';
import './Filter.css';
import { BtnStar } from './BtnStar/BtnStar';
import { FiltState, StarNames } from '../../types/hr/hr';

export const Filter = ({
  setActiveFilter,
}: {
  setActiveFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clearStatus = {
    courseCompletion: [false, false, false, false, false], //5,4,3,2,1
    courseEngagment: [false, false, false, false, false], //5,4,3,2,1
    projectDegree: [false, false, false, false, false], //5,4,3,2,1
    teamProjectDegree: [false, false, false, false, false], //5,4,3,2,1
    expectedTypeWork: [false, false], // zdalna, w biurze
    targetWorkCity: '',
    expectedContractType: [false, false, false, false], //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
    expectedSalary: [null, null], //kwota od, do
    canTakeApprenticeship: null, //false nie, true tak
    monthsOfCommercialExp: null, // liczba
  } as FiltState;

  const [filterState, setFilterState] = useState<FiltState>(clearStatus);

  const clearAll = () => {
    setFilterState(clearStatus);
  };

  const handleStateChenge = (s: FiltState): void => {
    setFilterState(s);
  };
  //@Todo aby tło było zaciemnione i nie można było kliknąć innych rzeczy.
  return (
    <>
      <div className="filter-popup__back-wrapper"></div>
      <div className="filter-popup__wrapper">
        <section className="filter-popup__s1">
          <h2 className="filter-popup__title">Filtrowanie</h2>
          <button className="filter-popup--clear-all-btn">
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
                filterState.expectedTypeWork[0]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
              }
              onClick={() => {
                const newState = JSON.parse(
                  JSON.stringify(filterState),
                ) as FiltState;
                newState.expectedTypeWork[0] = !newState.expectedTypeWork[0];
                setFilterState(newState);
              }}
            >
              Praca zdalna
            </button>
            <button
              className={
                filterState.expectedTypeWork[1]
                  ? 'filter-popup--btn filter-popup--btn--active'
                  : 'filter-popup--btn'
              }
              onClick={() => {
                const newState = JSON.parse(
                  JSON.stringify(filterState),
                ) as FiltState;
                newState.expectedTypeWork[1] = !newState.expectedTypeWork[1];
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
              filterState.expectedContractType[0]
                ? 'filter-popup--btn filter-popup--btn--active'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedContractType[0] =
                !newState.expectedContractType[0];
              setFilterState(newState);
            }}
          >
            Umowa o pracę
          </button>
          <button
            className={
              filterState.expectedContractType[1]
                ? 'filter-popup--btn filter-popup--btn--active'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedContractType[1] =
                !newState.expectedContractType[1];
              setFilterState(newState);
            }}
          >
            B2B
          </button>
          <button
            className={
              filterState.expectedContractType[2]
                ? 'filter-popup--btn filter-popup--btn--active'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedContractType[2] =
                !newState.expectedContractType[2];
              setFilterState(newState);
            }}
          >
            Umowa zlecenie
          </button>
          <button
            className={
              filterState.expectedContractType[3]
                ? 'filter-popup--btn filter-popup--btn--active'
                : 'filter-popup--btn'
            }
            onClick={() => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedContractType[3] =
                !newState.expectedContractType[3];
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
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedSalary[0] = Number(e.target.value);
              setFilterState(newState);
            }}
          />
          <label htmlFor="filter-salary-to">Do </label>
          <input
            id="filter-salary-to"
            type="number"
            placeholder="np. 10000 zł"
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.expectedSalary[1] = Number(e.target.value);
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
                onChange={(e) => {
                  const newState = JSON.parse(
                    JSON.stringify(filterState),
                  ) as FiltState;
                  newState.canTakeApprenticeship = e.target.value === 'yes';
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
                onChange={(e) => {
                  const newState = JSON.parse(
                    JSON.stringify(filterState),
                  ) as FiltState;
                  newState.canTakeApprenticeship =
                    e.target.value === 'no' ? false : true;
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
            onChange={(e) => {
              const newState = JSON.parse(
                JSON.stringify(filterState),
              ) as FiltState;
              newState.monthsOfCommercialExp = Number(e.target.value);
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
          <button className="filter-popup--submit-btn">Pokaż wyniki</button>
        </section>
      </div>
    </>
  );
};
