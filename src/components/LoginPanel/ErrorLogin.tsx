import './ErrorLogin.css';

export const ErrorLogin = ({ statusCode }: { statusCode: number }) => {
  let ErrorMessage = null;
  if (statusCode > 299) {
    ErrorMessage = 'nieprawidłowy login lub hasło';
  }
  return (
    <>
      <div className="login-panel__error-info">{ErrorMessage}</div>
    </>
  );
};
