import React, { useCallback, useState, useEffect } from "react";
import api from "../../utils/Api";
import Spinner from "../../components/Spinner";
import { PostOne } from '../../components/PostOne/PostOne';
import { useParams, useNavigate } from "react-router-dom";
import { NotFound } from './../../components/NotFound/NotFound';

export const PagePost = () => {
  // const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  const { postID } = useParams();
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleFormReviews(dataProduct) {
   setProductData(dataProduct)
  }


  useEffect(() => {
    setIsLoading(true)
    api.getProductById(postID)
      .then((dataProduct) => {
        setProductData(dataProduct)
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [postID])


  //console.log("ffff", productData)

  return (
    <>

      {isLoading && <Spinner />}
      {isError && <NotFound title="Страница не найдена" buttonText="Назад" buttonAction={() => navigate(-1)} />}
      {productData && !isError && <PostOne {...productData} addReviews={handleFormReviews} />}
    </>
  );
};
