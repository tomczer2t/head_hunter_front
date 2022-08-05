import { useState } from 'react';

interface StudentProfile {
  name: string;
}

export const StudentProfile = () => {
  const [name, setName] = useState<StudentProfile>('');

  function handleSubmit(e): any {
    e.preventDefault();
    const objStudentProfile = { name };
  }

  return (
    <>
      <div className="container">
        <h2>
          Profil Kursanta
          <img
            src="https://avatars.githubusercontent.com/u/26481499?v=4"
            alt=""
          />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-col">
              <label>
                Imie: <p>bład</p>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Nazwisko:</label>
              <input type="text" required />

              <label>Email:</label>
              <input type="email" required />

              <label>Tel:</label>
              <input type="number" />

              <label>Konto GitHub:</label>
              <input type="text" />

              <label>Bio:</label>
              <textarea></textarea>
            </div>
            <div className="form-col">
              <label>Miasto pracy</label>
              <input type="text" />

              <label>Oczekiwanie wynagrodzenie netto</label>
              <input type="number" />

              <label>Preferowane miejsce pracy:</label>
              <select>
                <option value="jeden">Na miejscu</option>
                <option value="dwa">Gotowość do przeprowadzki</option>
                <option value="dwa">Wyłącznie zdalnie</option>
                <option value="dwa" selected>
                  Bez znaczenia
                </option>
              </select>

              <label>Oczekiwany typ kontraktu:</label>
              <select>
                <option value="jeden">Tylki UoP</option>
                <option value="dwa">Możliwość B2B</option>
                <option value="dwa">Możliwość UZ/UoP</option>
                <option value="dwa" selected>
                  Brak preferencji
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
                <option value="dwa" selected>
                  Nie
                </option>
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
