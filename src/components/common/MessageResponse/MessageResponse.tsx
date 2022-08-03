import React, { Dispatch, useEffect } from 'react';
import './MessageResponse.css';

// {
//   "failedFor": [],
//   "updatedFor": [
//   "example@zaqw.pl",
//   "jakj2st@o2.pl",
//   "coZt@gmail.com",
//   "trzeci@gmail.com",
//   "jakisziom@gmail.com"
// ],
//   "failedCount": 0,
//   "message": "Successfully imported and registered 5 students out of a possible 5.",
//   "successfullyUpdated": 5,
//   "successfullyAdded": 0
// }

interface Props {
  status?: string;
  showMessageResponse: boolean;
  closeMessage: Dispatch<React.SetStateAction<boolean>>;
  correct: boolean;
  message: string;
}

export const MessageResponse = (props: Props) => {
  useEffect(() => {}, [props.correct]);

  if (!props.showMessageResponse) return null;

  return (
    <div className="message-response__blur">
      <div
        className={`message-response ${
          props.correct
            ? 'message-response--correct'
            : 'message-response--incorrect'
        }`}
      >
        <p className="message-response__status">{props.status}</p>
        <p className="message-response__message">{props.message}</p>
        <button
          className="message-response__close-message"
          onClick={() => {
            props.closeMessage(() => false);
          }}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};
