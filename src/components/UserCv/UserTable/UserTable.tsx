import React from 'react';
import { UserTableHeader } from './UserTableHeader/UserTableHeader';
import { DegreeElement } from './DegreeElement/DegreeElement';
import { Expectation } from './ExpectationElement/ExpectationElement';
import { TextDescription } from './TextDescription/TextDescription';

import './UserTable.css';

export const UserTable = () => {
  return (
    <div className="UserTable">
      <UserTableHeader title="Oceny" />
      <div className="UserTable__container">
        <DegreeElement title="Ocena przejścia kursu" stars={5} />
        <DegreeElement
          title="Ocena aktywności i zaangażowania na kursie"
          stars={3}
        />
        <DegreeElement title="Ocena kodu w projekcie własnym" stars={4} />
        <DegreeElement title="Ocena pracy w zespole w Scrum" stars={5} />
      </div>
      <UserTableHeader title="Oczekiwanie w stosunku do zatrudnienia" />
      <div className="UserTable__container">
        <Expectation title="Preferowane miejsce pracy" value="Biuro" />
        <Expectation
          title="Docelowe miasto, gdzie chce pracować kandydat"
          value="Warszawa"
        />
        <Expectation title="Oczekiwany typ kontraktu" value="Umowa o pracę" />
        <Expectation
          title="Oczekiwane wynagrodzenie miesięczne netto"
          value="8000 zł"
        />
        <Expectation
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          value="TAK"
        />
        <Expectation
          title="Komercyjne doświadczenie w programowaniu"
          value="6 miesięcy"
        />
      </div>
      <UserTableHeader title="Edukacja" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
      <UserTableHeader title="Kursy" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
      <UserTableHeader title="Doświadczenie zawodowe" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
      <UserTableHeader title="Portfolio" />
      <UserTableHeader title="Projekt w zespole Scrumowym" />
      <UserTableHeader title="Projekt na zaliczenie" />
    </div>
  );
};
