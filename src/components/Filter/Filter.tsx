import React from 'react';
import './Filter.css';
import starRed from '../../assets/images/star-red.svg';
import starWhite from '../../assets/images/star-white.svg';

export const Filter = () => {
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
            <button className="filter-popup-btn-star">
              5 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              4 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              3 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              2 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              1 <img src={starRed} alt="star" className="star" />
            </button>
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena aktywności i zaangażowania na kursie</h3>
          <div>
            <button className="filter-popup-btn-star">
              5 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              4 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              3 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              2 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              1 <img src={starRed} alt="star" className="star" />
            </button>
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena kodu w projekcie własnym</h3>
          <div>
            <button className="filter-popup-btn-star">
              5 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              4 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              3 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              2 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              1 <img src={starRed} alt="star" className="star" />
            </button>
          </div>
        </section>
        <section className="filter-popup">
          <h3>Ocena pracy w zespole w Scrum</h3>
          <div>
            <button className="filter-popup-btn-star">
              5 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              4 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              3 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              2 <img src={starRed} alt="star" className="star" />
            </button>
            <button className="filter-popup-btn-star">
              1 <img src={starRed} alt="star" className="star" />
            </button>
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
          <button className="filter-popup--btn">Umowa zlecenie</button>
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
            value="no"
            placeholder="0 miesięcy"
          />
        </section>
        <section>
          <button>Anuluj</button>
          <button>Pokaż wyniki</button>
        </section>
      </div>
    </>
  );
};
