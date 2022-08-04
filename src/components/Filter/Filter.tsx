import React, { useEffect, useState } from 'react';
import './Filter.css';
import starRed from '../../assets/images/star-red.svg';
import starWhite from '../../assets/images/star-white.svg';
import { BtnStar, StarNames } from './BtnStar/BtnStar';

export interface FiltState {
  courseCompletion: boolean[]; //5,4,3,2,1
  courseEngagment: boolean[]; //5,4,3,2,1
  projectDegree: boolean[]; //5,4,3,2,1
  teamProjectDegree: boolean[]; //5,4,3,2,1
  expectedTypeWork: boolean[]; // zdalna, w biurze
  targetWorkCity: string;
  expectedContractType: boolean[]; //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
  expectedSalary: (null | number)[]; //kwota od, do
  canTakeApprenticeship: null | boolean; //false nie, true tak
  monthsOfCommercialExp: null | number;
}

export const Filter = () => {
  const [filterState, setFilterState] = useState<FiltState>({
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
  });

  const handleStateChenge = (s: FiltState): void => {
    setFilterState(s);
    console.log(s);
  };

  return (
    <>
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
            <button className="filter-popup--btn">Praca zdalna</button>
            <button className="filter-popup--btn">Praca w biurze</button>
          </div>
        </section>
        <section className="filter-popup">
          <h3>Oczekiwany typ kontraktu</h3>
          <button className="filter-popup--btn">Umowa o pracę</button>
          <button className="filter-popup--btn">B2B</button>
          <button className="filter-popup--btn">Umowa zlecenie</button>
          <button className="filter-popup--btn">Umowa o dzieło</button>
        </section>
        <section className="filter-popup">
          <h3>Oczekiwane wynagrodzenie miesięczne netto</h3>
          <label htmlFor="filter-salary-from">Od </label>
          <input
            id="filter-salary-from"
            type="number"
            placeholder="np. 1000 zł"
          />
          <label htmlFor="filter-salary-to">Do </label>
          <input
            id="filter-salary-to"
            type="number"
            placeholder="np. 10000 zł"
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
          />
        </section>
        <section className="filter-popup__end">
          <button className="filter-popup--cancel-btn">Anuluj</button>
          <button className="filter-popup--submit-btn">Pokaż wyniki</button>
        </section>
      </div>
    </>
  );
};
