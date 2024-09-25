import { useEffect, useState } from "react";
import { getComments, getProductDetail } from "../../shared/api/api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div``;
const ProductWrap = styled.div``;
const CommentWrap = styled.div`
  color: green;
`;

export const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  // 데이터 로딩 함수
  const fetchData = async () => {
    try {
      const data = await getProductDetail(id);
      const list = await getComments(id);
      setProductDetail(data);
      setComments(list);
    } catch (error) {
      console.error("Failed to fetch product detail", error);
    }
  };
  console.log(comments);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {productDetail && (
        <ProductWrap>
          <img src={productDetail.images[0]} alt={productDetail.name} />
          <h2>{productDetail.name}</h2>
          <p>{productDetail.price.toLocaleString()}원</p>
          <p>{productDetail.description}</p>
          {/* <p>태그: {productDetail.tags.join(", ")}</p> */}
        </ProductWrap>
      )}
      {comments?.list?.map((comment) => (
        <CommentWrap key={comment.id}>
          <p>{comment.content}</p>
          <p>{comment.user}</p>
        </CommentWrap>
      ))}
    </Container>
  );
};
