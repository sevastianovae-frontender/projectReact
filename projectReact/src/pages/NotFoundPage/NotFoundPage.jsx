import React from "react";
import { NotFound } from './../../components/NotFound/NotFound';
import { useNavigate } from 'react-router-dom';


export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
        <NotFound title="Страница не найдена" buttonText="На главную" buttonAction={()=> navigate("/")}>
        </NotFound>
  );
};
