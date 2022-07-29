import React, { Dispatch, useEffect, useState } from 'react';
import './FilterStudents.css';

interface Props {
  active: boolean;
  setFilterData: Dispatch<React.SetStateAction<any>>;
}

enum PreferredWorkplace {
  remote = 'remote work',
  office = 'office work',
}

enum TypeOfContract {
  remote = 'remote work',
  office = 'office work',
}

interface FilterParams {
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  preferredWorkplace: PreferredWorkplace;
  typeOfContract: 'Umowa o pracę' | 'B2B' | 'Umowa zlecenie' | 'Umowa o dzielo';
  expectedSalary: number;
  freeInternship: boolean;
  monthsOfWork: number;
}

console.log('is success');
export const FilterStudents = (props: Props) => {
  const [params, setParams] = useState();

  return (
    <div className="filter-students">
      <div className="filter-students__top">
        <h4>Filtrowanie</h4>
        <button>Wyczyść wszystko</button>
      </div>
      <FilterWithStars description={} setEvaluation={} />
      <FilterWithStars description={} setEvaluation={} />
      <FilterWithStars description={} setEvaluation={} />
      <FilterWithStars description={} setEvaluation={} />
    </div>
  );
};
