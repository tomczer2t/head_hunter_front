import React, { useEffect, useState } from 'react';
import './FormForAddingCsv.css';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';
import { AddStudentsResponse } from 'types';
import { AxiosResponse } from 'axios';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

export const FormForAddingCsv = () => {
  const axiosPrivate = useAxiosPrivate();
  const [selectedFile, setSelectedFile] = useState<FormData | null>(null);
  const [showMessageResponse, setShowMessageResponse] = useState(false);
  const [message, setMessage] = useState('');
  const [resData, setResData] = useState<AddStudentsResponse | null>(null);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (selectedFile) {
        const res: AxiosResponse<AddStudentsResponse> = await axiosPrivate.post(
          '/admin/import-students',
          selectedFile,
        );
        setResData(res.data);
        setMessage(() => 'Plik wysłany poprawnie');
        setShowMessageResponse(() => true);
      } else {
        setMessage(() => 'Nie wybrałeś pliku');
        setShowMessageResponse(() => true);
      }
    } catch (err) {
      setResData(null);
      console.log(err);
      setMessage(() => `Coś poszło nie tak na serwerze (sprawdź konsole)`);
      setShowMessageResponse(() => true);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.[0]) return setSelectedFile(null);
    const formData = new FormData();
    formData.append(
      'students',
      event.target.files[0],
      event.target.files[0].name,
    );

    setSelectedFile(formData);
  };

  useEffect(() => {}, [resData]);

  return (
    <div className="form-adding-csv">
      <MessageResponse
        data={resData}
        message={message}
        showMessageResponse={showMessageResponse}
        closeMessage={setShowMessageResponse}
      />
      <form
        onSubmit={(e) => void sendForm(e)}
        className="form-adding-csv__form"
      >
        <h3 className="form-adding-csv__form__title">
          Dodawanie CSV z Kursantami
        </h3>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => handleFileSelect(e)}
        />
        <button type="submit">Wyślij plik CSV</button>
      </form>
    </div>
  );
};
