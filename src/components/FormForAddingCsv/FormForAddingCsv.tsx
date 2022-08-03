import React, { useState } from 'react';
import './FormForAddingCsv.css';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';
import { AddStudentsResponse } from 'types';
import { AxiosResponse } from 'axios';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';
import { axios } from '../../api/axios';

export const FormForAddingCsv = () => {
  // const axiosPrivate = useAxiosPrivate();
  const [selectedFile, setSelectedFile] = useState<FormData | null>(null);
  const [showMessageResponse, setShowMessageResponse] = useState(false);
  const [resData, setResData] = useState<AddStudentsResponse | null>(null);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (selectedFile) {
        const res: AxiosResponse<AddStudentsResponse> = await axios.post(
          '/admin/import-students',
          selectedFile,
        );
        console.log(res.data);
        setResData(res.data);
        setShowMessageResponse(() => true);
      } else {
        console.log('nie wybrałeś pliku');
      }
    } catch (err) {
      console.log(err);
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

  return (
    <div className="form-adding-csv">
      <MessageResponse
        data={resData}
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
