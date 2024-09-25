import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://panda-market-api.vercel.app", // 기본 URL 설정
});

export const getItems = async (params = {}) => {
  // 기본값을 params 객체의 프로퍼티로 할당
  const {
    page = 1,
    pageSize = 10,
    orderBy = "orderBy",
    keyword = "keyword",
  } = params;

  try {
    // API 요청
    const response = await api.get("/products", {
      params: {
        page,
        pageSize,
        orderBy,
        keyword,
      },
    });

    // 데이터 반환
    return response.data;
  } catch (error) {
    // 오류 처리
    throw new Error("데이터를 불러오지 못했습니다.");
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
};

//게시글의 댓글 목록 조회
export const getComments = async (id) => {
  try {
    const response = await api.get(`/products/${id}/comments?limit=100`);
    return response.data;
  } catch (error) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
};
