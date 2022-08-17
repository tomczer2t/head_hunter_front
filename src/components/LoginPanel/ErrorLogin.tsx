import './ErrorLogin.css';

export const ErrorLogin = ({ statusCode }: { statusCode: number }) => {
  let ErrorMessage = null;
  if (statusCode == 400) {
    ErrorMessage = 'nieprawidłowy login lub hasło';
  } else if (statusCode == 403) {
    ErrorMessage = 'konto jest nieaktywne';
  }
  return (
    <>
      <div className="login-panel__error-info">{ErrorMessage}</div>
    </>
  );
};
