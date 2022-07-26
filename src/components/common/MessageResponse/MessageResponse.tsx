import React, { Dispatch, useEffect } from 'react';
import './MessageResponse.css';

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
