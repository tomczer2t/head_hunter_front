import React, { Dispatch, useEffect } from 'react';
import { AddStudentsResponse } from 'types';
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
  data?: AddStudentsResponse | null;
  showMessageResponse: boolean;
  closeMessage: Dispatch<React.SetStateAction<boolean>>;
}

export const MessageResponse = (props: Props) => {
  useEffect(() => {}, [props.data]);

  if (!props.showMessageResponse) return null;

  const mailsFailed = [];
  const mailsUpdate = [];

  if (props.data) {
    const failedForArray = props.data.failedFor.entries();
    for (let i = 0; i < props.data.failedFor.length; i++) {
      mailsFailed.push(<p>{`${props.data.failedFor[i].email}`}</p>);
    }
    for (let i = 0; i < props.data.updatedFor.length; i++) {
      mailsUpdate.push(<p>{`${props.data.updatedFor[i]}`}</p>);
    }
  }

  return (
    <div className="message-response__blur">
      <div className={`message-response`}>
        <div className="message-response__message">
          <h4>Dodano: {props.data?.successfullyAdded} maili</h4>
          <h4>Niewłaściwe: {props.data?.failedCount} maili</h4>
          {mailsFailed}
        </div>
        <div className="message-response__message">
          <h4>Zaktualizowano: {props.data?.successfullyUpdated} maili</h4>
          {mailsUpdate}
        </div>
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
