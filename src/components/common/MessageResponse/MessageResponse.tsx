import React, { Dispatch, useEffect } from 'react';
import { AddStudentsResponse } from 'types';
import './MessageResponse.css';

interface Props {
  message: string;
  data?: AddStudentsResponse | null;
  showMessageResponse: boolean;
  closeMessage: Dispatch<React.SetStateAction<boolean>>;
}

export const MessageResponse = (props: Props) => {
  useEffect(() => {}, [props.data]);
  if (!props.showMessageResponse) return null;

  let mailsFailed = [];
  let mailsUpdate = [];

  console.log(props.data);

  if (props.data) {
    for (let i = 0; i < props.data.failedFor.length; i++) {
      mailsFailed.push(<p>{`${props.data.failedFor[i].email}`}</p>);
    }
    for (let i = 0; i < props.data.updatedFor.length; i++) {
      mailsUpdate.push(<p>{`${props.data.updatedFor[i]}`}</p>);
    }
  } else {
    mailsFailed = [];
    mailsUpdate = [];
  }

  return (
    <div className="message-response__blur">
      <div
        className={`message-response`}
        style={{ height: `${props.data ? '60vh' : '20vh'}` }}
      >
        <h3>{props.message}</h3>
        {props.data ? (
          <div className={`message-response__box-helper`}>
            <div className="message-response__message">
              <h4>Dodano: {props.data?.successfullyAdded} maili</h4>
            </div>
            <hr />
            <div className="message-response__message">
              <h4>Niewłaściwe: {props.data?.failedCount} maili</h4>
              {mailsFailed}
            </div>
            <hr />
            <div className="message-response__message">
              <h4>Zaktualizowano: {props.data?.successfullyUpdated} maili</h4>
              {mailsUpdate}
            </div>
            <hr />
          </div>
        ) : null}

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
