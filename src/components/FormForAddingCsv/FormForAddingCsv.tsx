import React, { useEffect, useState } from 'react';
import './FormForAddingCsv.css';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';
import axiosDefault, { AxiosResponse } from 'axios';
import { AddStudentsResponse } from 'types';

export const FormForAddingCsv = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [showMessageResponse, setShowMessageResponse] = useState(false);

  const [selectedFile, setSelectedFile] = useState<FormData>({} as FormData);

  const sendForm = async () => {
    if (selectedFile) {
      const res: AxiosResponse<AddStudentsResponse> = await axiosDefault.post(
        '/admin/import-students',
        {
          students: selectedFile,
        },
      );
      console.log(res);
    } else {
      console.log('nie wybrałeś pliku');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files[0]) return setSelectedFile(null);
    const formData = new FormData();
    // console.log(e.target.files[0]);
    // console.log(e.target.files[0].name);
    formData.append('file', e.target.files[0], e.target.files[0].name);

    setSelectedFile(formData);
  };

  return (
    <div className="form-adding-csv">
      <MessageResponse
        showMessageResponse={showMessageResponse}
        status={'Testowy'}
        message={'Opis błedu'}
        correct={false}
        closeMessage={setShowMessageResponse}
      />
      <form onSubmit={void sendForm} className="form-adding-csv__form">
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
