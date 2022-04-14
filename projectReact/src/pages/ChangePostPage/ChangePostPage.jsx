import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./styles.module.css";
import { Col } from 'antd';
import api from "./../../utils/Api";
import Form from "./../../components/Form/index";
import FormInput from './../../components/FormInput/index';
import FormButton from './../../components/FormButton/index';
import { useParams,useNavigate } from 'react-router-dom';
export function ChangePostPage({chahgePosts}) {
  const { postID } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  function onSubmit(data) {
    api.ChahgePost({ ...data }, postID).then((newPost) => {
      chahgePosts(newPost);
      reset();
    });
  }

  return (
    <>
    <Col offset={4}>
    <button className={s.btn} onClick={() => navigate(-1)}>Назад</button>
    
    <Form title="Измените данные" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        {...register("title")}
        id="title"
        type="text"
        placeholder="Введите title"
      />

      <FormInput
        {...register("text")}
        id="text"
        type="text"
        placeholder="Введите text"
      />
      <FormInput
        {...register("image")}
        id="image"
        type="text"
        placeholder="Введите image"
      /> 
      <FormInput
        {...register("tag")}
        id="tag"
        type="text"
        placeholder="Введите tags"
      />

      <div>
        {errors?.text && (
          <p className="errorMessage">{errors?.text?.message}</p>
        )}
      </div>

      

      <FormButton type="submit" color="blue">
        Редактировать пост
      </FormButton>
    </Form>
    </Col>
    </>
  );
}